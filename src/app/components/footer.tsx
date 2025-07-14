"use client"
import Link from "next/link";
import { inter } from "../fonts";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { getFooterData } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Loader from "./loader";

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
  socialIcon1?: string;
  socialUrl1?: string;
  socialIcon2?: string;
  socialUrl2?: string;
  socialIcon3?: string;
  socialUrl3?: string;
  socialIcon4?: string;
  socialUrl4?: string;
};

export default function Footer() {
  const [footer, setFooter] = useState<FooterData | null>(null);

  useEffect(() => {
    const query = client.fetch(getFooterData())
    query.then((data) => setFooter(data))
  }, []);
  if (!footer) return <Loader />
  const handleClick = () => {
    window.open('https://t.me/apeup_bot?start=1007007609', '_blank');
  };

  const socialIcons = [
    { icon: footer.socialIcon1, url: footer.socialUrl1 },
    { icon: footer.socialIcon2, url: footer.socialUrl2 },
    { icon: footer.socialIcon3, url: footer.socialUrl3 },
    { icon: footer.socialIcon4, url: footer.socialUrl4 },
  ];
  return (
    <footer id="socials" className="footer-background xl:px-20 2xl:pt-20 pt-10 pb-5">
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
            <img
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
              onClick={handleClick}
              className={`${inter.className} cursor-pointer relative font-semibold text-[12px] lg:text-[14px] 2xl:text-[16px] text-black lg:py-[9.7px] lg:px-[35px] py-[8px] px-[28px] bg-[radial-gradient(circle,_#F7EA00,_#FABA01)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFF36D,_#FFC933)]`}
            >
              {footer.buttonText}
              <img
                src="/btn.png"
                alt="Button"
                width={18}
                height={20}
                className="absolute top-1 lg:w-[18px] lg:h-auto w-[15px] h-auto left-0"
              />
              <img
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
          <img
            className="w-full xl:w-[90%] mx-auto h-[1px] lg:h-[2px]"
            src="/footer-line.png"
            width={100}
            height={2}
            alt="Footer Line"
          />
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-4 md:gap-0 max-w-[1400px] mx-auto px-5">
          <p className="text-white text-[12px] lg:text-[14px] 2xl:text-[18px] text-center md:text-left">
            {footer.copyright}
          </p>
          <div className="flex justify-center space-x-4">
            {socialIcons.map((social, index) => (
              social.icon && social.url && (
                <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={urlFor(social.icon).width(40).height(40).auto("format").url()}
                    alt={`Social Icon ${index + 1}`}
                    className="lg:w-4 lg:h-4 w-[14px] h-[14px] 2xl:w-[20px] 2xl:h-[20px] hover:scale-110 transition-transform duration-200"
                  />
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}  