"use client"
import Image from "next/image";
import { inter, zenDots } from "../fonts";
import { motion } from "framer-motion";

export default function Banner() {
    return (
        <section className="relative bg-[url('/banner-bg.png')] bg-cover bg-[position:75%_center] h-[500px] md:h-[105dvh] w-full overflow-hidden">
            {/* Main content */}
            <div className="relative z-20 flex flex-col justify-center text-center md:text-left mt-10 md:mt-0 items-center h-full text-white w-full px-4 sm:px-6 md:px-8 xl:px-0 max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="w-full max-w-[652px] mr-auto"
                >
                    <h2
                        className={`text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[74px] font-semibold leading-[120%] mt-16 sm:mt-24 mb-4 sm:mb-6 text-white ${zenDots.className}`}
                        style={{
                            textShadow: "0 0 20px #EB319C, 0 0 40px #EB319C",
                        }}
                    >
                        ApeUp - Play & Earn Game
                    </h2>

                    <h4 className={`${inter.className} font-medium text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] mt-1`}>
                        Jump. Tilt. Train. Earn.
                    </h4>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className={`${inter.className} relative text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-black py-[9.7px] px-[46px] bg-[radial-gradient(circle,_#F7EA00,_#FABA01)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFF36D,_#FFC933)] mt-8`}
                    >
                        Join Now
                        <Image
                            src="/btn.png"
                            alt="Button"
                            width={18}
                            height={20}
                            className="absolute top-1 left-0 w-[14px] sm:w-[16px] md:w-[18px]"
                        />
                        <Image
                            src="/btn.png"
                            alt="Button"
                            width={18}
                            height={20}
                            className="absolute top-1 right-0 rotate-180 w-[14px] sm:w-[16px] md:w-[18px]"
                        />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
