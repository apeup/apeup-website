"use client"
import Image from "next/image";
import Link from "next/link";
import { inter } from "../fonts";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { getFooterData } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type FooterData = {
  logo: string;
  linkUrl1: string;
  linkTitle1: string;
  linkUrl2: string;
  linkTitle2: string;
  linkUrl3: string;
  linkTitle3: string;
  linkUrl4: string;
  linkTitle4: string;
  buttonText: string;
  copyright: string;
};

export default function Footer() {
  const [footer, setFooter] = useState<FooterData | null>(null);

  useEffect(() => {
    const query = client.fetch(getFooterData())
    query.then((data) => setFooter(data))
  }, []);
  if (!footer) return null;
  return (
    <footer id="socials" className="bg-[url('/footer-bg.png')] bg-cover bg-no-repeat bg-center xl:px-20 2xl:pt-20 pt-10 pb-5">
      <div className="">
        {/* Top row: nav, logo, button */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mb-11 md:gap-0 max-w-[1400px] mx-auto px-5">
          {/* Navigation Links */}
          <nav aria-label="Footer navigation" className="flex justify-center md:justify-start">
            <ul className="flex flex-col md:flex-row gap-4 text-white text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium text-center justify-center md:justify-start">
              <li><Link className="hover:text-[#F8B947]" href={footer.linkUrl1}>{footer.linkTitle1}</Link></li>
              <li><Link className="hover:text-[#F8B947]" href={footer.linkUrl2}>{footer.linkTitle2}</Link></li>
              <li><Link className="hover:text-[#F8B947]" href={footer.linkUrl3}>{footer.linkTitle3}</Link></li>
              <li><Link className="hover:text-[#F8B947]" href={footer.linkUrl4}>{footer.linkTitle4}</Link></li>
            </ul>
          </nav>

          <div className="flex justify-center">
            <Image
              src={urlFor(footer.logo).width(500).auto('format').url()}
              width={222}
              height={150}
              alt="Logo"
              className="w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[222px] h-auto"
            />
          </div>

          {/* Button on Right */}
          <div className="flex justify-center md:justify-end">
            <button
              className={`${inter.className} relative font-semibold text-[12px] lg:text-[14px] 2xl:text-[16px] text-black lg:py-[9.7px] lg:px-[35px] py-[8px] px-[28px] bg-[radial-gradient(circle,_#F7EA00,_#FABA01)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFF36D,_#FFC933)]`}
            >
              {footer.buttonText}
              <Image
                src="/btn.png"
                alt="Button"
                width={18}
                height={20}
                className="absolute top-1 lg:w-[18px] lg:h-auto w-[15px] h-auto left-0"
              />
              <Image
                src="/btn.png"
                alt="Button"
                width={18}
                height={20}
                className="absolute top-1 right-0 lg:w-[18px] lg:h-auto w-[15px] h-auto rotate-180"
              />
            </button>
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-8">
          <Image
            className="w-full xl:w-[90%] mx-auto h-[1px] lg:h-[2px]"
            src="/footer-line.png"
            width={100}
            height={2}
            alt="Footer Line"
            priority
          />
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-4 md:gap-0 max-w-[1400px] mx-auto px-5">
          <p className="text-white text-[12px] lg:text-[14px] 2xl:text-[18px] text-center md:text-left">
            {footer.copyright}
          </p>
          <div className="flex justify-center space-x-4">
            {[...Array(4)].map((_, i) => (
              <Link key={i} href="/#" className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={i === 0 ? "0 0 512 512" : i === 1 ? "0 0 496 512" : "0 0 576 512"}
                  className="lg:w-4 lg:h-4 w-[14px] h-[14px] 2xl:w-[20px] 2xl:h-[20px] hover:scale-110 transition-transform duration-200"
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
                          ? "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                          : i === 2
                            ? "M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                            : "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                    }
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
