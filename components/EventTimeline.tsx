import React from 'react';
import { EVENTS } from '../constants';
import { Sun, Heart } from 'lucide-react';

const EventTimeline: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-maroon-50">
      <h2 className="text-3xl font-bold text-center text-maroon-800 mb-10">शुभ कार्यक्रम</h2>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center max-w-5xl mx-auto">
        {EVENTS.map((event, index) => (
          <div key={index} className="flex-1 bg-white p-8 rounded-2xl shadow-md border-b-4 border-gold-500 transform transition hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-600 mb-4">
                {event.icon === 'sun' ? <Sun size={32} /> : <Heart size={32} />}
              </div>
              <h3 className="text-2xl font-bold text-maroon-700 mb-2 bg-gold-400 px-4 py-1 rounded-full text-white inline-block">
                {event.title}
              </h3>
              <div className="h-px w-24 bg-gray-200 my-4"></div>
              <p className="text-lg font-semibold text-gray-800 mb-1">{event.date}</p>
              <p className="text-gray-600">{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventTimeline;
