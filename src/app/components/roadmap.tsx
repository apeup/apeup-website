"use client";
import Image from "next/image";
import { inter, zenDots } from "../fonts";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="text-white bg-[#100C1D] bg-cover bg-no-repeat bg-center relative"
    >
      <div className="max-w-[1600px] mx-auto px-4 py-20">
        {/* Heading */}
        <div className="text-center">
          <h2
            className={`${zenDots.className} text-[28px] sm:text-[36px] md:text-[44px] xl:text-[54px] leading-tight`}
            style={{
              textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C",
            }}
          >
            Roadmap
          </h2>
          <p className={`mt-2 text-base sm:text-lg ${inter.className}`}>
            Gamified progress bar or milestone badges
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 flex flex-wrap justify-center gap-y-12 gap-x-6 lg:gap-x-0">
          {/* Step 1 */}
          <motion.div
            className="flex flex-col items-center text-center w-full xs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-1/5"
            {...fadeUp}
            viewport={{ once: true }}
          >
            <Image className="w-[50px] sm:w-[70px]" src="/roadmap-1.svg" width={70} height={70} alt="roadmap-1" />
            <h4 className={`${zenDots.className} md:text-[28px] text-[22px] mt-3`}>Now</h4>
            <p className={`sm:text-base text-sm max-w-[220px] mt-1 ${inter.className}`}>
              Beta Launch & Community Growth
            </p>
          </motion.div>

          {/* Line 1 */}
          <div className="hidden md:flex items-center justify-center w-[60px]">
            <Image src="/roadmap-line.png" width={70} height={70} alt="roadmap-line" />
          </div>

          {/* Step 2 */}
          <motion.div
            className="flex flex-col items-center text-center w-full xs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-1/5"
            {...fadeUp}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image className="w-[50px] sm:w-[70px]" src="/roadmap-2.svg" width={70} height={70} alt="roadmap-2" />
            <h4 className={`${zenDots.className} text-[28px] mt-3`}>Next</h4>
            <p className={`sm:text-base text-sm max-w-[220px] mt-1 ${inter.className}`}>
              Play-to-Earn Rewards + NFT Sales
            </p>
          </motion.div>

          {/* Line 2 */}
          <div className="hidden lg:flex items-center justify-center w-[60px]">
            <Image src="/roadmap-line.png" width={70} height={70} alt="roadmap-line" />
          </div>

          {/* Step 3 */}
          <motion.div
            className="flex flex-col items-center text-center w-full xs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-1/5"
            {...fadeUp}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image className="w-[50px] sm:w-[70px]" src="/roadmap-3.svg" width={70} height={70} alt="roadmap-3" />
            <h4 className={`${zenDots.className} text-[28px] mt-3`}>Soon</h4>
            <p className={`sm:text-base text-sm max-w-[220px] mt-1 ${inter.className}`}>
              Full ApeUp Ecosystem
            </p>
          </motion.div>

          {/* Line 3 */}
          <div className="hidden md:flex items-center justify-center w-[60px]">
            <Image src="/roadmap-line.png" width={70} height={70} alt="roadmap-line" />
          </div>

          {/* Step 4 */}
          <motion.div
            className="flex flex-col items-center text-center w-full xs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-1/5"
            {...fadeUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image className="w-[50px] sm:w-[70px]" src="/roadmap-4.svg" width={70} height={70} alt="roadmap-4" />
            <h4 className={`${zenDots.className} text-[28px] mt-3`}>Future</h4>
            <p className={`sm:text-base text-sm max-w-[220px] mt-1 ${inter.className}`}>
              New Game Titles, Airdrops, Marketplace
            </p>
          </motion.div>
        </div>

        {/* Milestones title */}
        <h2
          className={`${zenDots.className} text-center text-[28px] sm:text-[36px] md:text-[44px] xl:text-[54px] leading-tight mt-20 sm:mt-24`}
          style={{
            textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C",
          }}
        >
          League Milestones - MAU Unlocks
        </h2>
      </div>
    </section>
  );
}
