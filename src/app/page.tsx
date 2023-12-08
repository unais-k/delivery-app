import React from 'react';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('./pages/LandingPage'));


export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}
