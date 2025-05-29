"use client";
import Image from "next/image";
import { useState } from "react";
import { zenDots } from "../fonts";
import { inter } from "../fonts";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Community-first",
    description: "Players vote, shape development, and drive the ecosystem forward.",
    icon: "/community.svg",
  },
  {
    title: "Earn Rewards",
    description: "Play and mine real crypto rewards through skill and activity.",
    icon: "/profit.svg",
  },
  {
    title: "Player Driven",
    description: "Built by players, for players. Every decision is community-powered.",
    icon: "/community.svg",
  },
  {
    title: "Cross-Platform",
    description: "Play seamlessly across mobile and future desktop support.",
    icon: "/profit.svg",
  },
];

export default function About() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? features.length - 2 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 2 >= features.length ? 0 : prev + 1));
  };

  return (
    <section
      id="about"
      className="bg-[url('/about-bg.png')] bg-cover bg-no-repeat py-10 px-4 sm:px-8 md:px-12 relative"
    >
      <Image
        src="/features-purple.png"
        width={100}
        height={100}
        alt="yellow"
        className="absolute z-10 -bottom-[100px] h-full w-[100px] sm:w-[150px] md:w-[600px] left-0"
      />
      <Image
        className="absolute lg:-bottom-10 bottom-0 left-0 z-10 lg:w-[250px] xl:w-[170px] 2xl:w-[250px] h-auto w-[150px] hidden md:block lg:hidden xl:block"
        src="/hill.png"
        height={100}
        width={100}
        alt="hill"
      />
      <Image
        className="absolute top-0 right-0 w-[500px] h-auto z-0"
        src="/purple.png"
        height={100}
        width={100}
        alt="yellow"
      />
      <Image
        className="absolute bottom-20 right-0 w-[200px] h-auto z-0"
        src="/banana.png"
        height={100}
        width={100}
        alt="yellow"
      />

      <div className="max-w-[1440px] 2xl:h-[70dvh] mx-auto flex flex-col lg:flex-row justify-center xl:px-10 lg:gap-30 lg:mr-25 xl:mr-20 2xl:mr-auto xl:gap-30 2xl:gap-10 items-center md:mt-10 gap-10">
        <div className="flex-1 w-full max-w-lg lg:max-w-none">
          <div className="text-white text-center 2xl:text-left xl:max-w-[592px] max-w-[500px] mx-auto 2xl:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`text-[32px] sm:text-[40px] md:text-[48px] xl:text-[54px] ${zenDots.className}`}
              style={{ textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C" }}
            >
              About the Game
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`text-[18px] md:font-medium ${inter.className} mt-4`}
            >
              ApeUp is a community-driven Play & Earn mobile game where you
              control your Ape to jump, train and mine real crypto rewards.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`text-[18px] md:font-medium mt-5 ${inter.className}`}
            >
              We built ApeUp to ApeUp the industry — pushing beyond the limited
              experiences of previous Telegram mini-apps. This game was created
              by players, for players.
            </motion.p>
          </div>

          <div className="">
            <div className="bg-[url(/about-banner.svg)] z-40 bg-cover bg-center bg-no-repeat rounded-3xl mt-8 lg:p-15 p-7 relative overflow-visible max-w-[500px] xl:max-w-[700px] 2xl:w-[779px] w-full h-full mx-auto">
              <Image className="absolute z-10 top-0 right-0" src="/mask.png" width={150} height={100} alt="mask" />
              <Image className="absolute z-10 bottom-0 left-0 rotate-180" src="/mask.png" width={150} height={100} alt="mask" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex flex-col md:flex-row justify-between items-start gap-6"
                >
                  {features.slice(index, index + 2).map((feature, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-start text-left w-[350px] sm:w-[280px] md:w-[300px] pr-20 sm:pr-0"
                    >
                      <Image
                        src={feature.icon}
                        width={30}
                        height={30}
                        alt="Feature Icon"
                        className="mb-2 w-[37px]"
                      />
                      <h4
                        className={`text-[22px] sm:text-[24px] lg:text-[28px] font-semibold mb-1 ${zenDots.className} text-white`}
                      >
                        {feature.title}
                      </h4>
                      <p
                        className={`text-[14px] sm:text-[15px] lg:text-[16px] text-white ${inter.className}`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>


              <div className="flex justify-center mt-8 gap-6 absolute -bottom-5 z-30 left-1/2 transform -translate-x-1/2">
                <button onClick={prevSlide} className="bg-[radial-gradient(circle,_#F5B201,_#F9C301)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFD93B,_#FFB800)] rounded-full h-[37px] w-[37px] text-white" aria-label="Previous" style={{ boxShadow: 'inset 0 -5px 0 rgba(250, 94, 7, 0.4), 0 4px 4px rgba(0, 0, 0, 0.25)' }}>
                  ←
                </button>
                <button onClick={nextSlide} className="bg-[radial-gradient(circle,_#F5B201,_#F9C301)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFD93B,_#FFB800)] rounded-full h-[37px] w-[37px] text-white" aria-label="Next" style={{ boxShadow: 'inset 0 -5px 0 rgba(250, 94, 7, 0.4), 0 4px 4px rgba(0, 0, 0, 0.25)' }}>
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-row items-center gap-4 flex-1 z-10 justify-center w-[50%] mx-auto max-w-[280px] lg:max-w-[200px] xl:max-w-[400px] 2xl:max-w-none"
        >
          <Image src="/lucky.png" width={250} height={250} alt="Lucky Wheel" className="rounded-xl w-full max-w-[88%] lg:max-w-[257px] h-auto mt-20" />
          <Image src="/spin.png" width={180} height={180} alt="Spin Wheel" className="rounded-xl w-full max-w-[88%] lg:max-w-[257px]" />
        </motion.div>
      </div>
    </section>
  );
}
