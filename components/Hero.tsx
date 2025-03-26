// import Image from 'next/image'
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 py-10 px-6 md:gap-14 md:py-20 md:px-12 xl:flex-row">
      {/* Left Content */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <div className="flex gap-4 items-start">
          <div className="flex-1 mt-14">
            <h1 className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl">
              Thiyagam <br />
              Women Trust
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base lg:mt-6 lg:max-w-[500px]">
              Thiyagam Women Trust (Regd No. 900/06) is dedicated to empowering physically challenged rural women by providing self-employment opportunities and fostering independence. With a focus on positivity and gratitude, the trust helps them embrace life’s challenges with confidence and determination.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6 sm:flex-row">
          <a
            href="https://youtu.be/EPLY4VdXYig?si=hCJjG3Kpfxb6-u9P"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="button"
              title="About Us!"
              icon="/play.svg"
              variant="btn_white_text"
            />
          </a>
          {/* Location Button */}
          <a
            href="https://maps.app.goo.gl/N2GVL3dDKx5PYf6k9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
          >
            <img
              src="location.png"
              alt="Location"
              width={25}
              height={25}
              className="rounded-md ml-8"
            />
            <span>Our Location</span>
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex-1 mt-10 xl:mt-0">
        <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[500px] lg:w-[800px]">
          {/* Image with Next.js */}
          <img
            src="hero.png"
            alt="Thiyagam Women Trust"
            width={650}
            height={650}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
