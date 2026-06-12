import React from 'react';
import { motion } from 'motion/react';
import { Shield, MapPin, Mail, Award } from 'lucide-react';
import { 
  ORGANISATION_NAME, 
  REGISTRATION_NUMBER, 
  INCORPORATION_DATE, 
  REGISTERED_ADDRESS, 
  MOTTO, 
  MOTTO_SUBTITLE, 
  CONTACT_EMAIL,
  LOGO_PATH
} from '../data/constitutionData';

interface BookCoverProps {
  type: 'front' | 'back';
}

export default function BookCover({ type }: BookCoverProps) {
  if (type === 'front') {
    return (
      <div 
        id="book-cover-front"
        className="w-full h-full relative text-gold-300 flex flex-col justify-between p-8 sm:p-12 select-none"
        style={{
          background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
          boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)'
        }}
      >
        {/* Leather texture overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px), radial-gradient(circle, #000000 1px, transparent 1px)',
            backgroundSize: '4px 4px',
            backgroundPosition: '0 0, 2px 2px'
          }}
        />

        {/* Ornate Gold Border lines */}
        <div className="absolute inset-4 sm:inset-6 border-2 border-amber-500/40 pointer-events-none rounded" />
        <div className="absolute inset-5 sm:inset-7 border border-amber-500/20 pointer-events-none rounded" />
        
        {/* Corner Flourishes */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400 rounded-tl pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-400 rounded-tr pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-400 rounded-bl pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400 rounded-br pointer-events-none" />

        {/* Top Header */}
        <div className="text-center z-10 mt-4">
          <p className="font-serif tracking-[0.25em] text-xs sm:text-sm text-yellow-500/80 uppercase font-medium">
            The Official Constitutional Ledger
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2" />
        </div>

        {/* Middle Title & Logo */}
        <div className="flex flex-col items-center justify-center text-center my-auto z-10">
          <h2 className="font-serif text-sm sm:text-base tracking-[0.15em] text-amber-500/90 uppercase font-semibold mb-2">
            OF THE
          </h2>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-wide leading-tight text-white font-extrabold uppercase px-4 max-w-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {ORGANISATION_NAME}
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-6" />

          {/* Logo Frame */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white p-1 shadow-2xl border-4 border-amber-500/60 overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img 
              src={LOGO_PATH} 
              alt={`${ORGANISATION_NAME} Logo`} 
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
            />
            {/* Inner frame shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
          </div>

          <div className="mt-6 flex flex-col items-center">
            <p className="font-serif italic text-amber-200 text-sm sm:text-base tracking-wide">
              Motto: "{MOTTO}"
            </p>
            <p className="text-slate-400 font-mono text-[10px] mt-1 tracking-wider uppercase">
              “We Are One”
            </p>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="z-10 text-center mb-4 flex flex-col gap-1">
          <div className="flex items-center justify-center gap-1.5 text-xs text-amber-400/90 font-mono">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>INCORPORATED: {INCORPORATION_DATE}</span>
          </div>
          <div className="text-[10px] sm:text-xs text-slate-300/80 font-mono uppercase tracking-widest mt-1">
            REGISTRATION NO: <span className="text-white font-semibold">{REGISTRATION_NUMBER}</span>
          </div>
          <div className="text-[9px] uppercase tracking-wider text-slate-500 mt-2">
            Freetown • Republic of Sierra Leone
          </div>
        </div>
      </div>
    );
  }

  // Back Cover
  return (
    <div 
      id="book-cover-back"
      className="w-full h-full relative text-gold-300 flex flex-col justify-between p-8 sm:p-12 select-none"
      style={{
        background: 'radial-gradient(circle at center, #064e3b 0%, #022c22 100%)',
        boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)'
      }}
    >
      {/* Leather texture overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px), radial-gradient(circle, #000000 1px, transparent 1px)',
          backgroundSize: '4px 4px',
          backgroundPosition: '0 0, 2px 2px'
        }}
      />

      {/* Ornate Gold Border lines */}
      <div className="absolute inset-4 sm:inset-6 border-2 border-amber-500/40 pointer-events-none rounded" />
      <div className="absolute inset-5 sm:inset-7 border border-amber-500/20 pointer-events-none rounded" />
      
      {/* Corner Flourishes */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400 rounded-tl pointer-events-none" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-400 rounded-tr pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-400 rounded-bl pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400 rounded-br pointer-events-none" />

      {/* Top Graphic */}
      <div className="text-center z-10 mt-6 flex flex-col items-center">
        <Award className="w-8 h-8 text-amber-400 mb-2" />
        <p className="font-serif text-sm tracking-widest text-amber-300 uppercase font-medium">
          Advancing Humanity
        </p>
        <div className="w-12 h-[1px] bg-amber-400/30 mt-1" />
      </div>

      {/* Middle Organization details */}
      <div className="flex flex-col items-center text-center justify-center my-auto z-10 px-4">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 uppercase tracking-wide">
          {ORGANISATION_NAME}
        </h3>
        <p className="italic text-xs sm:text-sm text-yellow-100 max-w-xs leading-relaxed font-serif opacity-90">
          {MOTTO_SUBTITLE}
        </p>
        <div className="w-16 h-[1px] bg-amber-400/40 my-4" />
        
        {/* Contact list with high-contrast presentation */}
        <div className="flex flex-col gap-3 text-left w-full max-w-xs text-xs text-slate-100 bg-black/20 p-4 rounded-lg border border-white/5 backdrop-blur-xs">
          <div className="flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="overflow-hidden">
              <p className="font-semibold text-amber-300 uppercase text-[9px] tracking-wider mb-0.5">Email Contact</p>
              <p className="font-mono text-[11px] truncate text-slate-200">{CONTACT_EMAIL}</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-300 uppercase text-[9px] tracking-wider mb-0.5">Headquarters</p>
              <p className="text-[11px] font-sans leading-normal text-slate-200">{REGISTERED_ADDRESS}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer legal information */}
      <div className="z-10 text-center mb-6 px-4">
        <p className="text-[10px] uppercase tracking-wider text-amber-400 font-mono font-medium">
          Companies Act No. 5 of 2009
        </p>
        <p className="text-[9px] text-slate-300 mt-1 max-w-xs mx-auto leading-relaxed">
          Registered and protected in the registry of Corporate Affairs Commission, Republic of Sierra Leone. All constitutional clauses are legally binding.
        </p>
      </div>
    </div>
  );
}
