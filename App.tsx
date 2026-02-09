import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SyncProvider } from '@/components/SyncProvider'; // Use @ alias for consistency
import Home from '@/src/pages/Home';
import PresentationContent from '@/src/pages/Presentation';

export default function App() {
  return (
    <BrowserRouter>
      <SyncProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<PresentationContent />} />
          {/* Aliases / Redirects */}
          <Route path="/deck" element={<Navigate to="/presentation" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SyncProvider>
    </BrowserRouter>
  );
}