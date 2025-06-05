"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { inter, zenDots } from "../fonts";
import { client } from "@/sanity/lib/client";
import { getHomeData } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Loader from "./loader";

type HomeData = {
  logo: { asset: { url: string } };
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  href1: string;
  href2: string;
  href3: string;
  href4: string;
  buttonText: string;
  heroTitle: string;
  heroSubTitle: string;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [home , setHome] = useState<HomeData | null>(null);

  useEffect(() => {
    const query = client.fetch(getHomeData())
    query.then((data) => setHome(data))
  }, []);
  if (!home) return <Loader/>
  return (
    <div className="header-background py-1 h-[500px] sm:h-[105dvh] w-full">
      <motion.header
        className=""
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative w-full max-w-[1360px] mx-auto mt-3 px-4 xs:px-4 sm:px-6 lg:px-20 xl:px-20 py-3 text-white flex items-center">
          {/* Logo */}
          <div className="flex-1 md:max-w-[100px] lg:max-w-[110px] 2xl:max-w-[138px]">
              <img
                src="/logo.svg"
                alt="Logo"
                width={138}
                height={0}
                className="h-auto w-[100px] md:w-[138px]"
              />
          </div>

          {/* Centered Navigation */}
          <nav
            className={`hidden sm:flex absolute left-1/2 -translate-x-1/2 space-x-6 md:space-x-8 md:text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] font-medium ${inter.className}`}
          >
            <Link className="hover:text-[#F8B947]" href={home.href1}>
              {home.link1}
            </Link>
            <Link className="hover:text-[#F8B947]" href={home.href2}>
              {home.link2}
            </Link>
            <Link className="hover:text-[#F8B947]" href={home.href3}>
              {home.link3}
            </Link>
            <Link className="hover:text-[#F8B947]" href={home.href4}>
              {home.link4}
            </Link>
          </nav>

          {/* Right Side: Button and Mobile Menu */}
          <div className="flex-1 flex justify-end items-center space-x-8 sm:space-x-0">
            <div className="hidden sm:block">
              <button
                className={`${inter.className} cursor-pointer relative font-semibold text-[14px] xl:text-[16px] text-black py-[5px] px-[25px] lg:py-[7px] lg:px-[35px] 2xl:py-[9.7px] 2xl:px-[46px] bg-[radial-gradient(circle,_#F7EA00,_#FABA01)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFF36D,_#FFC933)]`}
              >
                {home.buttonText}
                <img
                  src="/btn.png"
                  alt="Button"
                  width={18}
                  height={20}
                  className="absolute top-1 xl:w-[18px] lg:h-auto w-[16px] h-[25px] left-0"
                />
                <img
                  src="/btn.png"
                  alt="Button"
                  width={18}
                  height={20}
                  className="absolute top-1 right-0 xl:w-[18px] lg:h-auto w-[16px] h-[25px] rotate-180"
                />
              </button>{/* Mobile Menu Toggle */}
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="sm:hidden flex items-center justify-center p-2 rounded-full text-white shadow-[0_4px_30px_#00000040] transition-all duration-300 ease-in-out bg-[radial-gradient(circle,_#F7EA00,_#FABA01)] hover:bg-[radial-gradient(circle,_#FFF36D,_#FFC933)] focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="sm:hidden flex items-center justify-center px-2 py-2 -translate-x-3 text-black bg-[radial-gradient(circle,_#F7EA00,_#FABA01)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFF36D,_#FFC933)]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

          <button
            className={`${inter.className} cursor-pointer sm:hidden relative text-[16px] text-black px-4 py-2 bg-[radial-gradient(circle,_#F7EA00,_#FABA01)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFF36D,_#FFC933)]`}
          >
            {home.buttonText}
            <img
              src="/btn.png"
              alt="Button"
              width={15}
              height={18}
              className="absolute top-1 left-0"
            />
            <img
              src="/btn.png"
              alt="Button"
              width={15}
              height={18}
              className="absolute top-1 right-0 rotate-180"
            />
          </button>
        </div>



        {/* Mobile Dropdown Menu - absolutely positioned */}
        <div className="relative">
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-1/2 -translate-x-1/2 sm:hidden mt-3 w-11/12 max-w-xs bg-black/80 border border-white/10 backdrop-blur-md rounded-xl px-6 py-5 text-white text-left text-sm space-y-4 shadow-lg z-40"
              >
                {[
                  { label: home.link1, href: home.href1 },
                  { label: home.link2, href: home.href2 },
                  { label: home.link3, href: home.href3 },
                  { label: home.link4, href: home.href4 },
                ].map((item, index) => (
                  <div key={item.href}>
                    <Link
                      className="block hover:text-[#F8B947] transition-colors duration-200"
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {index < 3 && (
                      <div className="w-full h-px bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 my-3 opacity-70" />
                    )}
                  </div>
                ))}
              </motion.div>

            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative lg:mt-8 sm:mt-50 md:mt-10 sm:px-10 md:px-0 mt-20 xl:px-20 xl:mt-10 2xl:mt-50">
        <div className="relative z-20 flex flex-col justify-center text-center md:text-left mt-10 md:mt-0 items-center h-full text-white w-full px-4 sm:px-6 md:px-8 lg:px-20 xl:px-0 max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full max-w-[652px] md:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[700px] mr-auto"
          >
            <h2
              className={`text-[32px] lg:text-[35px] xl:text-[45px] 2xl:text-[74px] font-semibold leading-[120%] mt-16 sm:mt-24 mb-4 sm:mb-4 text-white ${zenDots.className}`}
              style={{
                textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C",
              }}
            >
              {home.heroTitle}
            </h2>

            <h4
              className={`${inter.className} font-medium text-[18px] sm:text-[18px] xl:text-[24px] 2xl:text-[28px] mt-1`}
            >
              {home.heroSubTitle}
            </h4>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className={`${inter.className} cursor-pointer relative xl:text-[16px] sm:text-[13px] font-semibold text-black py-[7px] px-[35px] 2xl:py-[9.7px] 2xl:px-[46px] bg-[radial-gradient(circle,_#F7EA00,_#FABA01)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFF36D,_#FFC933)] mt-10`}
            >
              {home.buttonText}
              <img
                src="/btn.png"
                alt="Button"
                width={18}
                height={20}
                className="absolute top-1 left-0 w-[14px] xl:w-[18px]"
              />
              <img
                src="/btn.png"
                alt="Button"
                width={18}
                height={20}
                className="absolute top-1 right-0 rotate-180 w-[14px] xl:w-[18px]"
              />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
