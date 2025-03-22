"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CampProps {
  backgroundImage: string;
  subtitle: string;
}

const CampSite = ({ backgroundImage,subtitle }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[280px] sm:min-w-[400px] md:min-w-[550px] lg:min-w-[700px] xl:min-w-[800px] ${backgroundImage} bg-cover bg-center bg-no-repeat rounded-xl shadow-lg overflow-hidden`}
    >
      <div className="flex h-full flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
        <p className="text-xs sm:text-base text-gray-200 lg:text-lg leading-relaxed tracking-wide bg-black/40 rounded-md p-2 sm:p-3">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const Camp = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -700 : 700,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative flex flex-col py-8 sm:py-12 lg:py-16">
      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-all duration-300"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-all duration-300"
      >
        <ChevronRight size={28} />
      </button>

      {/* Image Cards */}
      <div
        ref={scrollContainerRef}
        className="flex hide-scrollbar overflow-x-auto scroll-smooth px-2 sm:px-6 gap-6 
        h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] xl:h-[450px] 
        scroll-snap-x-mandatory"
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          subtitle="Empowering the rural women with disabilities to earn their livelihood by creating opportunities for self-employment."
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          subtitle="Thiyagam Self-Help group encourages self-employment, fostering cultural activities to spread happiness & awareness."
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          subtitle="Providing counseling and referral services on employment and other issues for challenged persons."
        />
      </div>
    </section>
  );
};

export default Camp;
