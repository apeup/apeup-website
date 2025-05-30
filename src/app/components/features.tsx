"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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
  const [visibleCount, setVisibleCount] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [xOffset, setXOffset] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // For wheel scroll throttling and delta accumulation
  const scrollAccum = useRef(0);
  const scrollCooldown = useRef(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(5);
      else if (width >= 768) setVisibleCount(3);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const slideWidth = 386 + 32;

  const visibleSlides = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleSlides.push(featureImages[(startIndex + i) % featureImages.length]);
  }

  const handleChange = (direction: 1 | -1) => {
    if (animating) return;
    setAnimating(true);

    setXOffset(-direction * slideWidth);

    setTimeout(() => {
      setStartIndex((prev) => (prev + direction + featureImages.length) % featureImages.length);
      setXOffset(0);
      setAnimating(false);
    }, 700);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      !animating
    ) {
      const diff = touchStartX.current - touchEndX.current;
      const swipeThreshold = 50;
      if (diff > swipeThreshold) {
        handleChange(1);
      } else if (diff < -swipeThreshold) {
        handleChange(-1);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (animating || scrollCooldown.current) return;

    // Only respond to horizontal scroll mostly
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 5) {
      scrollAccum.current += e.deltaX;

      const threshold = 100; // Adjust this to control sensitivity

      if (scrollAccum.current >= threshold) {
        // Scroll right -> next slide
        scrollCooldown.current = true;
        handleChange(1);
        scrollAccum.current = 0;

        setTimeout(() => {
          scrollCooldown.current = false;
        }, 700);
      } else if (scrollAccum.current <= -threshold) {
        // Scroll left -> previous slide
        scrollCooldown.current = true;
        handleChange(-1);
        scrollAccum.current = 0;

        setTimeout(() => {
          scrollCooldown.current = false;
        }, 1);
      }
    }
  };

  return (
    <section
      className="bg-[url('/features-bg.png')] bg-cover bg-no-repeat bg-center text-white relative overflow-hidden"
    >
      <Image
        src="/features-purple.png"
        width={100}
        height={100}
        alt="yellow"
        className="absolute z-10 -top-[220px] h-full w-[100px] sm:w-[350px] left-0"
      />
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-16 ml-auto relative z-10">
        {/* Header and Buttons */}
        <div className="flex flex-col md:flex-row justify-between max-w-[1347px] mx-auto items-center gap-6">
          <h2
            className={`${zenDots.className} text-[28px] lg:text-[36px] xl:text-[44px] 2xl:text-[54px] text-center md:text-left leading-tight`}
            style={{
              textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C",
            }}
          >
            GameFlow Features
          </h2>

          <div className="flex gap-3 items-center">
            <button
              onClick={() => handleChange(-1)}
              disabled={animating}
              className={`bg-[radial-gradient(circle,_#F5B201,_#F9C301)] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:bg-[radial-gradient(circle,_#FFD93B,_#FFB800)] rounded-full h-[30px] w-[30px] xl:h-[40px] xl:w-[40px] text-white text-lg ${animating ? "cursor-not-allowed opacity-50" : ""
                }`}
              style={{
                boxShadow:
                  "inset 0 -5px 0 rgba(250, 94, 7, 0.4), 0 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              ←
            </button>
            <button
              onClick={() => handleChange(1)}
              disabled={animating}
              className={`bg-[radial-gradient(circle,_#F5B201,_#F9C301)] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:bg-[radial-gradient(circle,_#FFD93B,_#FFB800)] rounded-full h-[30px] w-[30px] xl:h-[40px] xl:w-[40px] text-white text-lg ${animating ? "cursor-not-allowed opacity-50" : ""
                }`}
              style={{
                boxShadow:
                  "inset 0 -5px 0 rgba(250, 94, 7, 0.4), 0 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="md:mt-15 mt-10 relative h-full overflow-hidden max-w-full mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <motion.div
            className="flex gap-6 md:gap-8 justify-center lg:justify-start"
            style={{
              translateX: xOffset,
              transition: animating ? "transform 0.7s ease-in-out" : "none",
            }}
          >
            {visibleSlides.map((img, i) => (
              <div
                key={i}
                className="
                  flex-shrink-0
                  w-[85vw] sm:w-[70vw] md:w-[26vw] lg:w-[22vw] xl:w-[20vw] 2xl:w-[30vw]
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
                  alt={`feature ${i + 1}`}
                  priority={i === 0}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
