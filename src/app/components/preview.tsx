"use client";
import { useEffect, useState } from "react";
import { client } from '@/sanity/lib/client';
import { zenDots } from "../fonts";
import { motion } from "framer-motion";
import { getPreviewData } from "@/sanity/lib/queries";
import Loader from "./loader";

// DashedLine remains unchanged
function DashedLine({ index }: { index: number }) {
  const baseHeights = [
    "h-[5.4rem] sm:h-[5rem] md:h-[5rem] lg:h-[5.5rem] xl:h-[3.3rem] 2xl:h-[7.3rem]",
    "h-8 sm:h-10 md:h-6 lg:h-8 xl:h-8 2xl:h-12",
    "h-8 sm:h-8 md:h-7 lg:h-8 xl:h-8 2xl:h-12",
    "h-8 sm:h-8 md:h-7 lg:h-8 xl:h-8 2xl:h-12",
  ];
  const classes = baseHeights[index] || "h-8 sm:h-8 md:h-10 lg:h-12";
  return <div className={`border-l border-dashed border-white ${classes} mt-[-4px]`} />;
}

type PreviewData = {
  Title: string;
  mobVideoUrl?: string;
  desVideoUrl?: string;
  point1?: string;
  point2?: string;
  point3?: string;
  point4?: string;
  point5?: string;
};

export default function Preview() {
  const [preview, setPreview] = useState<PreviewData | null>(null);

  useEffect(() => {
    client.fetch(getPreviewData()).then((data: PreviewData) => setPreview(data));
  }, []);
  if (!preview) return <Loader/>

  const points = [
    preview.point1,
    preview.point2,
    preview.point3,
    preview.point4,
    preview.point5,
  ];

  
  return (
    <section className="relative py-20 xl:pb-28 md:py-20 xl:px-20">
      <img src="/blur.png" height={100} width={100} alt="blur" className="absolute z-50 -top-30 w-full left-0 h-[250px]" />

      <img
        src="/preview-yellow.png"
        alt="yellow"
        className="absolute left-0 top-0 z-10 h-full w-[30%] sm:w-[20%] object-cover"
        height={100}
        width={100}
      />

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 preview-background" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -bottom-20 z-10 w-full max-h-[150px]"
        >
        </motion.div>
      </div>

      <div className="relative z-20 max-w-[1410px] mx-auto px-6 sm:px-6 sm:py-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-[28px] lg:text-[35px] 2xl:text-[74px] font-semibold mb-8 text-center text-white ${zenDots.className}`}
          style={{ textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C" }}
        >
          {preview.Title}
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 lg:mr-10 xl:mr-0">
          {/* Video from Sanity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full xl:w-[80%] lg:w-[70%] sm:w-[70%] flex justify-center"
          >

            {/* video for desktop */}
            {preview.desVideoUrl && (
              <video
                src={preview.desVideoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-[100%] md:w-[85%] 2xl:w-[80%] h-auto md:max-h-[350px] lg:max-h-[400px] xl:max-h-[440px] 2xl:max-h-[562px] justify-center items-center object-cover max-h-[362px] rounded-[24px] sm:rounded-[32px] md:rounded-[39px]"
              />
            )}
          </motion.div>

          {/* Points content box remains unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full sm:w-[70%] md:w-[70%] lg:w-[55%] xl:w-[70%] bg-[url(/preview-banner.png)] bg-cover bg-center max-h-[400px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-[560px] max-w-[643px] bg-no-repeat rounded-[24px] sm:rounded-[28px] lg:rounded-[30px] flex items-center justify-center px-4 sm:px-10 py-8 sm:py-20 md:py-10 lg:px-15 xl:p-15 2xl:py-20 2xl:px-15 text-center overflow-hidden"
          >
            <img
              className="absolute z-10 top-0 right-0 max-w-[204px] w-32 lg:w-40 xl:w-full"
              src="/mask.svg"
              width={120}
              height={80}
              alt="mask"
            />
            <img
              className="absolute z-10 bottom-0 left-0 max-w-[204px] w-32 lg:w-40 xl:w-full"
              src="/bottom-mask.svg"
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
                      className={`w-7 h-7 lg:w-8 lg:h-8 text-[10px] lg:text-sm rounded-full z-10 bg-[radial-gradient(circle,_#F5B201,_#F9C301)] shadow-[0_4px_50px_#00000040] py-2 flex items-center justify-center font-bold text-white ${zenDots.className}`}
                      style={{
                        boxShadow: 'inset 0 -5px 0 rgba(250, 94, 7, 0.4), 0 4px 4px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      {`0${i + 1}`}
                    </div>
                    {i !== points.length - 1 && <DashedLine index={i} />}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-white font-medium leading-snug ${zenDots.className} text-[14px] lg:text-[16px] 2xl:text-[28px]`}>
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
