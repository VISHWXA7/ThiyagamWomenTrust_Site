// import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pp-32 md:gap-28 lg:py-20 xl:flex-row">
  <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">

  <div className='flex gap-4 items-start'>
    <div className="flex-1">
      <h1 className="bold-52 lg:bold-88">
        Welcome to <br />
        Thiyagam <br />
        Women Trust
      </h1>
        <p className="regular-16 text-gray-30 xl:max-w-[520px] text-justify mt-2 ml-5">
        Thiyagam Women Trust (Regd No. 900/06) is dedicated to empowering physically challenged rural women by providing self-employment opportunities and fostering independence. With a focus on positivity and gratitude, the trust helps them embrace life’s challenges with confidence and determination.
        </p>
    </div>
      <img src="hero.png" alt="Thiyagam Women Trust" width={650} height={650} className=" rounded-2xl " />
  </div>

        {/* <div className="my-1 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198
            <span className="regular-16 lg:regular-20 ml-2">Excellent Reviews</span>
          </p>
        </div> */}

        <div className="flex flex-col w-full gap-5 sm:flex-row">
        <a href="https://youtu.be/EPLY4VdXYig?si=hCJjG3Kpfxb6-u9P" target="_blank" rel="noopener noreferrer">
          <Button 
            type="button" 
            title="About us!" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </a>
         {/* Clickable Location Tag */}
            <a 
              href="https://maps.app.goo.gl/N2GVL3dDKx5PYf6k9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline ml-4"
            >
              <img src="location.png" alt="location" width={25} height={25}/>
              <span className='font-semibold'>Location</span>
            </a>
        </div>
      </div>

    </section>
  )
}

export default Hero;