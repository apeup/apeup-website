"use client";
import Image from "next/image";
import { inter, zenDots } from "../fonts";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { getRoadmapData } from "@/sanity/lib/queries";




const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Roadmap() {

  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 to 1 progress of scroll inside section

  type RoadmapItem = {
    league1: string;
    league2: string;
    league3: string;
    league4: string;
    league5: string;
    league6: string;
    league7: string;
    league8: string;
    league9: string;
    mau1: string;
    mau2: string;
    mau3: string;
    mau4: string;
    mau5: string;
    mau6: string;
    mau7?: string;
    mau8?: string;
    mau9?: string;
    image1: { asset: { url: string } };
    image2: { asset: { url: string } };
    image3: { asset: { url: string } };
    image4: { asset: { url: string } };
    image5: { asset: { url: string } };
    image6: { asset: { url: string } };
    image7: { asset: { url: string } };
    image8: { asset: { url: string } };
    image9?: { asset: { url: string } };
    icon1: { asset: { url: string } };
    icon2: { asset: { url: string } };
    icon3: { asset: { url: string } };
    icon4: { asset: { url: string } };
    iconTitle1: string;
    iconTitle2: string;
    iconTitle3: string;
    iconTitle4: string;
    iconSubtitle1: string;
    iconSubtitle2: string;
    iconSubtitle3: string;
    iconSubtitle4: string;
    title1: string;
    title2: string;
    subtitle: string;
  };
  const [roadmap, setRoadmap] = useState<RoadmapItem[] | null>(null);

  const totalDots = 9;
  const ANIMATION_SPEED_FACTOR = 1.1; // Increase animation speed by 10%

  // Calculate scroll progress inside the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight;

      if (rect.bottom <= 0) {
        setProgress(1);
        return;
      }

      if (rect.top > startTrigger) {
        setProgress(0);
        return;
      }

      const totalScrollRange = rect.height + (endTrigger - startTrigger);
      const scrolled = endTrigger - rect.top;
      let prog = scrolled / totalScrollRange;

      prog = Math.min(Math.max(prog, 0), 1);

      setProgress(prog);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine active dots/lines with boosted progress
  const getIsActive = (index: number) => {
    // index from 1 to totalDots
    // Boost progress and clamp to 1
    const boostedProgress = Math.min(progress * ANIMATION_SPEED_FACTOR, 1);
    const progressIndex = boostedProgress * totalDots;
    return index <= progressIndex;
  };



  useEffect(() => {
    const query = client.fetch(getRoadmapData())
    query.then((data) => setRoadmap(data))
  }, []);
  if (!roadmap) return null



  const milestonesLeft = [
  {
    league: roadmap[0].league1,
    mau: roadmap[0].mau1,
    icon: roadmap[0].image1.asset.url,
    size: "w-[40px] h-[85px] sm:w-[40px] sm:h-[90px] 2xl:w-[64px] 2xl:h-[137px]",
  },
  {
    league: roadmap[0].league3,
    mau: roadmap[0].mau3,
    icon: roadmap[0].image3.asset.url,
    size: "w-[56px] h-[96px] sm:w-[55px] sm:h-[100px] 2xl:w-[86px] 2xl:h-[149px]",
  },
  {
    league: roadmap[0].league5,
    mau: roadmap[0].mau5,
    icon: roadmap[0].image5.asset.url,
    size: "w-[60px] h-[100px] sm:w-[60px] sm:h-[105px] 2xl:w-[94px] 2xl:h-[152px]",
  },
  {
    league: roadmap[0].league7,
    mau: "",
    icon: roadmap[0].image7.asset.url,
    size: "w-[60px] h-[100px] sm:w-[60px] sm:h-[105px] 2xl:w-[94px] 2xl:h-[152px]",
  },
  {
    league: roadmap[0].league9,
    mau: "",
    icon: "/nft.png",
    size: "w-[44px] h-[70px] sm:w-[56px] sm:h-[92px] md:w-[70px] md:h-[115px]",
  },
];


const milestonesRight = [
  {
    league: roadmap[0].league2,
    mau: roadmap[0].mau2,
    icon: roadmap[0].image2.asset.url,
    size: "w-[40px] h-[85px] sm:w-[40px] sm:h-[90px] 2xl:w-[64px] 2xl:h-[135px]",
  },
  {
    league: roadmap[0].league4,
    mau: roadmap[0].mau4,
    icon: roadmap[0].image4.asset.url,
    size: "w-[56px] h-[85px] sm:w-[60px] sm:h-[90px] 2xl:w-[86px] 2xl:h-[126px]",
  },
  {
    league: roadmap[0].league6,
    mau: roadmap[0].mau6,
    icon: roadmap[0].image6.asset.url,
    size: "w-[52px] h-[80px] sm:w-[60px] sm:h-[85px] 2xl:w-[83px] 2xl:h-[125px]",
  },
  {
    league: roadmap[0].league8,
    mau: "",
    icon: roadmap[0].image8.asset.url,
    size: "w-[50px] h-[90px] sm:w-[55px] sm:h-[90px] 2xl:w-[79px] 2xl:h-[135px]",
  },
];
  return (
    <section
      id="roadmap"
      className="text-white bg-[url('/new-milestonese.png')] bg-[#130F1F] bg-cover bg-no-repeat bg-center relative"
    >
      <div className="max-w-[1600px] mx-auto px-4 pt-10 lg:pt-20 xl:pt-10 pb-14">
        {/* Heading */}
        <div className="text-center z-30 relative">
          <h2
            className={`${zenDots.className} text-[28px] lg:text-[35px] 2xl:text-[54px] leading-tight`}
            style={{
              textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C",
            }}
          >
            {roadmap[0].title1}
          </h2>
          <p className={`mt-2 text-[12px] lg:text-[14px] 2xl:text-lg ${inter.className}`}>
            {roadmap[0].subtitle}
          </p>
        </div>

        {/* Desktop Steps */}
        <div className="hidden mt-16 sm:flex flex-col sm:flex-row justify-center items-center gap-y-12 gap-x-6 lg:gap-x-0">

          {/* Step 1 */}
          <motion.div
            className="flex flex-col items-center justify-center text-center w-full xs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-1/5"
            {...fadeUp}
            viewport={{ once: true }}
          >
            <Image className="xl:w-[50px] w-[30px] lg:w-[40px] 2xl:w-[70px]" src={roadmap[0].icon1.asset.url} width={70} height={70} alt="roadmap-1" />
            <h4 className={`${zenDots.className} 2xl:text-[28px] text-[18px] lg:text-[20px] xl:text-[22px] mt-3`}>{roadmap[0].iconTitle1}</h4>
            <p className={`2xl:text-base xl:text-sm lg:text-[12px] text-[10px] max-w-[220px] mt-1 ${inter.className}`}>
              {roadmap[0].iconSubtitle1}
            </p>
          </motion.div>

          {/* Line 1 */}
          <div className="hidden sm:flex items-center justify-center w-[60px]">
            <Image className="xl:w-[70px] xl:h-[250px] w-[50px]" src="/roadmap-line.png" width={70} height={70} alt="roadmap-line" />
          </div>

          {/* Step 2 */}
          <motion.div
            className="flex flex-col items-center text-center w-full xs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-1/5"
            {...fadeUp}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image className="xl:w-[50px] w-[30px] lg:w-[40px]] 2xl:w-[70px]" src={roadmap[0].icon2.asset.url} width={70} height={70} alt="roadmap-2" />
            <h4 className={`${zenDots.className} 2xl:text-[28px] text-[18px] lg:text-[20px] mt-5`}>{roadmap[0].iconTitle2}</h4>
            <p className={`2xl:text-base xl:text-sm lg:text-[12px] text-[10px] max-w-[220px] mt-1 ${inter.className}`}>
              {roadmap[0].iconSubtitle2}
            </p>
          </motion.div>

          {/* Line 2 */}
          <div className="hidden sm:flex items-center justify-center w-[60px]">
            <Image className="xl:w-[70px] xl:h-[250px] w-[50px]" src="/roadmap-line.png" width={70} height={70} alt="roadmap-line" />
          </div>

          {/* Step 3 */}
          <motion.div
            className="flex flex-col items-center text-center w-full xs:w-[80%] xl:mb-6 sm:w-[45%] md:w-[30%] lg:w-1/5"
            {...fadeUp}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image className="xl:w-[50px] w-[30px] lg:w-[40px] 2xl:w-[70px]" src={roadmap[0].icon3.asset.url} width={70} height={70} alt="roadmap-3" />
            <h4 className={`${zenDots.className} 2xl:text-[28px] text-[18px] lg:text-[20px] xl:text-[22px] mt-3`}>{roadmap[0].iconTitle3}</h4>
            <p className={`2xl:text-base xl:text-sm lg:text-[12px] text-[10px] max-w-[220px] mt-1 ${inter.className}`}>
              {roadmap[0].iconSubtitle3}
            </p>
          </motion.div>

          {/* Line 3 */}
          <div className="hidden sm:flex items-center justify-center w-[60px]">
            <Image className="xl:w-[70px] xl:h-[250px] w-[50px]" src="/roadmap-line.png" width={70} height={70} alt="roadmap-line" />
          </div>

          {/* Step 4 */}
          <motion.div
            className="flex flex-col items-center text-center w-full xs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-1/5"
            {...fadeUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image className="xl:w-[50px] w-[30px] lg:w-[40px] 2xl:w-[70px]" src={roadmap[0].icon4.asset.url} width={70} height={70} alt="roadmap-4" />
            <h4 className={`${zenDots.className} 2xl:text-[28px] text-[18px] lg:text-[20px] xl:text-[22px] mt-3`}>{roadmap[0].iconTitle4}</h4>
            <p className={`2xl:text-base xl:text-sm lg:text-[12px] text-[10px] max-w-[220px] mt-1 ${inter.className}`}>
              {roadmap[0].iconSubtitle4}
            </p>
          </motion.div>
        </div>


        {/* Mobile Steps */}
        <div className="sm:hidden mt-16 flex flex-col sm:flex-row justify-center items-center gap-y-12 gap-x-6 lg:gap-x-0">

          {/* Step 1 */}
          <div className="flex justify-center gap-5 items-center">
            <motion.div
              className="flex flex-col items-center justify-center text-center w-full xs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-1/5"
              {...fadeUp}
              viewport={{ once: true }}
            >
              <Image className="xl:w-[50px] w-[30px] lg:w-[40px] 2xl:w-[70px]" src={roadmap[0].icon1.asset.url} width={70} height={70} alt="roadmap-1" />
              <h4 className={`${zenDots.className} 2xl:text-[28px] text-[18px] lg:text-[20px] xl:text-[22px] mt-3`}>{roadmap[0].iconTitle1}</h4>
              <p className={`2xl:text-base xl:text-sm lg:text-[12px] text-[10px] max-w-[220px] mt-1 ${inter.className}`}>
                {roadmap[0].iconSubtitle1}
              </p>
            </motion.div>

            {/* Line 1 */}
            <div className="hidden sm:flex items-center justify-center w-[60px]">
              <Image className="xl:w-[70px] xl:h-[250px] w-[50px]" src="/roadmap-line.png" width={70} height={70} alt="roadmap-line" />
            </div>

            {/* Step 2 */}
            <motion.div
              className="flex flex-col items-center text-center w-full xs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-1/5"
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image className="xl:w-[50px] w-[30px] lg:w-[40px]] 2xl:w-[70px]" src={roadmap[0].icon2.asset.url} width={70} height={70} alt="roadmap-2" />
              <h4 className={`${zenDots.className} 2xl:text-[28px] text-[18px] lg:text-[20px] mt-5`}>{roadmap[0].iconTitle2}</h4>
              <p className={`2xl:text-base xl:text-sm lg:text-[12px] text-[10px] max-w-[220px] mt-1 ${inter.className}`}>
                {roadmap[0].iconSubtitle2}
              </p>
            </motion.div>

            {/* Line 2 */}
            <div className="hidden sm:flex items-center justify-center w-[60px]">
              <Image className="xl:w-[70px] xl:h-[250px] w-[50px]" src="/roadmap-line.png" width={70} height={70} alt="roadmap-line" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex justify-center items-center gap-5">
            <motion.div
              className="flex flex-col items-center text-center w-full xs:w-[80%] xl:mb-6 sm:w-[45%] md:w-[30%] lg:w-1/5"
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image className="xl:w-[50px] w-[30px] lg:w-[40px] 2xl:w-[70px]" src={roadmap[0].icon3.asset.url} width={70} height={70} alt="roadmap-3" />
              <h4 className={`${zenDots.className} 2xl:text-[28px] text-[18px] lg:text-[20px] xl:text-[22px] mt-3`}>{roadmap[0].iconTitle3}</h4>
              <p className={`2xl:text-base xl:text-sm lg:text-[12px] text-[10px] max-w-[220px] mt-1 ${inter.className}`}>
                {roadmap[0].iconSubtitle3}
              </p>
            </motion.div>

            {/* Line 3 */}
            <div className="hidden sm:flex items-center justify-center w-[60px]">
              <Image className="xl:w-[70px] xl:h-[250px] w-[50px]" src="/roadmap-line.png" width={70} height={70} alt="roadmap-line" />
            </div>

            {/* Step 4 */}
            <motion.div
              className="flex flex-col items-center text-center w-full xs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-1/5"
              {...fadeUp}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >

              <Image className="xl:w-[50px] w-[30px] lg:w-[40px] 2xl:w-[70px]" src={roadmap[0].icon4.asset.url} width={70} height={70} alt="roadmap-4" />
              <h4 className={`${zenDots.className} 2xl:text-[28px] text-[18px] lg:text-[20px] xl:text-[22px] mt-3`}>{roadmap[0].iconTitle4}</h4>
              <p className={`2xl:text-base xl:text-sm lg:text-[12px] text-[10px] max-w-[220px] mt-1 ${inter.className}`}>
                {roadmap[0].iconSubtitle4}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Milestones title */}
        <h2
          className={`${zenDots.className} text-center text-[28px] lg:text-[35px] 2xl:text-[54px] leading-tight mt-20 sm:mt-28`}
          style={{
            textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C",
          }}
        >
          {roadmap[0].title2}
        </h2>
      </div>



      <section
        ref={sectionRef}
        className="relative pb-20 md:pb-20 xl:pb-20 2xl:pb-35 px-4 sm:px-10 lg:px-10 pt-10 sm:pt-0"
      >
        <div className="max-w-[1200px] mx-auto space-y-10 sm:pt-5">
          <div className="flex flex-col md:flex-row justify-center w-[90%] md:w-full md:mx-auto ml-auto items-center md:items-start gap-6 lg:gap-12 relative">
            {/* Left Column */}
            <div className="flex flex-col items-center md:items-start space-y-10 sm:space-y-7 lg:space-y-8 xl:space-y-9 2xl:space-y-13 w-full sm:w-[350px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[514px] px-4 md:px-0">
              {milestonesLeft.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full h-[80px] 2xl:h-[120px] custom-shadow relative bg-[url(/milestones-banner.png)] bg-center bg-cover bg-no-repeat text-white rounded-[24px] sm:rounded-[28px] 2xl:rounded-[39px] px-8 py-4 sm:py-6 flex items-center justify-start sm:justify-center md:justify-end lg:justify-center gap-3 sm:gap-4"
                >
                  {idx !== milestonesLeft.length - 1 && (
                    <div className="absolute custom-blur -right-2 sm:-right-5 md:top-0 lg:top-0 xl:top-0 md:-left-7 xl:-left-8 2xl:-left-14 bg-[radial-gradient(circle,_#F5B201,_#F9C301)] h-[90px] sm:h-[80px] md:h-[80px] xl:h-[80px] 2xl:h-[121px] w-[90px] sm:w-[80px] md:w-[80px] xl:w-[80px] 2xl:w-[121px] rounded-full shadow-[0_4px_50px_#00000040]">
                      <Image
                        src={item.icon}
                        width={100}
                        height={100}
                        alt={item.league}
                        className={`${item.size} object-contain z-10 absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                      />

                    </div>
                  )}

                  <div
                    className={`flex flex-col sm:flex-row justify-center gap-1 sm:gap-2 text-center ${item.league === "NFT Marketplace & Staking Launch"
                      ? ""
                      : "pr-14"
                      } sm:pr-0 z-10`}
                  >
                    <h4
                      className={`${zenDots.className} text-[12px]  lg:text-[14px] 2xl:text-[28px] lg:font-bold`}
                    >
                      {item.league}
                    </h4>
                    <span className="text-[12px] lg:text-[14px] 2xl:text-[28px] mt-1 sm:mt-0">
                      {item.mau}
                    </span>
                  </div>

                  <Image
                    className="absolute top-0 right-0 max-w-[100px] sm:max-w-[100px] 2xl:max-w-[136px] w-full pointer-events-none"
                    src="/mask.svg"
                    width={64}
                    height={64}
                    alt="mask top"
                    priority
                  />
                  <Image
                    className="absolute bottom-0 left-0 max-w-[100px] sm:max-w-[100px] 2xl:max-w-[136px] w-full pointer-events-none"
                    src="/bottom-mask.svg"
                    width={64}
                    height={64}
                    alt="mask bottom"
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Dots Column */}
            <div className="absolute md:static -left-7 sm:-left-10 md:flex flex-col items-center justify-center shrink-0 z-20">
              {[...Array(totalDots)].map((_, i) => {
                const dotIndex = i + 1;
                const isActive = getIsActive(dotIndex);

                return (
                  <div key={i} className="flex flex-col items-center relative">
                    <div
                      id={`dot-${dotIndex}`}
                      className={`md:h-[25px] md:w-[25px] lg:h-[30px] lg:w-[30px] xl:h-[30px] xl:w-[30px] 2xl:h-[43px] 2xl:w-[43px] h-[30px] w-[30px] rounded-full relative transition-colors duration-300 ${isActive ? "bg-pink-500" : "bg-[#585561]"
                        }`}
                    >
                      <div
                        className={`absolute top-1/2 left-1/2 2xl:w-[14px] 2xl:h-[14px] h-[10px] w-[10px] lg:h-[12px] lg:w-[12px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 ease-out ${isActive ? "bg-white scale-100" : "bg-white scale-100"
                          }`}
                      />
                    </div>

                    {i < totalDots - 1 && (
                      <div
                        id={`line-${dotIndex}`}
                        className={`w-[4px] lg:h-[30px] md:h-[30px] h-[85px] xl:h-[26px] 2xl:h-[43px] sm:h-[80px] transition-colors duration-300 ${isActive ? "bg-pink-500" : "bg-white"
                          }`}
                        style={{
                          transformOrigin: "top center",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="flex flex-col space-y-10 sm:space-y-7 lg:space-y-8 xl:space-y-9 2xl:space-y-13 mt-4 sm:mt-0 w-full sm:w-[350px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[514px] md:pt-5 xl:pt-5 2xl:pt-20 px-5 md:px-0">
              {milestonesRight.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full h-[80px] 2xl:h-[120px] custom-shadow relative bg-[url(/preview-banner.png)] bg-center bg-cover bg-no-repeat text-white rounded-[24px] sm:rounded-[28px] 2xl:rounded-[39px] px-8 py-4 sm:py-6 flex items-center justify-start md:justify-center gap-3 sm:gap-4"
                >
                  <div className="absolute custom-blur -right-2 sm:-right-5 md:top-0 lg:top-0 xl:top-0 md:-right-7 xl:-right-4 2xl:-right-14 bg-[radial-gradient(circle,_#F5B201,_#F9C301)] h-[90px] sm:h-[80px] md:h-[80px] xl:h-[80px] 2xl:h-[121px] w-[90px] sm:w-[80px] md:w-[80px] 2xl:w-[121px] xl:w-[80px] rounded-full shadow-[0_4px_50px_#00000040]">
                    <Image
                      src={item.icon}
                      width={100}
                      height={100}
                      alt={item.league}
                      className={`${item.size} object-contain z-10 absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                    />

                  </div>

                  <div className={`flex flex-col sm:flex-row justify-center gap-1 sm:gap-2 text-center z-10 ${item.league === "Platform Listings (CEXs, DEXs)" ? "pr-12" : "sm:pl-14 md:pl-0 pr-10"}`}>
                    <h4
                      className={`${zenDots.className} text-[12px] lg:text-[14px] 2xl:text-[28px] lg:font-bold`}
                    >
                      {item.league}
                    </h4>
                    <span className="text-[12px] lg:text-[14px] 2xl:text-[28px] mt-1 sm:mt-0">
                      {item.mau}
                    </span>
                  </div>

                  <Image
                    className="absolute top-0 right-0 max-w-[100px] sm:max-w-[100px] 2xl:max-w-[136px] w-full pointer-events-none"
                    src="/mask.svg"
                    width={64}
                    height={64}
                    alt="mask top"
                    priority
                  />
                  <Image
                    className="absolute bottom-0 left-0 max-w-[100px] sm:max-w-[100px] 2xl:max-w-[136px] w-full pointer-events-none"
                    src="/bottom-mask.svg"
                    width={64}
                    height={64}
                    alt="mask bottom"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
