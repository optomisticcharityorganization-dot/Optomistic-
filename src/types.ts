export interface ReviewSubscriber {
  name: string;
  role: string;
  address: string;
}

export interface OfficialCertificate {
  title: string;
  issuer: string;
  number?: string;
  status?: string;
  office?: string;
  authority?: string;
}

export interface CoreObjective {
  title: string;
  letter: string;
  description: string;
}

export interface MembershipCategory {
  name: string;
  description: string;
  fee?: string;
}

export interface AdminRole {
  role: string;
  description: string;
}

export interface ConstitutionPage {
  id: number;
  type: 'cover' | 'certificates' | 'illustration' | 'text' | 'objectives' | 'governance' | 'admin' | 'subscribers' | 'back-cover';
  title: string;
  subtitle?: string;
  content?: string;
  quote?: string;
  imagePath?: string;
  imageAlt?: string;
}
