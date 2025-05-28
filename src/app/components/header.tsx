"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { inter, zenDots } from "../fonts";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[url('/banner-bg.png')] bg-cover bg-[position:75%_center] h-[500px] sm:h-[105dvh] w-full overflow-hidden">
      <motion.header
        className="sticky top-1 z-50 overflow-x-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative w-full max-w-[1360px] mx-auto mt-2 px-4 xs:px-4 sm:px-6 lg:px-20 xl:pr-0 py-3 text-white flex items-center overflow-hidden">
          {/* Logo */}
          <div className="flex-1 max-w-[100px] md:max-w-[138px]">
            <Link href="/#home">
              <Image
                src="/logo.png"
                alt="Logo"
                width={138}
                height={0}
                className="h-auto w-[100px] md:w-[138px]"
                priority
              />
            </Link>
          </div>

          {/* Centered Navigation */}
          <nav
            className={`hidden sm:flex absolute left-1/2 -translate-x-1/2 space-x-6 md:space-x-8 text-[14px] lg:text-[16px] font-medium ${inter.className}`}
          >
            <Link className="hover:text-[#F8B947]" href="/#home">
              Home
            </Link>
            <Link className="hover:text-[#F8B947]" href="/#about">
              About
            </Link>
            <Link className="hover:text-[#F8B947]" href="/#roadmap">
              Roadmap
            </Link>
            <Link className="hover:text-[#F8B947]" href="/#socials">
              Socials
            </Link>
          </nav>

          {/* Right Side: Button and Mobile Menu */}
          <div className="flex-1 flex justify-end items-center space-x-8 sm:space-x-0">
            <div className="hidden sm:block">
              <button
                className={`${inter.className} relative font-semibold text-[16px] text-black lg:py-[9.7px] lg:px-[45px] py-[8px] px-[34px] bg-[radial-gradient(circle,_#F7EA00,_#FABA01)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFF36D,_#FFC933)]`}
              >
                Join Now
                <Image
                  src="/btn.png"
                  alt="Button"
                  width={18}
                  height={20}
                  className="absolute top-1 left-0"
                />
                <Image
                  src="/btn.png"
                  alt="Button"
                  width={18}
                  height={20}
                  className="absolute top-1 right-0 rotate-180"
                />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="sm:hidden text-white shrink-0 pr-2 sm:pr-0"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden fixed mt-2 w-11/12 max-w-xs mx-auto bg-black border border-white/20 rounded-xl px-6 py-4 text-white text-center text-xs space-y-3 z-40"
            >
              <Link
                className="block hover:text-[#F8B947]"
                href="/#home"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className="block hover:text-[#F8B947]"
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className="block hover:text-[#F8B947]"
                href="/#roadmap"
                onClick={() => setIsMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Link
                className="block hover:text-[#F8B947]"
                href="/#socials"
                onClick={() => setIsMenuOpen(false)}
              >
                Socials
              </Link>
              <button
                className={`${inter.className} relative font-semibold text-[16px] text-black w-full py-[9.7px] px-[46px] bg-[radial-gradient(circle,_#F7EA00,_#FABA01)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFF36D,_#FFC933)]`}
              >
                Join Now
                <Image
                  src="/btn.png"
                  alt="Button"
                  width={18}
                  height={18}
                  className="absolute top-1 left-0"
                />
                <Image
                  src="/btn.png"
                  alt="Button"
                  width={18}
                  height={18}
                  className="absolute top-1 right-0 rotate-180"
                />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <section className="relative lg:mt-[210px] sm:mt-50 sm:px-10 md:px-0 mt-20">
        {/* Main content */}
        <div className="relative z-20 flex flex-col justify-center text-center md:text-left mt-10 md:mt-0 items-center h-full text-white w-full px-4 sm:px-6 md:px-8 lg:px-20 xl:px-0 max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full max-w-[652px] mr-auto"
          >
            <h2
              className={`text-[32px] sm:text-[44px] md:text-[54px] xl:text-[74px] font-semibold leading-[120%] mt-16 sm:mt-24 mb-4 sm:mb-6 text-white ${zenDots.className}`}
              style={{
                textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C",
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
    </div>
  );
}