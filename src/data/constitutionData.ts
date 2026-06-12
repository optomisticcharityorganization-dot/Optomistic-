import { ReviewSubscriber, OfficialCertificate, CoreObjective, MembershipCategory, AdminRole } from '../types';

export const ORGANISATION_NAME = 'OPTOMISTIC HUMANITY CHARITY ORGANIZATION';
export const REGISTRATION_NUMBER = 'SL150125OPTOM24013';
export const INCORPORATION_DATE = '15th January 2025';
export const REGISTERED_ADDRESS = '18 Baily Street, Brookfields, Freetown, Sierra Leone.';
export const MOTTO = 'WE ARE ONE';
export const MOTTO_SUBTITLE = '“Advancing Humanity through Empowerment, Education, and Equality.”';
export const CONTACT_EMAIL = 'optomistic.charity.organization@gmail.com';

export const LOGO_PATH = '/src/assets/images/ohco_logo_1781228993912.jpg';
export const ILLUSTRATION_EDUCATION = '/src/assets/images/children_education_1781229010645.jpg';
export const ILLUSTRATION_AGRICULTURE = '/src/assets/images/agricultural_enterprise_1781229025928.jpg';
export const ILLUSTRATION_LEGAL = '/src/assets/images/legal_advocacy_1781229042393.jpg';

export const certificates: OfficialCertificate[] = [
  {
    title: 'Certificate of Incorporation',
    issuer: 'Corporate Affairs Commission, Sierra Leone',
    number: 'SL150125OPTOM24013',
    status: 'Private Company Limited by Guarantee',
    authority: 'Ag. CEO & Registrar'
  },
  {
    title: 'Certificate of Registration',
    issuer: 'Corporate Affairs Commission, Sierra Leone',
    office: '18 Baily Street, Brookfields, Freetown, Sierra Leone',
    authority: 'Ag. CEO & Registrar'
  }
];

export const coreObjectivesPart1: CoreObjective[] = [
  {
    letter: 'A',
    title: 'Human Rights & Justice',
    description: 'Fighting gender-based violence and providing legal justice for children and women in vulnerable situations.'
  },
  {
    letter: 'B',
    title: 'Agriculture & Enterprise',
    description: 'Creating an enabling environment for agricultural enterprise, leveraging value chains, and equipping youth with technical and technical farming skills.'
  },
  {
    letter: 'C',
    title: 'Climate Change',
    description: 'Raising awareness about climate impacts and prompting/promoting sustainable practices, environmental conservation, and community resilience.'
  },
  {
    letter: 'D',
    title: 'Education',
    description: 'Actively advocating for quality education for girls and marginalized children through formal learning centers and scholarship programs.'
  }
];

export const coreObjectivesPart2: CoreObjective[] = [
  {
    letter: 'E',
    title: 'Child Protection',
    description: 'Rescuing children from exploitative situations, safe-guarding their rights, and providing secure temporary shelters.'
  },
  {
    letter: 'F',
    title: 'Economic Empowerment',
    description: 'Providing sustainable micro-finance initiatives, vocational training, and startup grants to enable women and youth to become financially independent.'
  },
  {
    letter: 'G',
    title: 'Global Partnership',
    description: 'Building deep international partnerships with European Nations, United Kingdom, and USA to transform the local community workforce.'
  },
  {
    letter: 'H',
    title: 'Health & Mental Wellbeing',
    description: 'Promoting access to healthcare services, nutritional support, and dedicated mental health awareness and campaigns in Sierra Leone.'
  }
];

export const membershipCategories: MembershipCategory[] = [
  {
    name: 'Foundation Members',
    description: 'The pioneering individuals who conceived and established the vision and structural framework of the organization.'
  },
  {
    name: 'Project Membership',
    description: 'Open to all individuals irrespective of nationality, gender, or religion who are committed to advancing our project goals.',
    fee: 'Registration fee: NLe 1,000.00'
  },
  {
    name: 'Co-operation Members',
    description: 'Friends, strategic allies, and well-wishers providing moral, networking, or structured organizational support.'
  },
  {
    name: 'Honorary Members',
    description: 'Eminent individuals elected by the management committee in recognition of their exemplary societal of financial contributions.'
  }
];

export const adminRoles: AdminRole[] = [
  {
    role: 'Founder & Chief Executive Officer (CEO)',
    description: 'Must hold a Bachelor’s degree in Social Sciences. Serves as principal liaison for national and international partners and holds major signatory status for banking transactions.'
  },
  {
    role: 'Executive Director',
    description: 'Provides general oversight, strategic alignment, and execution monitoring across all active regions and thematic fields.'
  },
  {
    role: 'Director of Administration',
    description: 'Requires a solid background in human rights and 3+ years of administrative leadership to verify high organizational standards.'
  },
  {
    role: 'Programme Manager',
    description: 'Directs field operations, checks milestones, schedules project implementations, and supervises the regional field team.'
  },
  {
    role: 'Finance Manager',
    description: 'ACCA/CIMA qualified professional managing strict budgetary controls, fund transparency, regular audits, and transaction statements.'
  },
  {
    role: 'Specialized Officers',
    description: 'Including dedicated roles: Women’s Coordinator, Education Officer, Research Officer, and regional field coordinators.'
  }
];

export const subscribers: ReviewSubscriber[] = [
  { name: 'Abdul Ibrahim Jalloh', role: 'Founder / CEO', address: '18 Baily St, Freetown' },
  { name: 'Fatmata Sourie', role: 'Director', address: '18 Baily St, Freetown' },
  { name: 'Ibrahim Sal Jalloh', role: 'Director', address: '18 Baily St, Freetown' },
  { name: 'Abubakarr Bayoh', role: 'Board Chairman', address: '18 Baily St, Freetown' },
  { name: 'Ibrahim M. Mansaray', role: 'Secretary', address: '18 Baily St, Freetown' },
  { name: 'Lamrana Bah', role: 'Director', address: '18 Baily St, Freetown' },
  { name: 'Kadiatu Lamarana Bah', role: 'Director', address: '18 Baily St, Freetown' },
  { name: 'Emmanuel Mbawa', role: 'Director', address: '18 Baily St, Freetown' }
];

export const witness = {
  name: 'Edmond Bangalie Margai',
  description: 'Climate Change Activist'
};
