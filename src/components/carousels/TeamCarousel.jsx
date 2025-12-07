// src/components/carousels/TeamCarousel.jsx
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamCarousel = ({ teamMembers }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDir, setAnimationDir] = useState(null); // 'next' | 'prev'
  const [isEntering, setIsEntering] = useState(false);
  const autoPlayRef = useRef(null);
  const currentSlideRef = useRef(currentSlide);
  const TRANSITION_MS = 700;
  const [visibleCount, setVisibleCount] = useState(3);

  // Determine visible slides based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = teamMembers.length;

  // Get center index position
  const getCenterIndex = () => {
    const centerPosition = Math.floor(visibleCount / 2);
    return (currentSlide + centerPosition) % totalSlides;
  };

  // Get slides to display with proper indices
  const getDisplaySlides = () => {
    const slides = [];
    const startOffset = currentSlide - Math.floor(visibleCount / 2);

    for (let i = 0; i < visibleCount; i++) {
      let index = (startOffset + i + totalSlides) % totalSlides;
      const isCenter = i === Math.floor(visibleCount / 2);
      slides.push({
        index,
        member: teamMembers[index],
        isCenter,
        position: i,
      });
    }
    return slides;
  };

  // Navigation functions
  const goToSlide = (index) => {
    // immediate jump (used by dots)
    setCurrentSlide(((index % totalSlides) + totalSlides) % totalSlides);
    resetAutoPlay();
    setHoveredSlide(null);
  };

  const startAnimatedChange = (targetIndex, dir) => {
    if (isAnimating || isEntering) return; // prevent spam
    setAnimationDir(dir);
    // start outgoing animation
    setIsAnimating(true);
    // wait for outgoing animation to play (match TRANSITION_MS)
    setTimeout(() => {
      // switch slide after outgoing animation
      const newIndex = ((targetIndex % totalSlides) + totalSlides) % totalSlides;
      setCurrentSlide(newIndex);
      currentSlideRef.current = newIndex;
      resetAutoPlay();
      // stop outgoing
      setIsAnimating(false);
      // mark entering so incoming slides start from offset
      setIsEntering(true);
      // allow one frame then let incoming transition run
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsEntering(false);
          setAnimationDir(null);
        }, TRANSITION_MS);
      });
    }, TRANSITION_MS);
  };

  const nextSlide = () => {
    startAnimatedChange(currentSlide + 1, "next");
  };

  const prevSlide = () => {
    startAnimatedChange(currentSlide - 1 + totalSlides, "prev");
  };

  // Auto-play functions
  const clearAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const resetAutoPlay = () => {
    clearAutoPlay();
    autoPlayRef.current = setInterval(() => {
      // use animated change so autoplay is smooth
      startAnimatedChange(currentSlideRef.current + 1, "next");
    }, 4000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => clearAutoPlay();
  }, [totalSlides]);

  // keep ref in sync with currentSlide for autoplay
  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    setIsTransitioning(false);
  }, [currentSlide]);

  const displaySlides = getDisplaySlides();

  // Compute inline style for each slide to support outgoing/entering animations
  const computeSlideStyle = (slide) => {
    const baseWidth =
      visibleCount === 1
        ? "100%"
        : visibleCount === 2
          ? slide.isCenter
            ? "65%"
            : "35%"
          : slide.isCenter
            ? "55%"
            : "30%";

    let styleObj = {
      width: baseWidth,
      opacity: slide.isCenter ? 1 : 0.4,
      transform: slide.isCenter ? "scale(1) translateZ(50px)" : "scale(0.8) translateZ(0px)",
      transition: "transform 700ms ease-out, opacity 700ms ease-out, width 700ms ease-out",
    };

    if (isAnimating && animationDir) {
      const outX = animationDir === "next" ? -120 : 120;
      styleObj.transform = `translateX(${outX}px) scale(${slide.isCenter ? 0.86 : 0.78})`;
      styleObj.opacity = 0;
    }

    if (isEntering && animationDir) {
      const inX = animationDir === "next" ? 120 : -120;
      styleObj.transform = `translateX(${inX}px) scale(${slide.isCenter ? 0.86 : 0.78})`;
      styleObj.opacity = 0;
    }

    return styleObj;
  };

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <div className="relative px-4 sm:px-8 lg:px-16 py-12 group">
        {/* Background glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Slides Container */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-6 perspective relative z-10">
          {displaySlides.map((slide, idx) => (
            <div
              key={`${slide.index}-${slide.position}`}
              onClick={() => {
                if (!slide.isCenter) {
                  if (slide.position < Math.floor(visibleCount / 2)) {
                    prevSlide();
                  } else {
                    nextSlide();
                  }
                }
              }}
              onMouseEnter={() => setHoveredSlide(slide.index)}
              onMouseLeave={() => setHoveredSlide(null)}
              className={`relative transition-all duration-700 ease-out cursor-pointer flex-shrink-0`}
              style={computeSlideStyle(slide)}
            >
              {/* Card Container */}
              <div
                className={`relative group h-full rounded-3xl overflow-hidden transition-all duration-700 ${
                  slide.isCenter
                    ? "border border-blue-400/40 shadow-2xl shadow-blue-600/25 backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50"
                    : "border border-slate-700/30 shadow-xl shadow-slate-900/40 bg-gradient-to-br from-slate-900/40 to-slate-950/40 backdrop-blur-sm"
                }`}
              >
                {/* Premium gradient overlay frame */}
                <div
                  className={`absolute -inset-[2px] rounded-3xl pointer-events-none transition-opacity duration-700 ${
                    slide.isCenter
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                  style={{
                    background:
                      slide.isCenter
                        ? "linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(34, 211, 238, 0.3), rgba(139, 92, 246, 0.2))"
                        : "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(34, 211, 238, 0.1))",
                    filter: "blur(1px)",
                  }}
                />

                {/* Image Container */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                  {/* Image with advanced filters */}
                  <img
                    src={slide.member.image}
                    alt={slide.member.name}
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      slide.isCenter
                        ? hoveredSlide === slide.index
                          ? "scale-110 brightness-100"
                          : "scale-100 brightness-90"
                        : hoveredSlide === slide.index
                          ? "scale-100 brightness-80"
                          : "scale-95 brightness-75"
                    } ${
                      slide.isCenter ? "" : "saturate-50"
                    }`}
                  />

                  {/* Premium gradient overlays - layered */}
                  <div
                    className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
                      slide.isCenter
                        ? "opacity-40 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"
                        : "opacity-60 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"
                    }`}
                  />

                  {/* Secondary overlay for depth */}
                  <div
                    className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
                      slide.isCenter && hoveredSlide === slide.index
                        ? "opacity-0"
                        : "opacity-30"
                    }`}
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, transparent 0%, rgba(0,0,0,0.3) 100%)",
                    }}
                  />

                  {/* Featured Badge */}
                  {slide.isCenter && (
                    <div
                      className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-gradient-to-r from-blue-500/40 to-cyan-500/40 border border-cyan-400/60 text-white text-xs font-bold shadow-lg transition-all duration-500"
                      style={{
                        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                      }}
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                      Featured
                    </div>
                  )}

                  {/* Role Badge */}
                  <div
                    className={`absolute bottom-4 sm:bottom-6 left-4 sm:left-6 px-4 py-2 rounded-full backdrop-blur-md font-semibold text-sm transition-all duration-500 ${
                      slide.isCenter
                        ? "bg-gradient-to-r from-blue-500/70 to-cyan-500/70 text-white border border-cyan-300/50 shadow-xl scale-100"
                        : "bg-gradient-to-r from-blue-400/50 to-cyan-400/50 text-slate-100 border border-blue-300/30 shadow-lg scale-90"
                    }`}
                  >
                    {slide.member.role}
                  </div>
                </div>

                {/* Content Container - Premium styling */}
                <div className={`relative px-5 sm:px-6 py-6 flex flex-col flex-grow transition-all duration-500 ${
                  slide.isCenter
                    ? "bg-gradient-to-b from-slate-800/50 to-slate-900/80 backdrop-blur-sm"
                    : "bg-gradient-to-b from-slate-900/30 to-slate-950/60"
                }`}>
                  {/* Header section */}
                  <div className="mb-4 pb-3 border-b border-slate-700/50">
                    <p
                      className={`font-bold line-clamp-2 transition-all duration-500 ${
                        slide.isCenter
                          ? "text-xl sm:text-2xl text-white"
                          : "text-lg sm:text-xl text-slate-200"
                      }`}
                    >
                      {slide.member.name}
                    </p>
                    <p
                      className={`text-xs font-semibold uppercase tracking-widest mt-2 transition-all duration-500 ${
                        slide.isCenter
                          ? "text-cyan-300"
                          : "text-blue-300/70"
                      }`}
                    >
                      {slide.member.role}
                    </p>
                  </div>

                  {/* Bio section */}
                  <p
                    className={`line-clamp-3 flex-grow transition-all duration-500 leading-relaxed ${
                      slide.isCenter
                        ? "text-sm text-slate-200"
                        : "text-xs text-slate-300/80"
                    }`}
                  >
                    {slide.member.note}
                  </p>

                  {/* Bottom accent bar */}
                  <div className="mt-4 pt-4 border-t border-slate-700/40">
                    <div className="relative h-1 bg-slate-700/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full transition-all duration-700 ${
                          slide.isCenter ? "w-full opacity-100" : "w-0 opacity-50"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover overlay glow */}
                {slide.isCenter && hoveredSlide === slide.index && (
                  <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-20 bg-gradient-to-br from-blue-400 via-cyan-300 to-purple-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls - Premium styling */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center relative z-10">
          {/* Dots Indicator - Premium styling (CENTERED, NO ARROWS) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            {Array.from({ length: totalSlides }).map((_, idx) => {
              const distance = Math.abs(idx - currentSlide);
              const minDistance = Math.min(distance, totalSlides - distance);
              const isActive = minDistance === 0;
              const isNear = minDistance === 1;

              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-500 rounded-full relative group ${
                    isActive
                      ? "w-8 h-2.5 sm:w-10 sm:h-3 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50"
                      : isNear
                        ? "w-3 h-2.5 sm:w-4 sm:h-3 bg-blue-400/50 hover:bg-blue-400/70"
                        : "w-2 h-2.5 sm:w-3 sm:h-3 bg-slate-600/50 hover:bg-slate-500/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Info Section - Premium display */}
      <div className="mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3">
          {/* Slide Counter */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <p className="text-sm font-semibold text-slate-400">
              Slide <span className="text-blue-300 font-bold">{currentSlide + 1}</span> of{" "}
              <span className="text-cyan-300 font-bold">{totalSlides}</span>
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>

          {/* Team member name display */}
          <p className="text-base sm:text-lg font-bold text-slate-200 transition-all duration-500">
            {teamMembers[getCenterIndex()].name}
          </p>

          {/* Decorative line */}
          <div className="flex justify-center">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>
        </div>
      </div>

      {/* CSS Animation for pulse */}
      <style>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamCarousel;
