import React from 'react';
import { FAMILY_DETAILS, KIDS_SECTION } from '../constants';

const FamilyDetails: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Elders */}
        <div className="text-center mb-12">
           <h3 className="inline-block bg-maroon-700 text-white px-8 py-2 rounded-full text-xl font-bold mb-8">
             {FAMILY_DETAILS[0].title}
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
             {FAMILY_DETAILS[0].members.map((member, idx) => (
               <p key={idx} className="text-maroon-900 font-medium text-lg">
                 {member.name}
               </p>
             ))}
           </div>
           <p className="mt-6 text-xl font-bold text-maroon-800">समस्त महाजन व मित्र परिवार</p>
        </div>

        {/* Kids Section - Styled to look playful like the "Nustich Ludbud" in PDF */}
        <div className="relative mt-16 p-8 bg-yellow-50 rounded-3xl border-2 border-dashed border-maroon-300 text-center overflow-visible">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-maroon-600 text-white px-6 py-2 rounded-lg shadow-lg">
             <span className="font-bold">{KIDS_SECTION.title}</span>
          </div>
          
          <div className="mt-4 flex justify-center gap-4 mb-4">
             {/* Decor icons representing kids playing music from PDF */}
             <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="trumpet" className="w-12 h-12 opacity-80" />
             <img src="https://cdn-icons-png.flaticon.com/512/3081/3081827.png" alt="drum" className="w-12 h-12 opacity-80" />
          </div>

          <p className="text-2xl font-bold text-maroon-800 mb-2">{KIDS_SECTION.names}</p>
          <p className="text-gray-600 italic">"{KIDS_SECTION.tagline}"</p>
        </div>

      </div>
    </section>
  );
};

export default FamilyDetails;
