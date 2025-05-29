"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import { zenDots } from "../fonts";

const milestonesLeft = [
  { league: "League 1", mau: "0.5M MAU", icon: "/1.png" },
  { league: "League 3", mau: "2M MAU", icon: "/3.png" },
  { league: "League 5", mau: "4M MAU", icon: "/5.png" },
  { league: "Airdrop Phase", mau: "", icon: "/7.png" },
  { league: "NFT Marketplace & Staking Launch", mau: "", icon: "/nft.png" },
];

const milestonesRight = [
  { league: "League 2", mau: "1M MAU", icon: "/2.png" },
  { league: "League 4", mau: "3M MAU", icon: "/4.png" },
  { league: "League 6", mau: "5M MAU", icon: "/6.png" },
  { league: "Platform Listings (CEXs, DEXs)", mau: "", icon: "/8.png" },
];

export default function Milestones() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 to 1 progress of scroll inside section

  const totalDots = 9;
  const ANIMATION_SPEED_FACTOR = 1.1; // Increase animation speed by 10%

  // Calculate scroll progress inside the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startTrigger = windowHeight * 0.6;
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

  return (
    <section
      ref={sectionRef}
      className="relative bg-[url('/milestone-bg.png')] bg-[#130F1F] bg-cover bg-no-repeat bg-center pb-10 md:pb-35 px-4 sm:px-10 lg:px-10 pt-10 sm:pt-0"
    >
      <Image
        className="pointer-events-none select-none absolute -bottom-10 right-0 w-[100px] sm:w-[180px] md:w-[280px] lg:w-[400px] opacity-70"
        src="/yellow.png"
        width={500}
        height={500}
        alt="yellow"
        priority
      />
      <Image
        className="pointer-events-none select-none absolute h-auto bottom-0 left-0 w-[100px] sm:w-[180px] md:w-[280px] lg:w-[400px]"
        src="/features-purple.png"
        width={500}
        height={500}
        alt="skin"
        priority
      />

      <div className="max-w-[1200px] mx-auto space-y-10">
        <div className="flex flex-col md:flex-row justify-center w-[90%] md:w-full md:mx-auto ml-auto items-center md:items-start gap-6 lg:gap-12 relative">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start space-y-10 sm:space-y-12 w-full md:w-[480px] lg:w-[514px] px-4 md:px-0">
            {milestonesLeft.map((item, idx) => (
              <div
                key={idx}
                className="w-full h-[90px] sm:h-[100px] xl:h-[120px] relative bg-[url(/preview-banner.png)] bg-center bg-cover bg-no-repeat text-white rounded-[24px] sm:rounded-[32px] md:rounded-[39px] px-8 py-4 sm:py-6 flex items-center justify-end sm:justify-center md:justify-end lg:justify-center gap-3 sm:gap-4"
              >
                {idx !== milestonesLeft.length - 1 && (
                  <div className="absolute -left-2 sm:-left-5 md:top-3 lg:top-2 xl:top-0 md:-left-7 xl:-left-14 bg-[radial-gradient(circle,_#F5B201,_#F9C301)] h-[90px] sm:h-[105px] md:h-[90px] xl:h-[121px] w-[90px] sm:w-[105px] md:w-[90px] xl:w-[121px] rounded-full shadow-[0_4px_50px_#00000040]">
                    <Image
                      src={item.icon}
                      height={90}
                      width={60}
                      alt={item.league}
                      className="h-[100px] object-contain sm:h-[120px] xl:h-[137px] w-[60px] sm:w-[55px] xl:w-[74px] absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                )}

                <div
                  className={`flex flex-col sm:flex-row justify-center gap-1 sm:gap-2 text-center ${
                    item.league === "NFT Marketplace & Staking Launch"
                      ? ""
                      : "pl-14"
                  } sm:pl-0 z-10`}
                >
                  <h4
                    className={`${zenDots.className} text-[12px]  sm:text-[18px] xl:text-[28px] lg:font-bold`}
                  >
                    {item.league} -
                  </h4>
                  <span className="text-[12px] sm:text-[18px] xl:text-[28px] mt-1 sm:mt-0">
                    {item.mau}
                  </span>
                </div>

                <Image
                  className="absolute top-0 right-0 max-w-[100px] sm:max-w-[120px] lg:max-w-[136px] w-full pointer-events-none"
                  src="/mask.svg"
                  width={64}
                  height={64}
                  alt="mask top"
                  priority
                />
                <Image
                  className="absolute bottom-0 left-0 rotate-180 max-w-[100px] sm:max-w-[120px] lg:max-w-[136px] w-full pointer-events-none"
                  src="/mask.svg"
                  width={64}
                  height={64}
                  alt="mask bottom"
                  priority
                />
              </div>
            ))}
          </div>

          {/* Dots Column */}
          <div className="absolute md:static -left-7 sm:left-5 md:flex flex-col items-center justify-center shrink-0 z-20">
            {[...Array(totalDots)].map((_, i) => {
              const dotIndex = i + 1;
              const isActive = getIsActive(dotIndex);

              return (
                <div key={i} className="flex flex-col items-center relative">
                  <div
                    id={`dot-${dotIndex}`}
                    className={`lg:h-[43px] lg:w-[43px] h-[30px] w-[30px] rounded-full relative transition-colors duration-300 ${
                      isActive ? "bg-pink-500" : "bg-[#585561]"
                    }`}
                  >
                    <div
                      className={`absolute top-1/2 left-1/2 w-[14px] h-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 ease-out ${
                        isActive ? "bg-white scale-100" : "bg-white scale-75"
                      }`}
                    />
                  </div>

                  {i < totalDots - 1 && (
                    <div
                      id={`line-${dotIndex}`}
                      className={`w-[4px] lg:h-[40px] md:h-[50px] h-[100px] sm:h-[120px] transition-colors duration-300 ${
                        isActive ? "bg-pink-500" : "bg-white"
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
          <div className="flex flex-col space-y-10 sm:space-y-14 md:space-y-12 w-full md:w-[480px] xl:w-[514px] mt-4 md:mt-20 px-5 md:px-0">
            {milestonesRight.map((item, idx) => (
              <div
                key={idx}
                className="w-full h-[90px] sm:h-[100px] xl:h-[120px] relative bg-[url(/preview-banner.png)] bg-center bg-cover bg-no-repeat text-white rounded-[24px] sm:rounded-[32px] md:rounded-[39px] px-8 py-4 sm:py-6 flex items-center justify-start gap-3 sm:gap-4"
              >
                {idx !== milestonesRight.length - 1 && (
                  <div className="absolute -right-2 sm:-right-5 md:top-3 lg:top-2 xl:top-0 md:-right-7 xl:-right-14 bg-[radial-gradient(circle,_#F5B201,_#F9C301)] h-[90px] sm:h-[105px] md:h-[90px] xl:h-[121px] w-[90px] sm:w-[105px] md:w-[90px] xl:w-[121px] rounded-full shadow-[0_4px_50px_#00000040]">
                    <Image
                      src={item.icon}
                      height={90}
                      width={60}
                      alt={item.league}
                      className="h-[100px] object-contain sm:h-[120px] xl:h-[137px] z-10 w-[60px] sm:w-[55px] xl:w-[74px] absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-center gap-1 sm:gap-2 text-center sm:pl-14 lg:pl-0 z-10">
                  <h4
                    className={`${zenDots.className} text-[12px] sm:text-[18px] xl:text-[28px] lg:font-bold`}
                  >
                    {item.league} -
                  </h4>
                  <span className="text-[12px] sm:text-[18px] xl:text-[28px] mt-1 sm:mt-0">
                    {item.mau}
                  </span>
                </div>

                <Image
                  className="absolute top-0 right-0 max-w-[100px] sm:max-w-[120px] lg:max-w-[136px] w-full pointer-events-none"
                  src="/mask.svg"
                  width={64}
                  height={64}
                  alt="mask top"
                  priority
                />
                <Image
                  className="absolute bottom-0 left-0 rotate-180 max-w-[100px] sm:max-w-[120px] lg:max-w-[136px] w-full pointer-events-none"
                  src="/mask.svg"
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
  );
}
