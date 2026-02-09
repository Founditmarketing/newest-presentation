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

    useEffect(() => {
        if (!supabase) return;

        // 1. Create channel
        const channel = supabase.channel('presentation-v1', {
            config: {
                broadcast: { self: false } // Don't receive own messages
            }
        });

        // 2. Subscribe to events
        channel
            .on('broadcast', { event: 'slide_change' }, (payload) => {
                if (!isHost) {
                    console.log('Received slide update:', payload.payload.index);
                    setCurrentSlide(payload.payload.index);
                }
            })
            .subscribe((status) => {
                if (status === 'SUBSCRIBED') {
                    setIsConnected(true);
                    channelRef.current = channel;
                }
            });

        // 3. Cleanup
        return () => {
            supabase.removeChannel(channel);
            channelRef.current = null;
        };
    }, [isHost]); // Re-sub if host status changes? Maybe not needed, but safe.

    const setSlide = useCallback(async (index: number) => {
        // Local Update
        setCurrentSlide(index);

        // Broadcast if Host
        if (isHost && channelRef.current) {
            await channelRef.current.send({
                type: 'broadcast',
                event: 'slide_change',
                payload: { index }
            });
        }
    }, [isHost]);

    const becomeHost = () => setIsHost(true);

    return (
        <SyncContext.Provider value={{ currentSlide, isHost, setSlide, becomeHost, isConnected }}>
            {children}
        </SyncContext.Provider>
    );
};
