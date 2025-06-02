"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { zenDots } from "../fonts";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { inter } from "../fonts";
import { motion } from "framer-motion";
import { getAboutData } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";





export default function About() {
  // const [index, setIndex] = useState(0);
  // const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [visibleCount, setVisibleCount] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [xOffset, setXOffset] = useState(0);
  type AboutType = {
    title: string;
    description1: string;
    description2: string;
    image1: { asset: { url: string } };
    image2: { asset: { url: string } };
    title2: string;
    iconTitle1: string;
    iconDescription1: string;
    icon1: { asset: { url: string } };
    iconTitle2: string;
    iconDescription2: string;
    icon2: { asset: { url: string } };
    iconTitle3: string;
    iconDescription3: string;
    icon3: { asset: { url: string } };
    iconTitle4: string;
    iconDescription4: string;
    icon4: { asset: { url: string } };
    images: { asset: { url: string } }[];
  };

  const [about, setAbout] = useState<AboutType | null>(null);


  // const sliderRef = useRef(null);
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 2,
      spacing: 59,
    },
  });

  


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


  useEffect(() => {
    const query = client.fetch(getAboutData())
    query.then((data) => setAbout(data))
  }, []);
  if (!about) return null


  const features = [
    {
      title: about.iconTitle1,
      description: about.iconDescription1,
      icon: about.icon1.asset.url,
    },
    {
      title: about.iconTitle2,
      description: about.iconDescription2,
      icon: about.icon2.asset.url,
    },
    {
      title: about.iconTitle3,
      description: about.iconDescription3,
      icon: about.icon3.asset.url,
    },
    {
      title: about.iconTitle4,
      description: about.iconDescription4,
      icon: about.icon4.asset.url,
    },
  ];
