import React, { useState, useEffect } from 'react';
import { 
  Book, 
  Search, 
  Printer, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Activity, 
  ShieldCheck, 
  Award, 
  Feather, 
  UserCheck,
  ChevronRight,
  BookOpen,
  ArrowRightLeft,
  Eye,
  Menu,
  X
} from 'lucide-react';
import BookSpread from './components/BookSpread';
import { 
  ORGANISATION_NAME, 
  REGISTRATION_NUMBER, 
  INCORPORATION_DATE, 
  REGISTERED_ADDRESS, 
  MOTTO, 
  subscribers,
  certificates,
  coreObjectivesPart1,
  coreObjectivesPart2,
  membershipCategories,
  adminRoles,
  witness,
  LOGO_PATH,
  ILLUSTRATION_EDUCATION,
  ILLUSTRATION_AGRICULTURE,
  ILLUSTRATION_LEGAL
} from './data/constitutionData';

// Search Database indexing the articles of the constitution for search functionality
interface SearchItem {
  title: string;
  keywords: string[];
  snippet: string;
  spread: number;
  mobilePage: number;
}

const searchDatabase: SearchItem[] = [
  {
    title: 'Certificate of Incorporation',
    keywords: ['incorporation', 'certificate', 'registration', 'cac', 'freetown', 'corporate affairs commission', 'guarantee', 'sl150125optom24013', 'registry'],
    snippet: 'Official incorporating document certified under Sierra Leone laws with Registry No. SL150125OPTOM24013.',
    spread: 1,
    mobilePage: 1
  },
  {
    title: 'Certificate of Registration',
    keywords: ['registration', 'baily street', 'freetown', 'corporate affairs commission', 'office'],
    snippet: 'Corporate registration operating from headquarters at 18 Baily Street, Brookfields, Freetown.',
    spread: 1,
    mobilePage: 1
  },
  {
    title: 'Motto, Mission & Fundamental Philosophy',
    keywords: ['motto', 'we are one', 'empowerment', 'education', 'equality', 'philosophy', 'compass', 'mission', 'poverty'],
    snippet: 'Motto: "WE ARE ONE". "Poverty is like a disease thus can be cured and eradicated; poverty is a condition not a destiny!"',
    spread: 1,
    mobilePage: 2
  },
  {
    title: 'The Official Emblem Symbolism',
    keywords: ['emblem', 'logo', 'symbol', 'handshake', 'solidarity', 'globe', 'laurels', 'we are one'],
    snippet: 'The handshake symbolizes cross-cultural union, framed by green laurels indicating solid food security.',
    spread: 1,
    mobilePage: 2
  },
  {
    title: 'General Memorandum of Association',
    keywords: ['memorandum', 'registered office', 'legal nature', 'non-profit', 'charitable', 'assets', 'dividends'],
    snippet: 'A non-profit, advocacy-led organization whose assets shall be applied solely toward charitable public-benefit goals.',
    spread: 2,
    mobilePage: 3
  },
  {
    title: 'Human Rights & Criminal Justice (Objective A)',
    keywords: ['human rights', 'justice', 'gender', 'violence', 'gbv', 'children', 'women', 'abuse'],
    snippet: 'Fighting gender-based violence (GBV) and providing legal justice and counseling for vulnerable women and children.',
    spread: 2,
    mobilePage: 4
  },
  {
    title: 'Agricultural Enterprise & Skill Training (Objective B)',
    keywords: ['agriculture', 'enterprise', 'youth', 'farming', 'mechanics', 'welding', 'skills', 'food security'],
    snippet: 'Creating enabling settings for youth agricultural mechanization, value-chain tools, and eco-friendly farming.',
    spread: 2,
    mobilePage: 4
  },
  {
    title: 'Climate Change, Awareness & Conservation (Objective C)',
    keywords: ['climate change', 'sustainable', 'conservation', 'environmental', 'resilience'],
    snippet: 'Raising awareness about climate impacts, prompting sustainable environment conservation, and district resilience.',
    spread: 2,
    mobilePage: 4
  },
  {
    title: 'Girl-Child Quality Education (Objective D)',
    keywords: ['education', 'girls', 'marginalized', 'schooling', 'scholarships', 'learning kits', 'formal school'],
    snippet: 'Actively advocating for quality formal schooling for girl-students, textbooks, and tutoring sponsorship plans.',
    spread: 2,
    mobilePage: 4
  },
  {
    title: 'Child Rescue Protection & Safe Shelters (Objective E)',
    keywords: ['child protection', 'rescue', 'exploitation', 'safeguarding', 'rights', 'temporary shelter'],
    snippet: 'Rescuing children from exploitative labor and human trafficking, securing rights, and supplying safe shelters.',
    spread: 3,
    mobilePage: 5
  },
  {
    title: 'Women Economic Empowerment & Grants (Objective F)',
    keywords: ['economic', 'empowerment', 'microfinance', 'micro-finance', 'grants', 'startup', 'women', 'vocational'],
    snippet: 'Providing micro-finance grants, startup credits, and training to render adolescent females financially independent.',
    spread: 3,
    mobilePage: 5
  },
  {
    title: 'Global Outreach & Regional Partnerships (Objective G)',
    keywords: ['global', 'partnership', 'europe', 'united kingdom', 'uk', 'usa', 'cooperation', 'international'],
    snippet: 'Establishing international partnerships with the UK, EU nations, and US bodies to uplift regional Sierra Leone workforces.',
    spread: 3,
    mobilePage: 5
  },
  {
    title: 'Welfare, Nutrition & Mental Health Campaigns (Objective H)',
    keywords: ['health', 'welfare', 'mental wellbeing', 'wellbeing', 'healthcare', 'nutrition', 'campaigns'],
    snippet: 'Promoting healthy clinics, nutrition support kits, and dedicated mental health campaigns in vulnerable districts.',
    spread: 3,
    mobilePage: 5
  },
  {
    title: 'Membership Classes & General Quorum',
    keywords: ['membership', 'foundation', 'project membership', 'cooperation', 'honorary', 'fees', 'quorum'],
    snippet: 'Defines four administrative membership classes including Foundation, Project, Co-operation, and Honorary.',
    spread: 3,
    mobilePage: 6
  },
  {
    title: 'Board Directors & Corporate Authority',
    keywords: ['directors', 'board', 'governing', 'companies act', 'audit', 'five directors', '5 directors'],
    snippet: 'The Governing Board shall consist of max 5 directors exercising auditing powers in accordance with the Companies Act.',
    spread: 3,
    mobilePage: 6
  },
  {
    title: 'Founder & Chief Executive Officer (CEO)',
    keywords: ['founder', 'ceo', 'abdul ibrahim jalloh', 'abdul jalloh', 'signatory', 'bank', 'executive'],
    snippet: 'Founder/CEO Abdul Ibrahim Jalloh: manages international relationships, serves as principal bank signatory.',
    spread: 4,
    mobilePage: 7
  },
  {
    title: 'Administrative Directors & Programme Operations',
    keywords: ['executive director', 'administration', 'programme manager', 'regional coordinators', 'specialized officers'],
    snippet: 'Outlines managerial structures: Executive Director, Director of Administration, Programme Manager, and Welfare Officers.',
    spread: 4,
    mobilePage: 7
  },
  {
    title: 'Finance & Transparent Auditing Management',
    keywords: ['finance manager', 'accas', 'audit', 'budgetary', 'controls', 'fiscal year', '31st december'],
    snippet: 'Certified management controls closing on Dec 31, with strict independent qualified auditors appointed regularly.',
    spread: 4,
    mobilePage: 7
  },
  {
    title: 'Annual General Meetings (AGM)',
    keywords: ['meetings', 'annual general meeting', 'agm', 'notice', 'quorum', '12 months', '21 days'],
    snippet: 'Regulatory AGM held every 12 months with 21 days notice, fixing session quorum at 75% of active members.',
    spread: 4,
    mobilePage: 8
  },
  {
    title: 'Founding Covenant Signatories',
    keywords: ['subscribers', 'signatories', 'abdul ibrahim jalloh', 'fatmata sourie', 'ibrahim sal jalloh', 'abubakarr bayoh', 'ibrahim mansaray', 'lamrana bah', 'kadiatu bah', 'emmanuel mbawa'],
    snippet: 'A list of corporate signatories attesting to the charter at Bailey Street, witnessed by Edmond Margai.',
    spread: 5,
    mobilePage: 9
  },
  {
    title: 'Official Image Gallery & Prestige Showcase',
    keywords: ['gallery', 'photographic', 'prestige', 'showcase', 'outreach', 'welfare', 'classrooms', 'education', 'emblem', 'welder', 'mechanics', 'legal clinic'],
    snippet: 'Categorized digital timeline showcasing community outreach, school campaigns, agricultural mechanics, and legal-defense workshops.',
    spread: 5,
    mobilePage: 10
  },
  {
    title: 'Legal Ratification Seal & Sworn Oath',
    keywords: ['sworn', 'oath', 'ratification', 'seal', 'stamp', 'registrar', 'freetown', '75 percent'],
    snippet: 'Official corporate seal and sworn state affidavits ratifying the constitutional ledger as the supreme operating text.',
    spread: 6,
    mobilePage: 11
  }
];

