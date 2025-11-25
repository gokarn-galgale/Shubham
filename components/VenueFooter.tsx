import React from 'react';
import { VENUE_DETAILS } from '../constants';
import { MapPin, Phone, Send } from 'lucide-react';

const VenueFooter: React.FC = () => {
  return (
    <footer className="bg-maroon-900 text-white pt-16 pb-8 px-4 rounded-t-3xl relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#fbbf24 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold-500 mb-8 font-serif">विवाह स्थळ</h2>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 inline-block w-full md:w-2/3">
             <h3 className="text-2xl font-bold mb-2">{VENUE_DETAILS.name}</h3>
             <p className="text-gray-200 mb-6">{VENUE_DETAILS.address}</p>
             
             <a href={VENUE_DETAILS.mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold-500 text-maroon-900 px-6 py-3 rounded-full font-bold hover:bg-gold-400 transition-colors">
               <MapPin size={20} />
               Google Map
             </a>
          </div>
        </div>

        <div className="border-t border-maroon-700 pt-8 flex flex-col items-center">
          <p className="text-gold-400 font-bold mb-2">प्रेषक</p>
          <p className="text-xl mb-1">श्री. राजेश रामचंद्र देशमुख व परिवार</p>
          <a href={`tel:${VENUE_DETAILS.contact.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-300 hover:text-white mt-2">
            <Phone size={16} />
            {VENUE_DETAILS.contact}
          </a>
        </div>

        <div className="mt-12 text-xs text-maroon-400">
           Digital Invitation
        </div>

      </div>
    </footer>
  );
};

export default VenueFooter;