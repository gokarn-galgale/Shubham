import React from 'react';

const GaneshHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-maroon-700">
        <div className="w-24 h-24 mb-2 bg-contain bg-no-repeat bg-center opacity-80" 
             style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg/440px-Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg')" }}>
        </div>
      <p className="text-xs font-semibold tracking-wider uppercase text-gold-600">|| श्री गणेशाय नमः ||</p>
    </div>
  );
};

export default GaneshHeader;
