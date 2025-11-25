import React, { useState, useEffect } from 'react';
import { FAMILY_NAMES } from '../constants';

export const HeroSection: React.FC = () => {
  const calculateTimeLeft = () => {
    // Wedding Date: Dec 02, 2025 12:21:00
    const difference = new Date("2025-12-02T12:21:00").getTime() - new Date().getTime();
    
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [
    { label: 'दिवस', value: timeLeft.days },
    { label: 'तास', value: timeLeft.hours },
    { label: 'मिनिटे', value: timeLeft.minutes },
    { label: 'सेकंद', value: timeLeft.seconds }
  ];

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Real Mandap Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2000&auto=format&fit=crop" 
          alt="Royal Mandap Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay for Text Readability - Gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30"></div>
        {/* Golden hue overlay */}
        <div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay"></div>
      </div>

      {/* Hanging Floral Decoration (Toran) */}
      <div className="absolute top-0 left-0 w-full z-10 opacity-90 pointer-events-none">
           {/* Using a repeating floral pattern image */}
           <img 
             src="https://www.pngmart.com/files/16/Wedding-Flower-Decoration-PNG-Free-Download.png" 
             alt="Hanging Flowers" 
             className="w-full h-auto max-h-48 object-cover md:object-contain object-top drop-shadow-xl"
           />
      </div>

      <div className="relative z-20 w-full max-w-6xl px-4 flex flex-col items-center gap-4 md:gap-8 mt-12 md:mt-0">
        
        {/* Shubh Vivah Badge */}
        <div className="animate-fade-in-down mb-2">
             <div className="relative inline-block group cursor-default">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-amber-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-8 py-2 bg-maroon-900 ring-1 ring-gold-500/50 rounded-full flex items-center gap-3 shadow-2xl">
                    <span className="text-gold-400 text-xl">❖</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 font-bold tracking-[0.2em] text-lg md:text-2xl uppercase font-serif">
                        ॥ शुभ विवाह ॥
                    </span>
                    <span className="text-gold-400 text-xl">❖</span>
                </div>
             </div>
        </div>

        {/* Main Content: Names & Couple */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            
            {/* Bride Side Name (Left) */}
            <div className="order-2 md:order-1 text-center md:text-right w-full md:w-1/3">
                <div className="relative">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] tracking-wide">
                    {FAMILY_NAMES.brideSide}
                    </h1>
                    <p className="text-gold-300 text-lg font-serif mt-2 tracking-widest uppercase opacity-90 drop-shadow-md">
                        Bride's Family
                    </p>
                </div>
            </div>

            {/* Central Photo in Mandap Frame */}
            <div className="order-1 md:order-2 relative group flex-shrink-0">
                 {/* Rotating Glow Ring behind */}
                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-500 via-yellow-200 to-gold-600 blur-md opacity-40 group-hover:opacity-60 animate-spin-slow duration-[10s]"></div>
                 
                 <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gold-300 p-1 shadow-2xl overflow-hidden z-10 bg-black/50 backdrop-blur-sm">
                     <div className="w-full h-full rounded-full overflow-hidden border-2 border-gold-500/50 relative">
                        <img 
                            src="https://img.freepik.com/premium-photo/3d-illustration-indian-wedding-couple-generative-ai_1034902-12349.jpg" 
                            alt="Couple" 
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                        />
                        {/* Inner shadow overlay */}
                        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] rounded-full"></div>
                     </div>
                 </div>
                 
                 {/* Decorative Kalash/Flower icon at bottom of frame */}
                 <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-16 h-16 bg-contain bg-no-repeat bg-center drop-shadow-lg" 
                      style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/3596/3596167.png')" }}>
                 </div>
            </div>

            {/* Groom Side Name (Right) */}
            <div className="order-3 md:order-3 text-center md:text-left w-full md:w-1/3">
                <div className="relative">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] tracking-wide">
                    {FAMILY_NAMES.groomSide}
                    </h1>
                    <p className="text-gold-300 text-lg font-serif mt-2 tracking-widest uppercase opacity-90 drop-shadow-md">
                        Groom's Family
                    </p>
                </div>
            </div>
        </div>

        {/* Date & Countdown */}
        <div className="mt-8 flex flex-col items-center gap-8 w-full">
             <div className="flex items-center gap-4 text-gold-100 font-serif text-2xl md:text-3xl tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                 <span className="hidden md:block w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-400"></span>
                 02 <span className="text-gold-500">•</span> 12 <span className="text-gold-500">•</span> 2025
                 <span className="hidden md:block w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-400"></span>
             </div>

            {/* Glassmorphism Timer */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {timerComponents.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 w-16 h-16 md:w-24 md:h-24 rounded-xl flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] group hover:bg-white/15 transition-all duration-300">
                      
                      {/* Reflection effect */}
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                      
                      <span className="text-2xl md:text-4xl font-bold text-white font-serif z-10 drop-shadow-md">
                        {String(item.value).padStart(2, '0')}
                      </span>
                  </div>
                  <span className="text-[10px] md:text-xs text-gold-200 font-medium uppercase tracking-widest mt-2 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 animate-bounce flex flex-col items-center z-30 cursor-pointer hover:text-white transition-colors">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2 font-light">Scroll Down</span>
        <svg className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
};