export default function App() {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [currentPageMobile, setCurrentPageMobile] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showPrintView, setShowPrintView] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Chapters list for structural table of contents (updated to accommodate 13 pages and 7 spreads)
  const chapters = [
    { title: 'Front Cover', spread: 0, mobilePage: 0 },
    { title: 'Official Certificates', spread: 1, mobilePage: 1 },
    { title: 'Vision & Philosophy', spread: 1, mobilePage: 2 },
    { title: 'Memorandum of Association', spread: 2, mobilePage: 3 },
    { title: 'Core Objectives (Part I)', spread: 2, mobilePage: 4 },
    { title: 'Core Objectives (Part II)', spread: 3, mobilePage: 5 },
    { title: 'Articles of Association', spread: 3, mobilePage: 6 },
    { title: 'Administrative Structure', spread: 4, mobilePage: 7 },
    { title: 'Meetings & Financials', spread: 4, mobilePage: 8 },
    { title: 'Founding Subscribers', spread: 5, mobilePage: 9 },
    { title: 'Photographic Gallery', spread: 5, mobilePage: 10 },
    { title: 'Legal Ratification Seal', spread: 6, mobilePage: 11 },
    { title: 'Back Cover', spread: 6, mobilePage: 12 },
  ];

  // Search filter implementation
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredSearchResults = searchQuery.trim() === ''
    ? []
    : searchDatabase.filter(item => {
        const query = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(query) ||
          item.snippet.toLowerCase().includes(query) ||
          item.keywords.some(kw => kw.toLowerCase().includes(query))
        );
      });

  // Screen size checker
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); // run initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        if (isMobile) {
          if (currentPageMobile > 0) setCurrentPageMobile(prev => prev - 1);
        } else {
          if (currentSpread > 0) setCurrentSpread(prev => prev - 1);
        }
      } else if (e.key === 'ArrowRight') {
        if (isMobile) {
          if (currentPageMobile < 12) setCurrentPageMobile(prev => prev + 1);
        } else {
          if (currentSpread < 6) setCurrentSpread(prev => prev + 1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobile, currentSpread, currentPageMobile]);

  // Jump to a specific section helper
  const handleChapterJump = (spread: number, mobilePage: number) => {
    setCurrentSpread(spread);
    setCurrentPageMobile(mobilePage);
    setMobileMenuOpen(false);
  };

  const handlePrint = () => {
    window.print();
  };

  // If showing print view
  if (showPrintView) {
    return (
      <div className="bg-white min-h-screen text-slate-950 p-6 sm:p-12 font-serif max-w-4xl mx-auto selection:bg-amber-100">
        {/* Print Header */}
        <div className="border-b-4 border-slate-900 pb-6 mb-8 text-center flex flex-col items-center no-print">
          <Activity className="w-8 h-8 text-emerald-900 mb-2" />
          <h1 className="text-2xl font-black uppercase tracking-wide">{ORGANISATION_NAME}</h1>
          <p className="text-sm tracking-widest font-mono text-slate-500 mt-1">CONSTITUTIONAL REGISTER & LEDGER • PRINT VIEW</p>
          
          <div className="flex gap-4 mt-6">
            <button 
              onClick={handlePrint}
              className="px-5 py-2.5 bg-emerald-800 text-white rounded font-sans font-bold text-sm tracking-wide hover:bg-emerald-900 transition flex items-center gap-2 cursor-pointer shadow"
            >
              <Printer className="w-4 h-4" />
              <span>Send to System Printer</span>
            </button>
            <button 
              onClick={() => setShowPrintView(false)}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-sans font-bold text-sm tracking-wide transition border border-slate-300 cursor-pointer"
            >
              <span>Back to Interactive Ledger</span>
            </button>
          </div>
        </div>

        {/* PRINT CONTENT UNITS */}
        <div className="space-y-16">
          {/* Cover Unit */}
          <div className="print-page py-16 text-center border-4 border-double border-amber-900/40 p-8 rounded min-h-[90vh] flex flex-col justify-between items-center bg-white">
            <div className="w-full">
              <p className="text-sm tracking-[0.25em] text-amber-800 uppercase font-bold">The Constitutional Ledger</p>
              <div className="w-20 h-[1px] bg-amber-600/30 mx-auto my-4" />
              <h1 className="text-3xl sm:text-4xl font-extrabold uppercase mt-6 tracking-wide leading-tight px-4">{ORGANISATION_NAME}</h1>
              <p className="font-serif italic text-amber-950 text-base mt-2">Motto: "{MOTTO}"</p>
            </div>

            {/* Logo Emblem on Printed Cover */}
            <div className="my-6 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-amber-500 bg-white p-1 overflow-hidden shrink-0 shadow-md">
                <img 
                  src={LOGO_PATH} 
                  alt={`${ORGANISATION_NAME} Official Emblem`} 
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="max-w-md mt-3 text-center">
                <p className="font-serif text-slate-700 text-xs leading-relaxed max-w-sm px-4">
                  The Official Emblem: Centering the <strong>Handshake of Solidarity</strong> across the Globe, framed by <strong>Green Laurels</strong>, symbolizing the ultimate union <em>"WE ARE ONE"</em>.
                </p>
              </div>
            </div>
            
            <div className="w-full">
              <div className="my-5 text-slate-500 font-mono text-xs uppercase tracking-widest">
                Registration No: {REGISTRATION_NUMBER} <br />
                Incorporation Date: {INCORPORATION_DATE}
              </div>

              <div className="text-xs uppercase tracking-wider text-slate-500">
                Freetown • Republic of Sierra Leone
              </div>
            </div>
          </div>

          {/* Offical certs */}
          <div className="print-page py-8 border-b border-dashed border-slate-300">
            <h2 className="text-xl font-bold uppercase border-l-4 border-slate-900 pl-3 mb-6">Government Certificates</h2>
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <div key={index} className="p-4 bg-slate-50 border border-slate-200 rounded">
                  <h3 className="font-bold text-base mb-1">{cert.title}</h3>
                  <p className="text-xs text-slate-500 italic mb-3">{cert.issuer}</p>
                  <table className="w-full text-xs text-slate-800 text-left">
                    <tbody>
                      {cert.number && (
                        <tr>
                          <td className="w-1/3 py-1 font-bold">Company Number:</td>
                          <td className="py-1 font-mono text-emerald-900">{cert.number}</td>
                        </tr>
                      )}
                      {cert.status && (
                        <tr>
                          <td className="w-1/3 py-1 font-bold">Entity Type status:</td>
                          <td className="py-1">{cert.status}</td>
                        </tr>
                      )}
                      {cert.office && (
                        <tr>
                          <td className="w-1/3 py-1 font-bold">Registered Office:</td>
                          <td className="py-1 leading-normal">{cert.office}</td>
                        </tr>
                      )}
                      {cert.authority && (
                        <tr>
                          <td className="w-1/3 py-1 font-bold">Authority:</td>
                          <td className="py-1 italic">{cert.authority}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="print-page py-8 border-b border-dashed border-slate-300 font-serif">
            <h2 className="text-xl font-bold uppercase border-l-4 border-slate-900 pl-3 mb-6">Vision, Mission & Philosophy</h2>
            <blockquote className="my-6 border-l-4 border-slate-800 pl-4 italic text-slate-800 leading-relaxed text-base">
              "Poverty is like a disease thus can be cured and eradicated; poverty is a condition not a destiny and thus not natural!"
            </blockquote>
            <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider mb-2">Our Primary Philosophy:</h4>
            <p className="text-slate-700 leading-relaxed text-sm mb-4">
              To take action to amplify the voices of children, women, and youth, bringing them to the forefront of policy and decision-making. We work to build a sustainable future where every human being is protected, empowered, and respected.
            </p>
          </div>

          {/* Memorandum of Association */}
          <div className="print-page py-8 border-b border-dashed border-slate-300 font-serif">
            <h2 className="text-xl font-bold uppercase border-l-4 border-slate-900 pl-3 mb-6">Memorandum of Association</h2>
            <div className="space-y-4 text-sm text-slate-800 leading-relaxed">
              <p><strong>1. Name:</strong> {ORGANISATION_NAME}</p>
              <p><strong>2. Registered Office:</strong> {REGISTERED_ADDRESS}</p>
              <p><strong>3. Legal Nature:</strong> A registered non-profit, advocacy, and charitable organization established to champion excellence and collaboration in protecting children, women, and youth.</p>
              <p className="bg-slate-50 p-4 rounded border border-slate-100 italic">
                The profit and income of the organization shall be applied solely toward achieving its charitable objectives and shall not be distributed as dividends.
              </p>
            </div>
          </div>

          {/* Core Objectives */}
          <div className="print-page py-8 border-b border-dashed border-slate-300">
            <h2 className="text-xl font-bold uppercase border-l-4 border-slate-900 pl-3 mb-6">Core Objectives of the Organization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider mb-3">Key Strategic Goals (Part I)</h3>
                <div className="space-y-4">
                  {coreObjectivesPart1.map((obj, idx) => (
                    <div key={idx} className="text-sm">
                      <h4 className="font-bold text-slate-950 font-serif mb-1">{obj.letter}. {obj.title}</h4>
                      <p className="text-slate-600 font-sans leading-relaxed text-xs">{obj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider mb-3">Key Strategic Goals (Part II)</h3>
                <div className="space-y-4">
                  {coreObjectivesPart2.map((obj, idx) => (
                    <div key={idx} className="text-sm">
                      <h4 className="font-bold text-slate-950 font-serif mb-1">{obj.letter}. {obj.title}</h4>
                      <p className="text-slate-600 font-sans leading-relaxed text-xs">{obj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Printed Objectives Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-200">
              <div className="border border-slate-200 rounded p-3 bg-slate-50">
                <img 
                  src={ILLUSTRATION_EDUCATION} 
                  alt="Sierra Leone Children Learning" 
                  className="w-full h-32 object-cover rounded mb-2 filter brightness-105 contrast-95 animate-fade-in"
                  referrerPolicy="no-referrer"
                />
                <p className="text-[11px] font-sans text-slate-700 leading-relaxed">
                  <strong className="font-serif text-slate-900 block mb-0.5">Education & Child Protection Role:</strong>
                  Represents our active educational campaigns on girl-child welfare and marginalized student sponsorships. It illustrates the primary role of child safety, learning materials supply, and training services in Sierra Leone.
                </p>
              </div>

              <div className="border border-slate-200 rounded p-3 bg-slate-50">
                <img 
                  src={ILLUSTRATION_AGRICULTURE} 
                  alt="Agricultural Enterprise fields" 
                  className="w-full h-32 object-cover rounded mb-2 filter brightness-105 contrast-95 animate-fade-in"
                  referrerPolicy="no-referrer"
                />
                <p className="text-[11px] font-sans text-slate-700 leading-relaxed">
                  <strong className="font-serif text-slate-900 block mb-0.5">Agriculture & Enterprise Role:</strong>
                  Represents our core agricultural youth training, value-chain networks, and enterprise tools development. It models the program role of climate-smart farming that locks in regional economic security.
                </p>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div className="print-page py-8 border-b border-dashed border-slate-300 font-serif">
            <h2 className="text-xl font-bold uppercase border-l-4 border-slate-900 pl-3 mb-6">Articles of Association - Governance</h2>
            <div className="space-y-4">
              <h3 className="font-bold text-sm tracking-wide text-gray-500 uppercase">Membership Categories</h3>
              <div className="grid grid-cols-1 gap-3 font-sans text-xs">
                {membershipCategories.map((m, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded">
                    <div className="flex justify-between font-bold text-slate-900 font-serif text-xs mb-1">
                      <span>{m.name}</span>
                      {m.fee && <span className="bg-emerald-100 text-emerald-950 px-1.5 py-0.5 rounded text-[10px]">{m.fee}</span>}
                    </div>
                    <p className="text-slate-600">{m.description}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="font-bold text-sm tracking-wide text-gray-500 uppercase pt-4">The Board of Directors</h3>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                The governing board shall consist of a maximum of <strong>Five (5) Directors</strong>. Directors are responsible for high-level management, strict strategic alignment, audits, and exercising the powers of the organization.
              </p>
            </div>
          </div>

          {/* Administrative Body */}
          <div className="print-page py-8 border-b border-dashed border-slate-300">
            <h2 className="text-xl font-bold uppercase border-l-4 border-slate-900 pl-3 mb-6">Administrative Structure & Legal Advocacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2 space-y-4">
                {adminRoles.map((role, idx) => (
                  <div key={idx} className="text-sm">
                    <h4 className="font-bold text-slate-900 font-serif mb-1">{role.role}</h4>
                    <p className="text-slate-600 leading-relaxed text-xs font-sans">{role.description}</p>
                  </div>
                ))}
              </div>
              <div className="border border-slate-200 rounded p-3 bg-slate-50">
                <img 
                  src={ILLUSTRATION_LEGAL} 
                  alt="Legal Advocacy Clinic" 
                  className="w-full h-32 object-cover rounded mb-2 filter brightness-105 contrast-95 animate-fade-in"
                  referrerPolicy="no-referrer"
                />
                <p className="text-[11px] font-sans text-slate-700 leading-relaxed">
                  <strong className="font-serif text-slate-900 block mb-0.5">Legal Advocacy Clinic Role:</strong>
                  Represents our active legal-defense services and gender coordination networks. It outlines the casework team roles that protect child rights and fight gender discrimination across active regions.
                </p>
              </div>
            </div>
          </div>

          {/* Meetings and Financials */}
          <div className="print-page py-8 border-b border-dashed border-slate-300 font-serif">
            <h2 className="text-xl font-bold uppercase border-l-4 border-slate-900 pl-3 mb-6">Meetings, Financials & Audits</h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
              <p><strong>Annual General Meeting (AGM):</strong> Held regularly once every 12 months with 21 days' notice. Requires a quorum comprising 75% of paid-up members.</p>
              <p><strong>Financial Management:</strong> Financial ledger is run on a fiscal year cycles ending December 31st. Bank transaction processing mandates designated signatures of three authorized directors, with the Founder/CEO as the principal signatory.</p>
              <p><strong>Auditing:</strong> An independent qualified auditor shall be appointed at each AGM to maintain fiscal transparency.</p>
            </div>
          </div>

          {/* Subscribers (Signatories) */}
          <div className="print-page py-8 font-serif">
            <h2 className="text-xl font-bold uppercase border-l-4 border-slate-900 pl-3 mb-6">The Founding Subscribers</h2>
            <table className="w-full text-left border-collapse text-xs mb-6">
              <thead>
                <tr className="bg-slate-100 uppercase text-[10px] tracking-wider font-bold border-b border-slate-400">
                  <th className="p-2 border-r">Subscriber Name</th>
                  <th className="p-2 border-r">Corporate Role</th>
                  <th className="p-2">Official Address</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub, idx) => (
                  <tr key={idx} className="border-b border-slate-200">
                    <td className="p-2 border-r font-bold">{sub.name}</td>
                    <td className="p-2 border-r font-semibold text-emerald-900">{sub.role}</td>
                    <td className="p-2 text-slate-600">{sub.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="border border-slate-300 p-4 rounded bg-slate-50 text-xs text-slate-600 flex justify-between">
              <div>
                <strong>Witnessed & Attested by:</strong> <br />
                {witness.name} — <span className="italic">{witness.description}</span>
              </div>
              <div className="text-right">
                <strong>Execution Date:</strong> <br />
                {INCORPORATION_DATE} (Freetown, Sierra Leone)
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // INTERACTIVE EXPERT VIEW
  return (
    <div id="app-root-container" className="min-h-screen bg-[#0c0d0e] flex flex-col justify-between selection:bg-amber-100 select-none font-sans overflow-x-hidden">
      
      {/* Top Professional Executive Header */}
      <header className="bg-[#0f1012]/90 backdrop-blur-md border-b border-amber-600/15 py-4 px-4 sm:px-6 z-50 sticky top-0 no-print shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600/15 border border-emerald-500/20 flex items-center justify-center shadow-inner">
              <BookOpen className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 uppercase font-medium">Sierra Leone</span>
                <span className="text-[10px] font-mono select-none text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 uppercase font-medium">SL150125OPTOM24013</span>
              </div>
              <h1 className="text-white font-serif font-black tracking-wide text-xs sm:text-base md:text-[17px] uppercase mt-0.5">
                {ORGANISATION_NAME}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop Quick Print and Layout Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => setShowPrintView(true)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-705 font-semibold text-xs transition border border-white/5 cursor-pointer shadow-sm"
              >
                <Printer className="w-3.5 h-3.5 text-amber-400" />
                <span>Print Constitution</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded bg-slate-850 hover:bg-slate-800 text-slate-200 border border-white/5 transition cursor-pointer"
              aria-label="Toggle Navigation Index"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Boardroom Workspace layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 items-start justify-center relative">
           {/* Left Interactive Index / CHAPTER TREE Sidebar (Desktop view) */}
        <aside className="w-full lg:w-72 shrink-0 bg-[#111215]/90 border border-amber-600/15 p-4 sm:p-5 rounded-2xl hidden lg:block backdrop-blur-xs select-none shadow-xl shadow-black/50">
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-white/5">
            <span className="font-serif font-extrabold text-white text-xs tracking-wider uppercase flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Ledger Index</span>
            </span>
            <span className="text-[10px] text-slate-500 font-mono">{chapters.length} sections</span>
          </div>

          {/* Search Input Box */}
          <div className="mb-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <Search className="w-3.5 h-3.5 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search ledger articles..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-950 border border-white/10 text-slate-250 text-xs focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/25 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200 cursor-pointer"
                  title="Clear Search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          <nav className="space-y-1.5 max-h-[400px] overflow-y-auto pr-1">
            {searchQuery.trim() !== '' ? (
              filteredSearchResults.length > 0 ? (
                <div className="space-y-2">
                  <span className="text-[10px] text-amber-400/85 font-mono uppercase tracking-wider block px-1 mb-1">
                    Matching Articles ({filteredSearchResults.length})
                  </span>
                  {filteredSearchResults.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleChapterJump(item.spread, item.mobilePage)}
                      className="w-full text-left p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-amber-500/30 transition text-xs flex flex-col gap-1 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between text-amber-300 group-hover:text-amber-200 font-serif font-bold text-[11px] leading-tight">
                        <span className="truncate max-w-[200px]">{item.title}</span>
                        <ChevronRight className="w-3 h-3 text-amber-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </div>
                      <p className="text-[10px] text-slate-400 font-sans line-clamp-2 leading-relaxed">
                        {item.snippet}
                      </p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 px-2">
                  <p className="text-slate-400 text-xs font-sans">No matching articles.</p>
                  <p className="text-[10px] text-slate-500 font-sans mt-2">
                    Try searching: <strong className="text-amber-500/80">education</strong>, <strong className="text-amber-500/80">CEO</strong>, <strong className="text-amber-500/80">agriculture</strong>, <strong className="text-amber-500/80">rights</strong>, <strong className="text-amber-500/80">meeting</strong> or <strong className="text-amber-500/80">seal</strong>
                  </p>
                </div>
              )
            ) : (
              chapters.map((ch, idx) => {
                const isActive = isMobile 
                  ? currentPageMobile === ch.mobilePage 
                  : currentSpread === ch.spread;

                return (
                  <button
                    key={idx}
                    onClick={() => handleChapterJump(ch.spread, ch.mobilePage)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-sans font-medium select-none transition-all duration-250 flex items-center justify-between border group cursor-pointer ${
                      isActive 
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30 font-bold shadow-xs' 
                        : 'text-slate-400 hover:text-slate-200 bg-transparent border-transparent hover:bg-slate-900/50'
                    }`}
                  >
                    <span className="truncate pr-2">{ch.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 text-amber-500/60 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all duration-200 ${isActive ? 'rotate-90 text-amber-400' : ''}`} />
                  </button>
                );
              })
            )}
          </nav>

          <div className="mt-6 pt-4 border-t border-white/5">
            <button
              onClick={() => setShowPrintView(true)}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 font-bold text-xs text-white uppercase tracking-wider transition-all duration-300 shadow cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-yellow-300" />
              <span>Generate Print Draft</span>
            </button>
            <p className="text-[10px] text-slate-500 text-center mt-2.5 font-sans leading-normal">
              Click to view/export the full, clean printable PDF formatting layout.
            </p>
          </div>
        </aside>

        {/* Mobile Dropdown Index Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-1 left-4 right-4 bg-slate-950 border border-white/10 p-4 rounded-xl z-50 lg:hidden shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
              <span className="font-serif font-black text-white text-xs uppercase">Ledger Sections</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Search Input */}
            <div className="mb-3">
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
                  <Search className="w-3 h-3 text-slate-400" />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search articles..."
                  className="w-full pl-8 pr-8 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-white text-xs focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-slate-400"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[300px] overflow-y-auto">
              {searchQuery.trim() !== '' ? (
                filteredSearchResults.length > 0 ? (
                  filteredSearchResults.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleChapterJump(item.spread, item.mobilePage)}
                      className="text-left p-2 rounded-lg bg-slate-900 border border-white/5 text-xs text-amber-300"
                    >
                      <div className="font-bold">{item.title}</div>
                      <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{item.snippet}</div>
                    </button>
                  ))
                ) : (
                  <p className="text-slate-500 text-xs text-center py-2">No matching results.</p>
                )
              ) : (
                chapters.map((ch, idx) => {
                  const isActive = isMobile 
                    ? currentPageMobile === ch.mobilePage 
                    : currentSpread === ch.spread;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleChapterJump(ch.spread, ch.mobilePage)}
                      className={`text-left px-3 py-2 rounded-lg text-xs leading-normal font-medium transition ${
                        isActive 
                          ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold' 
                          : 'text-slate-400 hover:text-slate-200 bg-transparent border border-transparent'
                      }`}
                    >
                      {ch.title}
                    </button>
                  );
                })
              )}
            </div>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowPrintView(true);
              }}
              className="w-full text-center py-2.5 mt-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-lg uppercase tracking-wider tracking-wide flex items-center justify-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print layout view</span>
            </button>
          </div>
        )}

        {/* Dynamic Interactive Book Stage Area */}
        <div className="flex-1 w-full flex flex-col items-center justify-center py-4">
          
          <BookSpread 
            currentSpread={currentSpread}
            onSpreadChange={setCurrentSpread}
            isMobile={isMobile}
            currentPageMobile={currentPageMobile}
            onPageChangeMobile={setCurrentPageMobile}
          />
          
          {/* Helpful Tips Line */}
          <div className="mt-8 text-center hidden md:flex items-center gap-1.5 text-xs text-slate-500 select-none">
            <ArrowRightLeft className="w-3.5 h-3.5 text-emerald-500" />
            <p>Tip: You can use your keyboard's <kbd className="font-mono bg-slate-800 px-1.5 py-0.5 rounded border border-white/5 text-[10px] text-slate-300 mx-0.5">Left Arrow</kbd> and <kbd className="font-mono bg-slate-800 px-1.5 py-0.5 rounded border border-white/5 text-[10px] text-slate-300 mx-0.5">Right Arrow</kbd> to flip these pages realistically!</p>
          </div>
        </div>

      </main>

      {/* Corporate Platform Footer */}
      <footer className="bg-slate-950/80 border-t border-white/5 py-4 px-4 sm:px-6 text-center text-slate-500 text-xs no-print select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <p className="font-mono text-[10px] tracking-wide text-slate-400">
              © 2025 {ORGANISATION_NAME}. All Rights Reserved.
            </p>
          </div>
          <div className="text-[10px] tracking-wider text-slate-500 leading-normal uppercase">
            Registered & Governed under the Companies Act No. 5 of 2009. Freetown, Sierra Leone.
          </div>
        </div>
      </footer>
    </div>
  );
}
