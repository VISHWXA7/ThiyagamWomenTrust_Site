"use client";

import { useRef } from "react";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const CampSite = ({ backgroundImage, title, subtitle }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[300px] sm:min-w-[500px] md:min-w-[700px] lg:min-w-[900px] ${backgroundImage} bg-cover bg-no-repeat rounded-2xl lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-4 sm:p-6 lg:px-16 lg:py-8">
        <div className="flexCenter gap-4"></div>
        <div className="flex flex-col gap-1 rounded-2xl">
          <h4 className="text-lg sm:text-xl font-extrabold uppercase bg-clip-text text-white lg:text-3xl drop-shadow-md">
            {title}
          </h4>
          <p className="text-xs sm:text-sm text-gray-100 lg:text-lg leading-relaxed tracking-wide bg-black/50 rounded-md p-2 sm:p-3 lg:p-4">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -700, // Adjusted based on new responsive card width
        behavior: "smooth",
      });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 700, // Adjusted based on new responsive card width
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-full relative flex flex-col py-6 sm:py-8 lg:mb-8 lg:py-16 xl:mb-8">
      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 sm:left-4 top-1/2 z-10 flex h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75"
      >
        ◀
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-2 sm:right-4 top-1/2 z-10 flex h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75"
      >
        ▶
      </button>

      {/* Image Cards */}
      <div
        ref={scrollContainerRef}
        className="hide-scrollbar flex h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] xl:h-[520px] w-full items-start justify-start gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-2 sm:px-4"
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Women Empowerment"
          subtitle="Empowering the rural women with disabilities to earn their livelihood by creating opportunities for self employment and provide....."
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Self-help Initiatives"
          subtitle="Thiyagam Self-Help group formed to encourage self employment. Thiyagam Cultural team formed to spread happiness and awareness......"
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="Awareness Cultural Group"
          subtitle="To give counseling and referral service on employment and also other issues relating to Challenged Persons......"
        />
      </div>
    </section>
  );
};

export default Camp;
