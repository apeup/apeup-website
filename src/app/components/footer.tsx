import Image from "next/image";
import Link from "next/link";
import { inter } from "../fonts";

export default function Footer() {
  return (
    <footer id="socials" className="bg-[url('/footer-bg.png')] bg-cover bg-no-repeat bg-center pt-10 pb-4">
      <div className="max-w-[1500px] mx-auto px-5">
        {/* Top row: nav, logo, button */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-0">
          {/* Navigation Links */}
          <nav aria-label="Footer navigation" className="flex justify-center md:justify-start">
            <ul className="flex flex-col md:flex-row gap-4 text-white text-[16px] lg:text-[18px] font-medium text-center justify-center md:justify-start">
              <li><Link className="hover:text-[#F8B947]" href="/#home">Home</Link></li>
              <li><Link className="hover:text-[#F8B947]" href="/#about">About</Link></li>
              <li><Link className="hover:text-[#F8B947]" href="/#roadmap">Roadmap</Link></li>
              <li><Link className="hover:text-[#F8B947]" href="/#socials">Socials</Link></li>
            </ul>
          </nav>

          {/* Logo in the Center */}
          <div className="flex justify-center">
            <div className="w-[160px] lg:w-[222px]">
              <Image
                src="/logo.png"
                width={222}
                height={150}
                alt="Logo"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Button on Right */}
          <div className="flex justify-center md:justify-end">
            <button
              className={`${inter.className} relative font-semibold text-[14px] lg:text-[16px] text-black lg:py-[9.7px] lg:px-[35px] py-[8px] px-[28px] bg-[radial-gradient(circle,_#F7EA00,_#FABA01)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFF36D,_#FFC933)]`}
            >
              Join the ApeUp
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
        </div>

        {/* Footer line */}
        <div className="mt-8">
          <Image
            className="w-full h-[0.9]"
            src="/footer-line.png"
            width={100}
            height={2}
            alt="Footer Line"
            priority
          />
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4 md:gap-0">
          <p className="text-white text-[14px] lg:text-[18px] text-center md:text-left">
            © 2025 Ape Up. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            {[...Array(4)].map((_, i) => (
              <Link key={i} href="/#" className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={i === 0 ? "0 0 512 512" : i === 1 ? "0 0 496 512" : "0 0 576 512"}
                  className="w-6 h-6 lg:w-8 lg:h-8 hover:scale-110 transition-transform duration-200"
                >
                  <defs>
                    <radialGradient id={`grad-${i}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#F5B201" />
                      <stop offset="100%" stopColor="#F9C301" />
                    </radialGradient>
                  </defs>
                  <path
                    fill={`url(#grad-${i})`}
                    d={
                      i === 0
                        ? "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                        : i === 1
                        ? "M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
                        : i === 2
                        ? "M288 64C64 64 0 160 0 272S80 448 176 448l8.4 0c24.2 0 46.4-13.7 57.2-35.4l23.2-46.3c4.4-8.8 13.3-14.3 23.2-14.3s18.8 5.5 23.2 14.3l23.2 46.3c10.8 21.7 33 35.4 57.2 35.4l8.4 0c96 0 176-64 176-176s-64-208-288-208zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm320-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        : "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                    }
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
      d5rt67y8u9ikolp
    </footer>
  );
}