const featureImages = about.images.map((image: { asset: { url: string } }) => image.asset.url);




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

  // const prevSlide = () => {
  //   setDirection('left');
  //   setIndex((prev) => (prev === 0 ? features.length - 2 : prev - 1));
  // };

  // const nextSlide = () => {
  //   setDirection('right');
  //   setIndex((prev) => (prev + 2 >= features.length ? 0 : prev + 1));
  // };

  // const variants = {
  //   enter: (direction: 'left' | 'right') => ({
  //     x: direction === 'right' ? 100 : -10,
  //     opacity: 0,
  //   }),
  //   center: {
  //     x: 0,
  //     opacity: 1,
  //   },
  //   exit: (direction: 'left' | 'right') => ({
  //     x: direction === 'right' ? -10 : 100,
  //     opacity: 0,
  //   }),
  // };








  return (

    // it is a  about section
    <section
      id="about"
      className="bg-[url('/about-bg.png')] bg-cover bg-no-repeat py-10 px-4 sm:px-8 lg:px-0 md:px-12 xl:px-20 xl:pr-0 2xl:px-0 relative"
    >
      <Image src="/blur.png" height={100} width={100} alt="blur" className="absolute -bottom-30 z-10 w-full h-[300px] left-0" />
      <Image
        src="/features-purple.png"
        width={100}
        height={100}
        alt="yellow"
        className="absolute z-10 -bottom-[140px] h-full w-[100px] sm:w-[350px] left-0"
      />
      <Image
        className="absolute lg:bottom-190 bottom-0 left-0 z-10 xl:opacity-50 2xl:opacity-100 lg:w-[250px] xl:w-[150px] 2xl:w-[250px] h-auto w-[150px] hidden xl:block"
        src="/hill.svg"
        height={100}
        width={100}
        alt="hill"
      />
      <Image
        className="absolute top-10 right-0 w-[550px] h-auto z-10 sm:opacity-100 opacity-30"
        src="/purple.png"
        height={100}
        width={100}
        alt="yellow"
      />
      <Image
        className="absolute xl:bottom-220 lg:w-[100px] lg:bottom-150 right-0 xl:w-[200px] h-auto z-0"
        src="/banana.png"
        height={100}
        width={100}
        alt="yellow"
      />

      <div className="max-w-[1440px] 2xl:h-[70dvh] mx-auto flex md:mr-20 flex-col md:flex-row xl:px-20 xl:mr-20 2xl:mr-35 2xl:px-0 xl:gap-20 justify-center lg:gap-30 lg:mr-25 2xl:gap-0 items-center md:mt-10 gap-10">
        <div className="flex-1 w-full max-w-lg lg:max-w-none">
          <div className="text-white text-center md:text-left max-w-[350px] lg:max-w-[500px] 2xl:max-w-[592px] mx-auto 2xl:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`text-[28px] lg:text-[35px] 2xl:text-[54px] ${zenDots.className}`}
              style={{ textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C" }}
            >
              {about.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`2xl:text-[18px] lg:text-[12px] text-[12px] md:font-medium ${inter.className} mt-4`}
            >
              {about.description1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`2xl:text-[18px] lg:text-[12px] text-[12px] md:font-medium mt-5 ${inter.className}`}
            >
              {about.description2}
            </motion.p>
          </div>

          <div className="">
            <div className="bg-[url(/about-banner.svg)] z-50 bg-cover bg-center bg-no-repeat rounded-3xl mt-8 lg:p-10 p-7 px-4 xl:p-10 2xl:p-14 relative overflow-visible max-w-[350px] lg:max-w-[500px] xl:max-w-[500px] 2xl:max-w-[779px] w-full h-full mx-auto 2xl:mx-0">
              <Image className="absolute z-10 top-0 right-0 lg:w-[150px] w-[120px]" src="/mask.png" width={150} height={100} alt="mask" />
              <Image className="absolute z-10 bottom-0 left-0 rotate-180 lg:w-[150px] w-[120px]" src="/mask.png" width={150} height={100} alt="mask" />

              <div
              >
                <div ref={sliderInstanceRef} className="keen-slider">
                  {features.map((feature, i) => (
                    <div
                      key={i}
                      className="keen-slider__slide flex flex-col items-start text-left w-[350px] sm:w-[280px] lg:w-[300px] pr-20 sm:pr-0"
                    >
                      <Image
                        src={feature.icon}
                        width={30}
                        height={30}
                        alt="Feature Icon"
                        className="mb-2 w-[30px] lg:w-[37px]"
                      />
                      <h4
                        className={`text-[18px] 2xl:text-[28px] font-semibold mb-1 ${zenDots.className} text-white`}
                      >
                        {feature.title}
                      </h4>
                      <p
                        className={`text-[12px] 2xl:text-[16px] text-white ${inter.className}`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>



              <div className="flex justify-center mt-8 gap-6 absolute -bottom-5 z-30 left-1/2 transform -translate-x-1/2">
                <button onClick={() => slider.current?.prev()} className="bg-[radial-gradient(circle,_#F5B201,_#F9C301)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFD93B,_#FFB800)] rounded-full lg:h-[37px] lg:w-[37px] h-[30px] w-[30px] text-white" aria-label="Previous" style={{ boxShadow: 'inset 0 -5px 0 rgba(250, 94, 7, 0.4), 0 4px 4px rgba(0, 0, 0, 0.25)' }}>
                  ←
                </button>
                <button onClick={() => slider.current?.next()} className="bg-[radial-gradient(circle,_#F5B201,_#F9C301)] shadow-[0_4px_50px_#00000040] transition duration-300 hover:bg-[radial-gradient(circle,_#FFD93B,_#FFB800)] rounded-full lg:h-[37px] lg:w-[37px] h-[30px] w-[30px] text-white" aria-label="Next" style={{ boxShadow: 'inset 0 -5px 0 rgba(250, 94, 7, 0.4), 0 4px 4px rgba(0, 0, 0, 0.25)' }}>
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
          className="flex flex-row items-center gap-4 flex-1 z-10 justify-center w-[50%] mx-auto md:max-w-[170px] xl:max-w-[200px] 2xl:max-w-none"
        >
          <Image src={about.image1.asset.url} width={250} height={250} alt="Lucky Wheel" className="rounded-xl w-full max-w-[88%] lg:max-w-[257px] h-auto mt-20" />
          <Image src={about.image2.asset.url} width={180} height={180} alt="Spin Wheel" className="rounded-xl w-full max-w-[88%] lg:max-w-[257px]" />
        </motion.div>
      </div>

      {/* it is a features section */}

      <section
        className="text-white relative overflow-hidden mt-15"
      >
        {/* <Image
              src="/features-purple.png"
              width={100}
              height={100}
              alt="yellow"
              className="absolute z-10 -top-[220px] h-full w-[100px] sm:w-[350px] left-0"
            /> */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-16 lg:pr-0 ml-auto relative z-10">
          {/* Header and Buttons */}
          <div className="flex flex-col md:flex-row justify-between max-w-[1347px] mx-auto items-center gap-6">
            <h2
              className={`${zenDots.className} text-[28px] lg:text-[35px] 2xl:text-[54px] text-center md:text-left leading-tight`}
              style={{
                textShadow: "0 0 20px #EB319C, 0 0 0px #EB319C",
              }}
            >
              {about.title2}
            </h2>

            <div className="flex gap-3 items-center xl:pr-20">
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
              className="flex gap-6 justify-center md:justify-start"
              style={{
                translateX: xOffset,
                transition: animating ? "transform 0.7s ease-in-out" : "none",
              }}
            >
              {visibleSlides.map((url:string, i:number) => (
                <div
                  key={i}
                  className="
                        flex-shrink-0
                        w-[80vw] sm:w-[50vw] md:w-[26vw] lg:w-[18vw] xl:w-[19vw] 2xl:w-[30vw]
                        max-w-[386px] max-h-[548px] h-full
                        rounded-xl 
                        overflow-hidden
                      "
                >
                  <Image
                    className="rounded-xl object-contain w-full h-full"
                    src={url}
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
    </section>
  );
}