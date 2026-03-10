import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { RealtimeChannel } from '@supabase/supabase-js';

interface SyncContextType {
    currentSlide: number;
    isHost: boolean;
    setSlide: (index: number) => void;
    becomeHost: () => void;
    isConnected: boolean;
}

const SyncContext = createContext<SyncContextType | null>(null);

export const useSync = () => {
    const context = useContext(SyncContext);
    if (!context) throw new Error('useSync must be used within a SyncProvider');
    return context;
};

export const SyncProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHost, setIsHost] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const channelRef = useRef<RealtimeChannel | null>(null);

    // Use a ref to track host status inside event listeners without needing to re-bind them
    const isHostRef = useRef(isHost);
    useEffect(() => {
        isHostRef.current = isHost;
        console.log('[SYNC] isHost changed to:', isHost);
    }, [isHost]);

    useEffect(() => {
        console.log('[SYNC] Mount check inside SyncProvider. Supabase object exists:', !!supabase);
        if (!supabase) return;

        console.log('[SYNC] Creating presentation-v1 channel...');
        // 1. Create channel with explicit ack enabled for mobile reliability
        const channel = supabase.channel('presentation-v1', {
            config: {
                broadcast: { self: false, ack: true }, // Don't receive own messages, force acknowledge
                presence: { key: 'client' }
            }
        });

        // 2. Subscribe to events
        console.log('[SYNC] Binding events...');
        channel
            .on('broadcast', { event: 'slide_change' }, (payload) => {
                console.log('[SYNC] Received broadcast slide_change payload:', payload);
                if (!isHostRef.current) {
                    console.log('[SYNC] Updating slide to:', payload.payload.index);
                    setCurrentSlide(payload.payload.index);
                } else {
                    console.log('[SYNC] Ignored broadcast because I am the host.');
                }
            })
            .subscribe(async (status, err) => {
                console.log('[SYNC] Channel subscribe status:', status, 'Error:', err);
                if (status === 'SUBSCRIBED') {
                    setIsConnected(true);
                    channelRef.current = channel;
                    console.log('[SYNC] Channel subscribed. Tracking presence...');
                    // Force a presence track to keep the socket alive on mobile
                    await channel.track({ online: true, source: 'browser' });
                    console.log('[SYNC] Presence tracking complete.');
                }
            });

        // 3. Cleanup
        return () => {
            console.log('[SYNC] Unmounting SyncProvider. Removing channel.');
            supabase.removeChannel(channel);
            channelRef.current = null;
        };
    }, []); // <-- Empty dependency prevents closing the socket when user clicks Host Mode

    const setSlide = useCallback(async (index: number) => {
        console.log(`[SYNC] setSlide called with index: ${index}. isHost: ${isHost}`);
        // Local Update
        setCurrentSlide(index);

        // Broadcast if Host
        if (isHost && channelRef.current) {
            console.log(`[SYNC] Broadcasting slide ${index}...`);
            await channelRef.current.send({
                type: 'broadcast',
                event: 'slide_change',
                payload: { index }
            });
            console.log(`[SYNC] Broadcast finished.`);
        }
    }, [isHost]);

    const becomeHost = () => {
        console.log(`[SYNC] becomeHost triggered`);
        setIsHost(true);
    };

    return (
        <SyncContext.Provider value={{ currentSlide, isHost, setSlide, becomeHost, isConnected }}>
            {children}
        </SyncContext.Provider>
    );
};
