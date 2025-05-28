"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zenDots } from "../fonts";

const featureImages = [
  "/feature-1.png",
  "/feature-2.png",
  "/feature-3.png",
  "/feature-4.png",
  "/feature-5.png",
  "/feature-6.png",
];

export default function Features() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1);

  const sectionRef = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(5);
      else if (width >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleChange = (dir: number) => {
    if (animating) return; // prevent double-click
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev + dir + featureImages.length) % featureImages.length);
      setAnimating(false);
    }, 300); // matches the animation duration
  };

  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < visibleCount; i++) {
      images.push(featureImages[(startIndex + i) % featureImages.length]);
    }
    return images;
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[url('/about-bg.png')] bg-cover bg-no-repeat bg-center text-white relative overflow-hidden"
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 ml-auto relative z-10">
        {/* Header and Buttons */}
        <div className="flex flex-col md:flex-row justify-between max-w-[1347px] mx-auto items-center gap-6">
          <h2
            className={`${zenDots.className} text-[28px] sm:text-[36px] md:text-[44px] xl:text-[54px] text-center md:text-left leading-tight`}
            style={{
              textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C",
            }}
          >
            GameFlow Features
          </h2>

          <div className="flex gap-3 items-center">
            <button
              onClick={() => handleChange(-1)}
              className="bg-[radial-gradient(circle,_#F5B201,_#F9C301)] shadow-[0_4px_50px_#00000040] transition hover:bg-[radial-gradient(circle,_#FFD93B,_#FFB800)] rounded-full h-[40px] w-[40px] text-white text-lg"
            >
              ←
            </button>
            <button
              onClick={() => handleChange(1)}
              className="bg-[radial-gradient(circle,_#F5B201,_#F9C301)] shadow-[0_4px_50px_#00000040] transition hover:bg-[radial-gradient(circle,_#FFD93B,_#FFB800)] rounded-full h-[40px] w-[40px] text-white text-lg"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-21 overflow-hidden relative h-full">
          <AnimatePresence mode="wait">
            {!animating && (
              <motion.div
                key={startIndex}
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex gap-6 md:gap-8 justify-center lg:justify-start 2xl:justify-center"
              >
                {getVisibleImages().map((img, index) => (
                  <div
                    key={index}
                    className="
                      flex-shrink-0
                      w-[85vw] sm:w-[70vw] md:w-[42vw] lg:w-[30vw]
                      max-w-[386px] max-h-[548px] h-full
                      rounded-xl 
                      overflow-hidden
                    "
                  >
                    <Image
                      className="rounded-xl object-cover w-full h-full"
                      src={img}
                      width={600}
                      height={800}
                      alt={`feature ${index + 1}`}
                      priority={index === 0}
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
