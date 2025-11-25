import React, { useState } from 'react';
import GaneshHeader from './components/GaneshHeader';
import { HeroSection } from './components/HeroSection';
import InvitationDetails from './components/InvitationDetails';
import EventTimeline from './components/EventTimeline';
import FamilyDetails from './components/FamilyDetails';
import VenueFooter from './components/VenueFooter';
import ScrollReveal from './components/ScrollReveal';
import { Volume2, VolumeX } from 'lucide-react';

// Optional: Background music element (Simulated functionality)
const AudioControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Note: Actual audio playback usually requires user interaction first due to browser policies.
  const toggleAudio = () => setIsPlaying(!isPlaying);

  return (
    <button 
      onClick={toggleAudio}
      className="fixed bottom-4 right-4 z-50 bg-gold-500 text-maroon-900 p-3 rounded-full shadow-lg hover:bg-gold-400 transition-colors"
      title="Music Toggle (Simulated)"
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
}

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen font-serif bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] bg-fixed">
      <GaneshHeader />
      <HeroSection />
      
      <div className="container mx-auto max-w-5xl shadow-2xl bg-white my-4 md:rounded-3xl overflow-hidden border border-gray-100">
        <ScrollReveal>
          <InvitationDetails />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <EventTimeline />
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <FamilyDetails />
        </ScrollReveal>
      </div>
      
      <VenueFooter />
      <AudioControl />
    </main>
  );
};

export default App;