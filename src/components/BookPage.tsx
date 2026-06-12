import React from 'react';
import { ShieldCheck, FileText, Sparkles, Building, Sprout, Feather, BookOpen, Clock, Users, Camera, CheckSquare } from 'lucide-react';
import { 
  certificates, 
  coreObjectivesPart1, 
  coreObjectivesPart2, 
  membershipCategories, 
  adminRoles, 
  subscribers, 
  witness,
  ORGANISATION_NAME,
  REGISTRATION_NUMBER,
  INCORPORATION_DATE,
  REGISTERED_ADDRESS,
  ILLUSTRATION_EDUCATION,
  ILLUSTRATION_AGRICULTURE,
  ILLUSTRATION_LEGAL,
  LOGO_PATH
} from '../data/constitutionData';
import Gallery from './Gallery';

interface BookPageProps {
  pageNumber: number;
}

export default function BookPage({ pageNumber }: BookPageProps) {
  // Page Styles: Creamy legal paper background with warm vintage tones and soft shadow overlays
  const pageBgClass = "w-full h-full bg-[#faf7f0] text-slate-800 p-6 sm:p-10 flex flex-col justify-between relative overflow-y-auto";

  // Ornate paper frame
  const Frame = () => (
    <>
      <div className="absolute inset-4 border border-amber-900/10 pointer-events-none rounded" />
      <div className="absolute inset-[18px] border border-amber-500/5 pointer-events-none rounded" />
      {/* Top and Bottom flourishes */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-amber-600/30 rounded-tl pointer-events-none" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-amber-600/30 rounded-tr pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-amber-600/30 rounded-bl pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-amber-600/30 rounded-br pointer-events-none" />
    </>
  );

  // Footer indicators with page number and organization shortname
  const PageFooter = ({ num }: { num: number }) => (
    <div className="mt-6 pt-3 border-t border-amber-900/10 flex items-center justify-between text-[10px] font-mono text-amber-900/50 uppercase tracking-widest z-10 select-none">
      <span>OHCO • Constitution</span>
      <span className="font-serif font-semibold text-xs text-amber-800 bg-amber-100/50 px-2 py-0.5 rounded-full shadow-2xs">Page {num}</span>
    </div>
  );

  // Render content based on page number
  switch (pageNumber) {
    case 1: // Page 2 in user's guide: Official Certificates
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <h3 className="font-serif text-xs tracking-widest text-emerald-800 uppercase font-bold">Official Registration</h3>
              </div>
              
              <h2 className="font-serif text-xl sm:text-2xl text-slate-900 text-center font-extrabold mb-5 leading-tight tracking-tight">
                Government Certificates
              </h2>
              <div className="w-16 h-[2px] bg-amber-500/30 mx-auto mb-6" />

              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="bg-amber-50/50 p-4 rounded-lg border border-amber-900/5 hover:border-amber-500/20 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-amber-700 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-sm font-bold text-slate-900 mb-1">{cert.title}</h4>
                        <p className="text-[11px] text-slate-600 font-sans italic mb-2">{cert.issuer}</p>
                        
                        <div className="space-y-1 font-sans text-xs text-slate-700">
                          {cert.number && (
                            <p>
                              <span className="font-semibold text-slate-500 mr-1.5 uppercase text-[10px]">Company No:</span> 
                              <span className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">{cert.number}</span>
                            </p>
                          )}
                          {cert.status && (
                            <p>
                              <span className="font-semibold text-slate-500 mr-1.5 uppercase text-[10px]">Company Status:</span> 
                              <span className="font-medium text-slate-800">{cert.status}</span>
                            </p>
                          )}
                          {cert.office && (
                            <p className="leading-relaxed">
                              <span className="font-semibold text-slate-500 mr-1.5 uppercase text-[10px]">Registered Office:</span> 
                              <span className="font-medium text-slate-800">{cert.office}</span>
                            </p>
                          )}
                          {cert.authority && (
                            <p className="pt-2 border-t border-dashed border-amber-900/10 mt-2">
                              <span className="font-semibold text-slate-500 mr-1.5 uppercase text-[10px]">Authority Action:</span> 
                              <span className="font-semibold text-emerald-800 italic">{cert.authority}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200/50 p-3.5 rounded-lg text-emerald-900 text-xs leading-relaxed font-sans mb-1 shadow-sm">
              <span className="font-bold block text-emerald-900 uppercase text-[10px] tracking-wide mb-1">State Registry Acknowledgment</span>
              These certificates confirm that the organization is fully legal, organized, and registered as a Private Corporate Body Limited by Guarantee under the direct Authority of Sierra Leone laws.
            </div>

            <PageFooter num={pageNumber} />
          </div>
        </div>
      );

    case 2: // Page 3 in user's guide: Vision & Mission
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                <h3 className="font-serif text-xs tracking-widest text-amber-800 uppercase font-bold">Philosophy & Vision</h3>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl text-slate-900 text-center font-extrabold mb-4 leading-tight tracking-tight">
                Our Compass & Mission
              </h2>
              <div className="w-16 h-[2px] bg-amber-500/30 mx-auto mb-5" />

              {/* Constitution Quote Block */}
              <div className="relative bg-white/60 p-4 rounded-lg border-l-4 border-amber-600 mb-5 italic font-serif text-slate-800 leading-relaxed text-xs sm:text-sm">
                <span className="absolute -top-3 left-4 text-3xl text-amber-600/20 font-serif leading-none">“</span>
                Poverty is like a disease thus can be cured and eradicated; poverty is a condition not a destiny and thus not natural!
                <span className="absolute -bottom-5 right-4 text-3xl text-amber-600/20 font-serif leading-none">”</span>
              </div>

              {/* Core Philosophy */}
              <div className="font-sans text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed mb-4">
                <p className="font-serif font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                  Our Primary Philosophy
                </p>
                <p>
                  To take action to amplify the voices of children, women, and youth, bringing them to the forefront of policy and decision-making. We work to build a sustainable future where every human being is protected, empowered, and respected.
                </p>
              </div>
            </div>

            {/* Logo Emblem Symbolism Illustration Card */}
            <div className="rounded-lg overflow-hidden border border-amber-900/10 shadow-md bg-white p-3 flex gap-3.5 items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full border-2 border-amber-500/30 overflow-hidden bg-[#faf7f0] p-1 shadow-xs">
                <img 
                  src={LOGO_PATH} 
                  alt={`${ORGANISATION_NAME} Official Symbol`} 
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif font-bold text-slate-950 text-[11px] sm:text-xs uppercase tracking-wide mb-1 leading-tight border-b border-amber-100 pb-0.5">
                  The Official Emblem & Symbolism
                </h4>
                <p className="text-slate-600 text-[10px] sm:text-[11px] leading-relaxed font-sans">
                  The official emblem centers a <strong>Handshake of Union</strong> forming a world globe surrounded by active <strong>Green Laurel Branches</strong>, representing our sovereign motto <em>"WE ARE ONE"</em>. This design signifies deep regional food security, global partnership networks, and social healing throughout Sierra Leone.
                </p>
              </div>
            </div>

            <PageFooter num={pageNumber} />
          </div>
        </div>
      );

    case 3: // Page 4 in user's guide: Memorandum of Association
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 justify-center">
                <Building className="w-4 h-4 text-amber-700" />
                <h3 className="font-serif text-xs tracking-widest text-amber-800 uppercase font-bold">Memorandum of Association</h3>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl text-slate-900 text-center font-extrabold mb-5 leading-tight tracking-tight">
                General Memorandum
              </h2>
              <div className="w-16 h-[2px] bg-amber-500/30 mx-auto mb-6" />

              <div className="space-y-4 text-xs sm:text-sm font-sans text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-serif font-extrabold text-slate-900 uppercase text-xs tracking-wide mb-1.5">1. Incorporated Name</h4>
                  <p className="bg-white p-2.5 rounded border border-slate-200 font-serif font-bold text-slate-950 text-indigo-950">
                    {ORGANISATION_NAME}
                  </p>
                </div>

                <div>
                  <h4 className="font-serif font-extrabold text-slate-900 uppercase text-xs tracking-wide mb-1.5">2. Registered Legal Office</h4>
                  <p className="bg-white p-2.5 rounded border border-slate-200 font-mono text-[11px] leading-relaxed">
                    {REGISTERED_ADDRESS}
                  </p>
                </div>

                <div>
                  <h4 className="font-serif font-extrabold text-slate-900 uppercase text-xs tracking-wide mb-1.5">3. Institutional Nature</h4>
                  <p>
                    A non-profit, advocacy, advocacy-led, and charitable organization established to champion excellence, child equity, legal justice, and sustainable local community collaboration.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-900/5 p-4 rounded-lg border border-amber-900/10 text-xs leading-relaxed font-sans mt-4">
              <span className="font-serif font-bold block text-slate-900 uppercase text-[10px] tracking-wide mb-1">Our Immutable Commitment:</span>
              The assets and income of this organization shall be applied solely toward achieving these public-benefit charitable goals, and shall never be distributed as private dividends or bonuses.
            </div>

            <PageFooter num={pageNumber} />
          </div>
        </div>
      );

    case 4: // Page 5 in user's guide: Core Objectives Part I
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Sprout className="w-4 h-4 text-emerald-700 font-bold" />
                <h3 className="font-serif text-xs tracking-widest text-emerald-800 uppercase font-bold">Objectives of the Organization</h3>
              </div>

              <h2 className="font-serif text-lg sm:text-xl text-slate-900 text-center font-extrabold mb-3 leading-tight tracking-tight">
                Core Objectives — Part I
              </h2>
              <div className="w-16 h-[2px] bg-amber-500/30 mx-auto mb-4" />

              <div className="space-y-2.5">
                {coreObjectivesPart1.map((obj, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start p-2.5 bg-white/50 rounded border border-slate-200/60 hover:bg-white hover:border-amber-200 transition-all duration-300">
                    <span className="font-serif font-black bg-amber-100 text-amber-900 text-[11px] w-5.5 h-5.5 flex items-center justify-center rounded shrink-0 shadow-2xs">
                      {obj.letter}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-slate-950 text-[11px] sm:text-xs mb-0.5">{obj.title}</h4>
                      <p className="text-slate-600 text-[10px] sm:text-[11px] leading-relaxed font-sans">{obj.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Children Education Illustration */}
            <div className="rounded-lg overflow-hidden border border-amber-900/10 shadow-md mt-3">
              <img 
                src={ILLUSTRATION_EDUCATION} 
                alt="Sierra Leone children smiling, representing the education and child protection themes"
                className="w-full h-24 sm:h-32 object-cover filter brightness-105 contrast-95"
                referrerPolicy="no-referrer"
              />
              <div className="bg-slate-900/95 text-slate-200 text-[9px] p-2 leading-relaxed font-sans">
                <span className="font-serif font-bold text-amber-400 block mb-0.5">Education & Child Protection Role:</span>
                This photograph represents our educational empowerment campaigns for vulnerable girls and marginalized children. It illustrates the fundamental right of access to formal school environments, educational training materials, and protective tutoring that foster lifetime growth and civic self-reliance.
              </div>
            </div>

            <PageFooter num={pageNumber} />
          </div>
        </div>
      );

    case 5: // Page 6 in user's guide: Core Objectives Part II
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Sprout className="w-4 h-4 text-emerald-700" />
                <h3 className="font-serif text-xs tracking-widest text-emerald-800 uppercase font-bold">Objectives of the Organization</h3>
              </div>

              <h2 className="font-serif text-lg sm:text-xl text-slate-900 text-center font-extrabold mb-3 leading-tight tracking-tight">
                Core Objectives — Part II
              </h2>
              <div className="w-16 h-[2px] bg-amber-500/30 mx-auto mb-4" />

              <div className="space-y-2.5 mb-3">
                {coreObjectivesPart2.map((obj, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start p-2.5 bg-white/50 rounded border border-slate-200/60 hover:bg-white hover:border-amber-200 transition-all duration-300">
                    <span className="font-serif font-black bg-amber-100 text-amber-900 text-[11px] w-5.5 h-5.5 flex items-center justify-center rounded shrink-0 shadow-2xs">
                      {obj.letter}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-slate-950 text-[11px] sm:text-xs mb-0.5">{obj.title}</h4>
                      <p className="text-slate-600 text-[10px] sm:text-[11px] leading-relaxed font-sans">{obj.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agriculture Enterprise Illustration */}
            <div className="rounded-lg overflow-hidden border border-amber-900/10 shadow-md">
              <img 
                src={ILLUSTRATION_AGRICULTURE} 
                alt="Agricultural fields and enterprise development schemes in Sierra Leone"
                className="w-full h-24 sm:h-32 object-cover filter brightness-105 contrast-95"
                referrerPolicy="no-referrer"
              />
              <div className="bg-slate-900/95 text-slate-200 text-[9px] p-2 leading-relaxed font-sans">
                <span className="font-serif font-bold text-amber-400 block mb-0.5">Agriculture & Enterprise Role:</span>
                This photograph represents our core agricultural enterprise framework. It illustrates our field training models that build youth farming capacity, eco-friendly crop methodologies, and value-chain connections that boost local food security and rural micro-cooperatives.
              </div>
            </div>

            <PageFooter num={pageNumber} />
          </div>
        </div>
      );

    case 6: // Page 7 in user's guide: Articles of Association - Governance
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 justify-center">
                <Feather className="w-4 h-4 text-amber-700" />
                <h3 className="font-serif text-xs tracking-widest text-amber-800 uppercase font-bold">Constitutional Articles</h3>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl text-slate-900 text-center font-extrabold mb-5 leading-tight tracking-tight">
                Articles of Association
              </h2>
              <div className="w-16 h-[2px] bg-amber-500/30 mx-auto mb-6" />

              <div className="space-y-4">
                <div>
                  <h3 className="font-serif font-black text-slate-950 text-xs sm:text-sm uppercase tracking-wide mb-2.5 border-b border-slate-200 pb-1 flex items-center justify-between">
                    <span>A. Membership Classifications</span>
                    <span className="text-[10px] font-sans font-normal text-slate-500 lowercase">4 legal classes</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5 font-sans">
                    {membershipCategories.map((m, idx) => (
                      <div key={idx} className="bg-white p-2.5 rounded border border-slate-200/80">
                        <div className="flex justify-between items-start mb-0.5 gap-1">
                          <span className="font-bold text-slate-900 text-xs font-serif">{m.name}</span>
                          {m.fee && (
                            <span className="text-[10px] font-mono text-emerald-800 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                              {m.fee}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 text-[11px] leading-relaxed">{m.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-slate-950 text-xs sm:text-sm uppercase tracking-wide mb-2 border-b border-slate-200 pb-1">
                    B. The Board of Directors
                  </h3>
                  <p className="text-xs text-slate-700 font-sans leading-relaxed bg-amber-50/50 p-2.5 rounded border border-amber-900/5">
                    The Governing Board shall constandly consist of a maximum of <strong className="text-slate-950">Five (5) Directors</strong>. The Directors hold direct legal responsibility to manage, audit, and exercise the powers of the charity in perfect accordance with the Sierra Leone Companies Act.
                  </p>
                </div>
              </div>
            </div>

            <PageFooter num={pageNumber} />
          </div>
        </div>
      );

    case 7: // Page 8 in user's guide: Administrative Structure
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 justify-center">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <h3 className="font-serif text-xs tracking-widest text-amber-800 uppercase font-bold">Organizational Charter</h3>
              </div>

              <h2 className="font-serif text-lg sm:text-xl text-slate-900 text-center font-extrabold mb-3 leading-tight tracking-tight">
                Administrative Structure
              </h2>
              <div className="w-16 h-[2px] bg-amber-500/30 mx-auto mb-4" />

              <div className="space-y-2.5 max-h-[160px] sm:max-h-[220px] overflow-y-auto pr-1">
                {adminRoles.map((role, idx) => (
                  <div key={idx} className="bg-white/70 p-2.5 rounded border border-slate-200 hover:bg-white hover:border-amber-200 transition-all duration-300 font-sans">
                    <h5 className="font-serif font-bold text-slate-900 text-[11px] sm:text-xs mb-0.5">{role.role}</h5>
                    <p className="text-slate-600 text-[10px] sm:text-[11px] leading-relaxed">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Advocacy Illustration */}
            <div className="rounded-lg overflow-hidden border border-amber-900/10 shadow-md mt-2">
              <img 
                src={ILLUSTRATION_LEGAL} 
                alt="Vulnerable child advocacy and legal empowerment setting in Sierra Leone"
                className="w-full h-24 sm:h-28 object-cover filter brightness-105 contrast-95"
                referrerPolicy="no-referrer"
              />
              <div className="bg-slate-900/95 text-slate-200 text-[9px] p-2 leading-relaxed font-sans">
                <span className="font-serif font-bold text-amber-400 block mb-0.5">Human Rights & Corporate Advocacy Role:</span>
                This photograph represents our active legal-defense clinic workshops and gender-advocacy roundtables. It displays our legal-aid services, field reports, and administrative structures dedicated to eliminating gender-based violence (GBV) and defending victimized women and children.
              </div>
            </div>

            <PageFooter num={pageNumber} />
          </div>
        </div>
      );

    case 8: // Page 9 in user's guide: Meetings & Financials
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 justify-center">
                <Clock className="w-4 h-4 text-amber-700" />
                <h3 className="font-serif text-xs tracking-widest text-amber-800 uppercase font-bold">Administrative Operations</h3>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl text-slate-900 text-center font-extrabold mb-5 leading-tight tracking-tight">
                Meetings & Financials
              </h2>
              <div className="w-16 h-[2px] bg-amber-500/30 mx-auto mb-6" />

              <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-serif font-extrabold text-slate-900 uppercase text-xs sm:text-sm tracking-wide mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    Annual General Meeting (AGM)
                  </h4>
                  <p className="pl-3 border-l border-amber-900/10">
                    The AGM must be held regularly once every <strong className="text-slate-950 font-semibold">12 months</strong>, requiring at least <strong className="text-slate-950 font-semibold">21 days of notice</strong> to all registered members. The session quorum is strictly fixed at <strong className="text-slate-950 font-semibold">75% of paid members</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-serif font-extrabold text-slate-900 uppercase text-xs sm:text-sm tracking-wide mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    Financial Management
                  </h4>
                  <div className="pl-3 border-l border-amber-900/10 space-y-2">
                    <p>
                      The fiscal organization year ends on the <strong className="text-slate-950 font-semibold">31st of December</strong> each year.
                    </p>
                    <p>
                      Banking transactions require designated signatories of three authorized directors, with the <strong className="text-emerald-800 font-bold">Founder/CEO serving as the primary/principal signatory</strong>.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif font-extrabold text-slate-900 uppercase text-xs sm:text-sm tracking-wide mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    Auditing Procedure
                  </h4>
                  <p className="pl-3 border-l border-amber-900/10">
                    An independent, certified qualified auditor will be appointed during each Annual General Meeting to maintain structural financial audit accountability.
                  </p>
                </div>
              </div>
            </div>

            <PageFooter num={pageNumber} />
          </div>
        </div>
      );

    case 9: // Page 9: The Founding Subscribers (Table)
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Users className="w-4 h-4 text-amber-700" />
                <h3 className="font-serif text-xs tracking-widest text-amber-800 uppercase font-bold">Founding Covenant</h3>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl text-slate-900 text-center font-extrabold mb-4 leading-tight tracking-tight">
                Founding Subscribers
              </h2>
              <div className="w-16 h-[2px] bg-amber-500/30 mx-auto mb-5" />

              {/* Table of Subscribers */}
              <div className="overflow-x-auto rounded border border-slate-200">
                <table className="w-full text-left border-collapse font-sans text-[11px] bg-white">
                  <thead>
                    <tr className="bg-amber-900/5 text-amber-950 border-b border-slate-200 uppercase text-[9px] tracking-wider font-semibold">
                      <th className="p-2 border-r border-slate-200">Name</th>
                      <th className="p-2 border-r border-slate-200">Role</th>
                      <th className="p-2">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((sub, idx) => (
                      <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-2 border-r border-slate-200 font-semibold text-slate-950">{sub.name}</td>
                        <td className="p-2 border-r border-slate-200 font-mono text-emerald-900 text-[10px]">{sub.role}</td>
                        <td className="p-2 text-slate-600 truncate max-w-[130px]">{sub.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Witness and date and signatures seal */}
            <div className="mt-4 pt-4 border-t border-dashed border-amber-900/15 flex flex-col gap-2 bg-amber-50/40 p-3 rounded border border-amber-900/5">
              <div className="flex justify-between items-start text-xs font-sans">
                <div>
                  <span className="font-bold text-slate-400 uppercase text-[9px] block">Attested & Witnessed by:</span>
                  <span className="font-serif font-extrabold text-slate-900 block mt-0.5">{witness.name}</span>
                  <span className="italic text-slate-500 font-mono text-[10px]">{witness.description}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-400 uppercase text-[9px] block">Execution Date:</span>
                  <span className="font-mono text-amber-900 font-semibold block mt-0.5">{INCORPORATION_DATE}</span>
                  <span className="text-[10px] text-slate-400 block font-sans">Freetown</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-1 border-t border-amber-900/10 pt-2 justify-center text-[10px] text-slate-500 font-serif italic text-center">
                Signed on hard-copy records filed with the Corporate Affairs Commission of Sierra Leone.
              </div>
            </div>

            <PageFooter num={pageNumber} />
          </div>
        </div>
      );

    case 10: // Page 10: Constitutional Photographic Gallery / Prestige Showcase
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 justify-center">
                <Camera className="w-4 h-4 text-amber-700 animate-pulse" />
                <h3 className="font-serif text-xs tracking-widest text-amber-800 uppercase font-bold">Prestige Showcase</h3>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl text-slate-900 text-center font-extrabold mb-3 leading-tight tracking-tight">
                Official Image Gallery
              </h2>
              <div className="w-16 h-[2px] bg-amber-500/30 mx-auto mb-4" />
            </div>

            <div className="flex-1 min-h-0">
              <Gallery />
            </div>

            <PageFooter num={pageNumber} />
          </div>
        </div>
      );

    case 11: // Page 11: Sworn Ratification, Seals & Regulatory Oaths
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 justify-center">
                <CheckSquare className="w-4 h-4 text-emerald-700" />
                <h3 className="font-serif text-xs tracking-widest text-emerald-800 uppercase font-bold">Ratification Act</h3>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl text-slate-900 text-center font-extrabold mb-4 leading-tight tracking-tight">
                Legal Ratification Seal
              </h2>
              <div className="w-16 h-[2px] bg-amber-500/30 mx-auto mb-5" />

              <div className="space-y-4 font-sans text-xs text-slate-700 leading-relaxed text-justify">
                <p>
                  We, the foundational subscribers and board of directors of <strong className="text-slate-950">{ORGANISATION_NAME}</strong>, do hereby solemnly declare, sign, and swear that the articles set forth in this ledger constitute our official operating charter.
                </p>
                <p>
                  Any regulatory changes, constitutional edits, or adjustments to our programmatic objectives (Education, Agricultural enterprise, Human Rights advocacy) require a strict <strong className="text-amber-900">Seventy-Five Percent (75%) majority vote</strong> during our certified Annual General Meeting.
                </p>

                {/* Simulated Seals */}
                <div className="grid grid-cols-2 gap-4 pt-3 items-center">
                  <div className="border border-double border-amber-600/30 p-2.5 rounded bg-amber-50/50 flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-full border-4 border-double border-amber-600/60 flex items-center justify-center p-1 relative mb-1.5 bg-white select-none">
                      <div className="w-full h-full rounded-full border border-dashed border-amber-550 flex items-center justify-center text-[6px] font-mono leading-none text-amber-800 font-bold uppercase select-none">
                        OHCO SEAL
                      </div>
                      <div className="absolute inset-0 rounded-full bg-amber-500/5" />
                    </div>
                    <span className="text-[7.5px] font-mono uppercase tracking-widest text-amber-900/60 block">Official Seal</span>
                    <span className="text-[8px] text-slate-400 font-sans block mt-0.5">Corporate Registrar</span>
                  </div>

                  <div className="border border-dashed border-emerald-600/30 p-2.5 rounded bg-emerald-50/30 flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-full border-4 border-dashed border-emerald-600/40 flex items-center justify-center p-1 relative mb-1.5 bg-white select-none">
                      <div className="w-full h-full rounded-full border border-double border-emerald-700 flex items-center justify-center text-[6px] font-mono leading-tight text-emerald-800 font-bold uppercase text-center select-none">
                        SL LEGER<br />PASSED
                      </div>
                    </div>
                    <span className="text-[7.5px] font-mono uppercase tracking-widest text-emerald-900/60 block">State Stamp</span>
                    <span className="text-[8px] text-slate-400 font-sans block mt-0.5">Freetown Registrar</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-900/5 p-3 rounded-lg border border-amber-900/10 text-center font-serif text-[10px] italic text-slate-600 leading-relaxed mb-1">
              "WE ARE ONE — Forging a unified workspace to uplift, educate, and empower the local agricultural and youth workforce of Sierra Leone."
            </div>

            <PageFooter num={pageNumber} />
          </div>
        </div>
      );

    default:
      return (
        <div className={pageBgClass}>
          <Frame />
          <div className="z-10 flex flex-col h-full items-center justify-center text-center">
            <h2 className="text-lg font-serif">Page not configured</h2>
            <PageFooter num={pageNumber} />
          </div>
        </div>
      );
  }
}
