import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Heart, HelpCircle, SlidersHorizontal, BookOpen, Shield, GraduationCap, Sprout, Award, Eye } from 'lucide-react';
import { 
  LOGO_PATH, 
  ILLUSTRATION_EDUCATION, 
  ILLUSTRATION_AGRICULTURE, 
  ILLUSTRATION_LEGAL,
  ORGANISATION_NAME
} from '../data/constitutionData';

export interface GalleryImage {
  id: string;
  category: 'emblem' | 'education' | 'agriculture' | 'legal';
  categoryLabel: string;
  title: string;
  relevance: string;
  imagePath: string;
  icon: React.ReactNode;
  constitutionArticle: string;
  caption: string;
  roleExplanation: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageId, setActiveImageId] = useState<string | null>('emblem'); // Default to showing emblem details on the side or overlay

  const images: GalleryImage[] = [
    {
      id: 'emblem',
      category: 'emblem',
      categoryLabel: 'Emblem & Identity',
      title: 'The Sovereign Emblem of Solidarity',
      relevance: 'Administrative Identity & National Secretariat',
      constitutionArticle: 'Memorandum of Association, Section 1',
      imagePath: LOGO_PATH,
      icon: <Award className="w-3 master-icon text-amber-600" />,
      caption: 'The official certified emblem of OHCO forming a handshake of solidarity across the Sierra Leone landscape.',
      roleExplanation: 'This photograph represents the sovereign corporate identity and operational emblem of our organization. The handshake signifies a union of hearts and actions in rebuilding societies, forming an anchor globally and locally. Framed by green laurel branches, it stands as the official seal of authority, validating national prestige and confirming that humanity functions best when "WE ARE ONE". It is used on all sovereign documents, certificates, and board decrees.'
    },
    {
      id: 'education',
      category: 'education',
      categoryLabel: 'Educational Initiatives',
      title: 'Youth Literacy & School Sponsorships',
      relevance: 'Girl-Child Well-being & Specialized Scholarships',
      constitutionArticle: 'Core Objectives, Section D (Education)',
      imagePath: ILLUSTRATION_EDUCATION,
      icon: <GraduationCap className="w-3 master-icon text-amber-600" />,
      caption: 'Marginalized students expressing joy in Freetown learning spaces supported by corporate sponsorships.',
      roleExplanation: 'This photograph illustrates our active child-sponsorship campaigns and the distribution of educational kits in Freetown. By setting up physical learning spaces and paying annual tuition fees for adolescent girls and marginalized students, the organization ensures children are shielded from exploitation and equipped with future literacy. It demonstrates the direct fulfillment of Article D in establishing sustainable pathways for academic excellence.'
    },
    {
      id: 'agriculture',
      category: 'agriculture',
      categoryLabel: 'Agricultural Enterprise',
      title: 'Skilled Vocational Training & Engineering',
      relevance: 'Youth Farmers & Enterprise value-chain networks',
      constitutionArticle: 'Core Objectives, Section B (Agriculture & Enterprise)',
      imagePath: ILLUSTRATION_AGRICULTURE,
      icon: <Sprout className="w-3 master-icon text-amber-600" />,
      caption: 'Skilled technicians and youth agricultural mechanics fabricating value-chain logistics framing.',
      roleExplanation: 'This image captures industrial mechanics and vocational trainee welders developing enterprise equipment in Freetown. Under our technical empowerment program, youths undergo certified vocational coursework in agricultural manufacturing and engine fabrication. It models how training skilled technicians builds regional resilience, helps small-scale farms, and guarantees local jobs and sustainable food security for rural cooperatives.'
    },
    {
      id: 'legal',
      category: 'legal',
      categoryLabel: 'Community & Rights',
      title: 'Sovereign Legal Aid & GBV Advocacy',
      relevance: 'Women Empowerment, GBV Defense Clinic, & Child Rescue',
      constitutionArticle: 'Core Objectives, Section A (Human Rights & Justice)',
      imagePath: ILLUSTRATION_LEGAL,
      icon: <Shield className="w-3 master-icon text-amber-600" />,
      caption: 'Welfare officers and legal counsellors organizing human rights advocacy workshops.',
      roleExplanation: 'This photograph represents our on-the-ground human rights training workshops and female-advocacy legal clinic networks. By conducting regular trauma-informed counselor training, GBV prevention programs, and child-rescue missions, OHCO actively builds safety nets for Sierra Leone women and children. It highlights the protective legal-defense role implemented by administrative directors under Article A.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Showcase' },
    { value: 'emblem', label: 'Emblem' },
    { value: 'education', label: 'Education' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'legal', label: 'Legal Aid' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const activeImage = images.find(img => img.id === activeImageId) || images[0];

  return (
    <div id="constitutional-gallery-module" className="flex flex-col h-full justify-between gap-3 select-text selection:bg-amber-100 font-sans">
      
      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 pb-2 border-b border-amber-900/10 overflow-x-auto scroller-hidden">
        <SlidersHorizontal className="w-3 h-3 text-amber-800/60 shrink-0" />
        <span className="text-[9px] font-mono uppercase tracking-wider text-amber-800/60 mr-1 shrink-0">Filter:</span>
        <div className="flex gap-1">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => {
                setSelectedCategory(cat.value);
                // Auto focus on the first matching image in the new filter
                const matches = cat.value === 'all' ? images : images.filter(img => img.category === cat.value);
                if (matches.length > 0) {
                  setActiveImageId(matches[0].id);
                }
              }}
              className={`px-2 py-0.5 rounded text-[9px] font-medium font-mono uppercase tracking-wider border transition-all ${
                selectedCategory === cat.value
                  ? 'bg-amber-800 text-white border-amber-900 shadow-3xs'
                  : 'bg-white text-amber-900/80 border-amber-900/10 hover:bg-amber-50'
              } cursor-pointer`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Allocation & Details */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch flex-1 min-h-0">
        
        {/* Left Thumb Nails Grid */}
        <div className="sm:col-span-5 flex flex-col gap-1.5 max-h-[160px] sm:max-h-[300px] overflow-y-auto pr-0.5">
          {filteredImages.map(img => {
            const isSelected = activeImageId === img.id;
            return (
              <button
                key={img.id}
                onClick={() => setActiveImageId(img.id)}
                className={`w-full text-left p-1.5 rounded-lg border transition-all flex items-start gap-2 cursor-pointer ${
                  isSelected 
                    ? 'bg-amber-100/80 border-amber-600/30 shadow-3xs scale-[0.99]' 
                    : 'bg-white/60 border-amber-900/5 hover:bg-white hover:border-amber-500/20'
                }`}
              >
                <div className="w-12 h-12 rounded overflow-hidden shrink-0 bg-slate-100 border border-amber-900/5">
                  <img 
                    src={img.imagePath} 
                    alt={img.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0 pr-1">
                  <span className="text-[8px] font-mono uppercase font-semibold text-amber-800/75 bg-amber-50 px-1 py-0.1 rounded border border-amber-900/5 flex items-center gap-1 w-max mb-1">
                    {img.icon}
                    <span>{img.categoryLabel}</span>
                  </span>
                  <h4 className="font-serif text-[10px] sm:text-[11px] font-bold text-slate-900 truncate leading-tight">
                    {img.title}
                  </h4>
                  <p className="text-[9px] text-slate-500 font-sans truncate leading-normal">
                    {img.relevance}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Image Strategic Role Description */}
        <div className="sm:col-span-7 flex flex-col justify-between bg-white p-3 rounded-lg border border-amber-900/10 shadow-3xs">
          
          {/* Active Image */}
          <div className="relative rounded overflow-hidden shadow-2xs border border-amber-900/5 mb-2.5">
            <img 
              src={activeImage.imagePath} 
              alt={activeImage.title} 
              className="w-full h-24 sm:h-32 object-cover filter brightness-[1.02] contrast-[0.98]"
              referrerPolicy="no-referrer"
            />
            {/* Dark banner with caption overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-1.5 pt-4">
              <p className="text-[9px] text-white/90 italic font-sans leading-normal px-1 shrink-0">
                "{activeImage.caption}"
              </p>
            </div>
          </div>

          {/* Details & Alignment */}
          <div className="flex-1 flex flex-col justify-between min-h-0">
            <div>
              <div className="flex flex-col gap-0.5 border-b border-amber-900/5 pb-1.5 mb-1.5">
                <span className="text-[8px] font-mono text-emerald-800 font-bold tracking-wider uppercase bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-100 w-max">
                  Linked: {activeImage.constitutionArticle}
                </span>
                <h3 className="font-serif text-xs font-black text-slate-950 mt-1 uppercase tracking-wide leading-tight">
                  {activeImage.title}
                </h3>
              </div>

              <div className="max-h-[85px] sm:max-h-[120px] overflow-y-auto pr-1">
                <p className="text-[10px] leading-relaxed text-slate-700 font-sans">
                  {activeImage.roleExplanation}
                </p>
              </div>
            </div>

            {/* Strategic Signature line */}
            <div className="mt-2 pt-2 border-t border-dashed border-amber-900/10 text-center">
              <p className="text-[8px] font-mono text-amber-900/40 uppercase tracking-widest leading-none">
                {ORGANISATION_NAME} • PRESTIGE SHOWCASE 2025
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
