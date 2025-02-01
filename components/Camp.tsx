import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const CampSite = ({ backgroundImage, title, subtitle }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
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
          backgroundImage="bg-bg-img-2"
          title="Awareness Cultural Group"
          subtitle="To give counseling and referral service on employment and also other issues relating to Challenged Persons......"
        />
      </div>
    </section>
  )
}

export default Camp;