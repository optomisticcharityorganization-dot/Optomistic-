import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Book, List, RefreshCw, Eye } from 'lucide-react';
import BookCover from './BookCover';
import BookPage from './BookPage';

interface BookSpreadProps {
  currentSpread: number;
  onSpreadChange: (spread: number) => void;
  isMobile: boolean;
  currentPageMobile: number;
  onPageChangeMobile: (page: number) => void;
}

export default function BookSpread({
  currentSpread,
  onSpreadChange,
  isMobile,
  currentPageMobile,
  onPageChangeMobile
}: BookSpreadProps) {
  const [isFlippedRight, setIsFlippedRight] = useState(true);

  // Total Pages = 13 (0 to 12)
  // Total Spreads = 7 (0 to 6)
  const totalSpreads = 7;
  const totalPagesMobile = 13;

  const navigatePrev = () => {
    if (isMobile) {
      if (currentPageMobile > 0) {
        onPageChangeMobile(currentPageMobile - 1);
      }
    } else {
      if (currentSpread > 0) {
        setIsFlippedRight(false);
        onSpreadChange(currentSpread - 1);
      }
    }
  };

  const navigateNext = () => {
    if (isMobile) {
      if (currentPageMobile < totalPagesMobile - 1) {
        onPageChangeMobile(currentPageMobile + 1);
      }
    } else {
      if (currentSpread < totalSpreads - 1) {
        setIsFlippedRight(true);
        onSpreadChange(currentSpread + 1);
      }
    }
  };

  // Render Mobile: Single Page layout with swipeable card
  if (isMobile) {
    return (
      <div id="interactive-mobile-book" className="w-full max-w-md mx-auto flex flex-col items-center gap-4">
        {/* Page Container */}
        <div 
          className="w-full aspect-[3/4.2] rounded-xl shadow-2xl overflow-hidden border border-amber-900/10 relative"
          style={{
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3), inset 0 0 10px rgba(0,0,0,0.05)'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPageMobile}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full"
            >
              {currentPageMobile === 0 ? (
                <BookCover type="front" />
              ) : currentPageMobile === 10 ? (
                <BookCover type="back" />
              ) : (
                <BookPage pageNumber={currentPageMobile} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Book edge texture simulation on the right edge */}
          {currentPageMobile > 0 && currentPageMobile < 10 && (
            <div className="absolute right-0 top-0 bottom-0 w-1.5 flex flex-col justify-between opacity-30 select-none pointer-events-none">
              <div className="w-full h-full bg-repeating-linear-gradients border-l border-amber-900/10"
                   style={{
                     background: 'repeating-linear-gradient(to bottom, #d6cbb1, #d6cbb1 1px, #e8dfc5 2px, #e8dfc5 3px)'
                   }} />
            </div>
          )}
        </div>

        {/* Navigation Info */}
        <div className="flex items-center justify-between w-full px-2 mt-1">
          <button
            onClick={navigatePrev}
            disabled={currentPageMobile === 0}
            className="p-2 rounded-full bg-white text-slate-700 hover:text-amber-800 disabled:opacity-40 disabled:cursor-not-allowed shadow transition-all duration-200"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <span className="font-serif font-bold text-xs text-amber-900 bg-amber-50 border border-amber-900/10 px-3 py-1 rounded-full shadow-2xs">
            {currentPageMobile === 0 
                ? 'Front Cover' 
                : currentPageMobile === 12 
                ? 'Back Cover' 
                : `Page ${currentPageMobile} / 11`}
          </span>

          <button
            onClick={navigateNext}
            disabled={currentPageMobile === totalPagesMobile - 1}
            className="p-2 rounded-full bg-white text-slate-700 hover:text-amber-800 disabled:opacity-40 disabled:cursor-not-allowed shadow transition-all duration-200"
            aria-label="Next Page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Render Desktop: Two-page facing spread
  return (
    <div id="interactive-desktop-book" className="w-full flex flex-col items-center gap-6">
      <div 
        className="w-full max-w-5xl aspect-[16/10.5] rounded-2xl relative flex overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)] border border-amber-900/15"
        style={{
          boxShadow: '0 35px 80px -20px rgba(0,0,0,0.5), inset 0 0 3px rgba(255,255,255,0.1)'
        }}
      >
        {/* Left Page (Half) */}
        <div className="w-1/2 h-full relative overflow-[#e2dac3] bg-[#e2dac3] border-r border-black/10" style={{ perspective: '1500px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-spread-${currentSpread}`}
              initial={{ rotateY: isFlippedRight ? 85 : -85, opacity: 0.7, x: isFlippedRight ? 10 : -10 }}
              animate={{ rotateY: 0, opacity: 1, x: 0 }}
              exit={{ rotateY: isFlippedRight ? -85 : 85, opacity: 0.7, x: isFlippedRight ? -10 : 10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }}
              className="w-full h-full shadow-[inset_-10px_0_30px_rgba(0,0,0,0.05)]"
            >
              {currentSpread === 0 ? (
                // Left outside cover flap when closed
                <div 
                  className="w-full h-full relative"
                  style={{
                    background: 'linear-gradient(to right, #0a0f1d 0%, #111827 90%, #030712 100%)',
                    boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)'
                  }}
                >
                  {/* Subtle Spine Embossing */}
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/60 to-transparent border-r-4 border-amber-500/10 pointer-events-none" />
                  <div className="absolute inset-y-0 right-4 w-[2px] bg-amber-400/10 pointer-events-none" />
                  {/* Center Emblem watermark */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                    <Book className="w-48 h-48 text-white" />
                  </div>
                </div>
              ) : (
                // Inside Pages on the Left side
                <div className="w-full h-full relative">
                  <BookPage pageNumber={currentSpread * 2 - 1} />
                  {/* Inner Page Shadow/Curvature near the spine */}
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />
                  {/* Paper edge effect on the left margin */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/40 pointer-events-none" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Spine Crease / Binding Line (Simulating real bound book crease) */}
        <div className="absolute top-0 bottom-0 left-1/2 w-4 -ml-2 bg-gradient-to-r from-black/25 via-black/40 to-black/25 z-40 shadow-inner flex flex-col justify-between items-center pointer-events-none">
          {/* Spine gold staples or binding wires */}
          <div className="w-[1.5px] h-3 bg-amber-500/40 rounded mt-8" />
          <div className="w-[1.5px] h-3 bg-amber-500/40 rounded my-auto" />
          <div className="w-[1.5px] h-3 bg-amber-500/40 rounded mb-8" />
        </div>

        {/* Right Page (Half) */}
        <div className="w-1/2 h-full relative overflow-[#e2dac3] bg-[#e2dac3]" style={{ perspective: '1500px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-spread-${currentSpread}`}
              initial={{ rotateY: isFlippedRight ? -85 : 85, opacity: 0.7, x: isFlippedRight ? -10 : 10 }}
              animate={{ rotateY: 0, opacity: 1, x: 0 }}
              exit={{ rotateY: isFlippedRight ? 85 : -85, opacity: 0.7, x: isFlippedRight ? 10 : -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
              className="w-full h-full shadow-[inset_10px_0_30px_rgba(0,0,0,0.05)]"
            >
              {currentSpread === 0 ? (
                // Front Cover shown on the right when closed
                <div className="w-full h-full relative">
                  <BookCover type="front" />
                  {/* Spine depth overlay */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
                </div>
              ) : currentSpread === totalSpreads - 1 ? (
                // Back Cover shown on the right when closed in the back
                <div className="w-full h-full relative">
                  <BookCover type="back" />
                  {/* Spine depth overlay */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
                </div>
              ) : (
                // Inside Pages on the Right side
                <div className="w-full h-full relative">
                  <BookPage pageNumber={currentSpread * 2} />
                  {/* Inner Page Shadow/Curvature near the spine */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />
                  {/* Page edge effect on the right margin */}
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/40 pointer-events-none" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Paper stack edge lines on left & right sides to show organic volume */}
        {currentSpread > 0 && (
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-transparent to-black/10 z-30 pointer-events-none" />
        )}
        {currentSpread < totalSpreads - 1 && (
          <div className="absolute right-0 top-0 bottom-0 w-1.5 flex flex-col justify-between opacity-35 select-none pointer-events-none z-30">
            <div className="w-full h-full bg-repeating-linear-gradients border-l border-amber-900/10"
                 style={{
                   background: 'repeating-linear-gradient(to bottom, #d6cbb1, #d6cbb1 1px, #e8dfc5 2px, #e8dfc5 3px)'
                 }} />
          </div>
        )}
      </div>

      {/* Navigation Buttons Row */}
      <div className="flex items-center justify-between w-full max-w-5xl px-4 mt-2">
        <button
          onClick={navigatePrev}
          disabled={currentSpread === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-950 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 font-serif font-semibold text-sm shadow border border-slate-200 transition-all duration-200 disabled:cursor-not-allowed cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-amber-700" />
          <span>Flip Page Back</span>
        </button>

        {/* Indicators and spread status */}
        <div className="flex items-center gap-3">
          <span className="font-serif font-bold text-xs text-amber-900 bg-amber-50 border border-amber-900/10 px-4 py-1.5 rounded-full shadow-2xs flex items-center gap-2">
            <Book className="w-3.5 h-3.5 text-amber-700" />
            <span>
              {currentSpread === 0 
                ? 'Front Cover' 
                : currentSpread === totalSpreads - 1 
                ? 'Back Cover' 
                : `Spreads ${currentSpread * 2 - 1} & ${currentSpread * 2} of 11`}
            </span>
          </span>
        </div>

        <button
          onClick={navigateNext}
          disabled={currentSpread === totalSpreads - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-950 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 font-serif font-semibold text-sm shadow border border-slate-200 transition-all duration-200 disabled:cursor-not-allowed cursor-pointer"
        >
          <span>Flip Page Next</span>
          <ChevronRight className="w-4 h-4 text-amber-700" />
        </button>
      </div>
    </div>
  );
}
