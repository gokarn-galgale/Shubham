import React from 'react';
import { WeddingEvent, FamilySection } from './types';

// Page 1 Header
export const FAMILY_NAMES = {
  brideSide: "देशमुख", // Deshmukh (Bride Side)
  groomSide: "पाटील"   // Patil (Groom Side)
};

// Page 2 Content
export const INVITATION_TEXT = {
  header: "श्री गणेश प्रसन्न || श्री स्वामी समर्थ ||",
  subHeader: "सप्रेम नमस्कार वि. वि. श्री कृपेकरून आमचे येथे",
  deceased_grand: "(कै. रामचंद्र हरि देशमुख यांची नात, श्री. राजेश रामचंद्र देशमुख यांची कनिष्ठ सुकन्या रा. पुणे)",
  bride_name: "चि. सौ. का. अदिती",
  groom_name: "चि. रोहन",
  groom_details: "कै. विष्णू पाटील यांचा नातू, श्री. विलास विष्णू पाटील यांचे ज्येष्ठ चिरंजीव रा. कोल्हापूर",
  main_action: "शुभ विवाह",
  poem: `लग्नाची बेडी, प्रेमाची शिडी,
नात्यांची गुंफण, मनाची बांधणी,
दोन जीवांचे मिलन,
सुखाच्या सरी, आनंदाची उधळण.
अदिती - रोहन चा विवाह सोहळा,
आशिर्वाद द्यायला यावे गोळा ॥`
};

// Page 3 Events
export const EVENTS: WeddingEvent[] = [
  {
    title: "हळदी समारंभ",
    date: "सोमवार दि. 01 डिसेंबर 2025",
    time: "सायं. 7 वा (विवाह स्थळी)",
    icon: 'sun'
  },
  {
    title: "विवाह मुहूर्त",
    date: "मंगळवार दि. 02 डिसेंबर 2025",
    time: "दुपारी 12 वा. 35 मि. अक्षतारोपण",
    icon: 'heart'
  }
];

// Page 3 Family
export const FAMILY_DETAILS: FamilySection[] = [
  {
    title: "आपले स्नेहांकित",
    members: [
      { name: "श्री. राजेश रामचंद्र देशमुख" },
      { name: "सौ. रंजना राजेश देशमुख" },
      { name: "श्री. अमित राजेश देशमुख" },
      { name: "सौ. नेहा अमित देशमुख" },
      { name: "श्री. विलास विष्णू पाटील" },
      { name: "सौ. विद्या विलास पाटील" },
      { name: "श्री. संदीप विलास पाटील" },
      { name: "सौ. प्रिया संदीप पाटील" },
    ]
  },
  {
    title: "समस्त देशमुख व पाटील परिवार",
    members: []
  }
];

export const KIDS_SECTION = {
  title: "बाल निमंत्रक",
  names: "आर्यन, स्वरा, अर्णव",
  tagline: "आमच्या आत्याच्या लग्नाला नक्की यायचं हं!"
};

// Page 4 Venue
export const VENUE_DETAILS = {
  name: "संस्कृती लॉन्स आणि बँक्वेट",
  address: "सर्व्हे नं. 45, कर्वे नगर, पुणे, महाराष्ट्र 411052",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Sanskriti+Lawns+Pune",
  contact: "98 7654 3210"
};