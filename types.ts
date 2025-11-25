export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  description?: string;
  icon: 'sun' | 'moon' | 'heart' | 'music';
}

export interface FamilyMember {
  name: string;
  relation?: string;
}

export interface FamilySection {
  title: string;
  members: FamilyMember[];
}