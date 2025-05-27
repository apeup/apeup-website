"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { inter } from "../fonts";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 overflow-x-hidden"
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
        <div className="flex-1 flex justify-end items-center space-x-4">
          <div className="hidden md:block">
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
            className="sm:hidden mt-2 w-11/12 max-w-xs mx-auto bg-black border border-white/20 rounded-xl px-6 py-4 text-white text-center text-xs space-y-3 z-40"
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
  );
}
