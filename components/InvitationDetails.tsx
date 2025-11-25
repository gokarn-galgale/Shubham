import React from 'react';
import { INVITATION_TEXT } from '../constants';

const InvitationDetails: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center relative bg-white rounded-3xl shadow-lg my-8 border-t-8 border-maroon-700 mx-4">
      
      <div className="text-maroon-800 text-sm md:text-base font-medium mb-6 leading-relaxed px-4">
        {INVITATION_TEXT.header}
      </div>

      <p className="text-lg text-gray-700 mb-8">{INVITATION_TEXT.subHeader}</p>

      {/* Bride */}
      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-2 italic px-8">{INVITATION_TEXT.deceased_grand}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-maroon-600 mb-2 font-serif">{INVITATION_TEXT.bride_name}</h2>
      </div>

      <div className="text-gold-600 text-2xl font-script my-4">- weds -</div>

      {/* Groom */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-maroon-600 mb-2 font-serif">{INVITATION_TEXT.groom_name}</h2>
        <p className="text-sm text-gray-500 px-8">{INVITATION_TEXT.groom_details}</p>
      </div>

      <div className="ornament-divider text-2xl text-maroon-700 font-bold">
        || {INVITATION_TEXT.main_action} ||
      </div>
      <p className="text-gray-600 text-sm">करणेचे योजिले आहे.</p>

      {/* Poem Box */}
      <div className="mt-12 p-6 bg-cream rounded-xl border border-gold-200 shadow-inner">
        <p className="whitespace-pre-line text-maroon-800 font-medium leading-loose text-base md:text-lg">
          {INVITATION_TEXT.poem}
        </p>
      </div>
    </section>
  );
};

export default InvitationDetails;