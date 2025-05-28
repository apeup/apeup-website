"use client";
import { useEffect, useState } from "react";
import { client } from '@/sanity/lib/client';
import Image from "next/image";
import { zenDots } from "../fonts";
import { motion } from "framer-motion";

// DashedLine remains unchanged
function DashedLine({ index }: { index: number }) {
  const baseHeights = [
    "h-[7.5rem] sm:h-[5rem] md:h-[4rem] lg:h-[7.5rem] xl:h-[6.9rem]",
    "h-8 sm:h-10 md:h-7 lg:h-12",
    "h-8 sm:h-8 md:h-7 lg:h-12",
    "h-8 sm:h-8 md:h-7 lg:h-12",
  ];
  const classes = baseHeights[index] || "h-8 sm:h-8 md:h-10 lg:h-12";
  return <div className={`border-l border-dashed border-white ${classes} mt-[-4px]`} />;
}

export default function Preview() {
  const points = [
    "A daily&weekly leaderboards Where you Compete on the global",
    "Gym mining area",
    "Spin wheel",
    "Slot machine",
    "Mini Airdrops the higher your rank, the bigger payout",
  ];

  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "video"][0]{"videoUrl": videoFile.asset->url}`)
      .then((data) => setVideoUrl(data.videoUrl));
  }, []);

  return (
    <section className="relative py-10 md:py-20">
      <Image src="/blur.png" height={100} width={100} alt="blur" className="absolute z-50 -top-20 w-full h-[150px]" />

      <Image
        src="/preview-yellow.png"
        alt="yellow"
        className="absolute left-0 top-0 z-10 h-full w-[30%] sm:w-[20%] object-cover"
        height={100}
        width={100}
      />

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/preview_bg.png')] bg-cover bg-no-repeat bg-center" />
        <div className="absolute inset-0 bg-black opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -bottom-20 z-10 w-full max-h-[150px]"
        >
          <Image className="object-cover w-full h-auto" src="/blur.png" height={150} width={1920} alt="blur" />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-[1410px] mx-auto px-6 sm:px-6 sm:py-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-[32px] sm:text-[44px] md:text-[54px] xl:text-[74px] font-semibold mb-8 text-center text-white ${zenDots.className}`}
          style={{ textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C" }}
        >
          Immersive Game Preview:
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-20">
          {/* Video from Sanity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-[80%] flex justify-center"
          >
            {videoUrl && (
              <video
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-[100%] md:w-[85%] h-auto justify-center items-center object-cover max-h-[562px] rounded-[24px] sm:rounded-[32px] md:rounded-[39px]"
              />
            )}
          </motion.div>

          {/* Points content box remains unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full sm:w-[80%] md:w-[70%] bg-[url(/preview-banner.png)] bg-cover bg-center max-h-[560px] max-w-[643px] bg-no-repeat rounded-[24px] sm:rounded-[32px] md:rounded-[39px] flex items-center justify-center px-4 sm:px-10 py-8 sm:py-20 lg:px-15 text-center overflow-hidden"
          >
            <Image
              className="absolute z-10 top-0 right-0 max-w-[204px] w-32 sm:w-40 md:w-full"
              src="/mask.png"
              width={120}
              height={80}
              alt="mask"
            />
            <Image
              className="absolute z-10 bottom-0 left-0 max-w-[204px] rotate-180 w-32 sm:w-40 md:w-full"
              src="/mask.png"
              width={120}
              height={80}
              alt="mask"
            />
            <div className="flex flex-col z-20 text-left w-full max-h-full overflow-y-hidden">
              {points.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="flex flex-col items-center ">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm rounded-full z-10 bg-gradient-to-b from-yellow-400 to-orange-500 py-2 flex items-center justify-center font-bold text-white shadow-[inset_0px_2px_4px_rgba(255,255,255,0.3)] ${zenDots.className}`}
                      style={{
                        textShadow: "0 1px 0 rgba(255,255,255,0.4)",
                        marginBottom: "1px",
                      }}
                    >
                      {`0${i + 1}`}
                    </div>
                    {i !== points.length - 1 && <DashedLine index={i} />}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-white font-medium leading-snug ${zenDots.className} text-[16px] sm:text-[18px] lg:text-[22px] 2xl:text-[28px]`}>
                      {text}
                    </h4>
                    {i !== points.length - 1 && (
                      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-4 mb-4 sm:mt-4 sm:mb-2" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
