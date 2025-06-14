"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import Link from "next/link";

function Hero(){

/*Rings */
const ring1 = useRef(null);
const ring2 = useRef(null);

/*Headings */
const text1 = useRef(null);
const text2 = useRef(null);

/*Rings */
useEffect(() => {
  const ctx = gsap.context(() => {
    const pulse = (el, delay = 0) => {
      gsap.fromTo(
        el,
        { scale: 1, opacity: 1 },
        {
          scale: 1.5,
          opacity: 0,
          repeat: -1,
          duration: 1.5,
          ease: "power1.out",
          delay,
        }
      );
    };

    if (ring1.current && ring2.current) {
      pulse(ring1.current, 0);
      pulse(ring2.current, 1.5);
    }
  });

  return () => ctx.revert();
}, []);

/*Headings */
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      text1.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
    );
    gsap.fromTo(
      text2.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out", delay: 0.6 }
    );
  });

  return () => ctx.revert();
}, []);


    return(
        <>
        <div id="home" className="pt-[100px] sm:pt-[100px] bg-gradient-to-b from-[#e3e3e3] via-[#e3e3e3] to-[#f95959] text-white w-full min-h-screen px-4 sm:px-6 lg:px-20 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-6">
                {/* Left Content */}
                <div className="w-full md:w-1/2 md:h-full space-y-6 mt-10 md:mt-0">
                <h1 className="text-4xl sm:text-5xl sm:text-center md:text-6xl lg:text-8xl font-bold leading-tight text-center ">
                    <span ref={text1} className="block font-[Viaoda] text-[#233142]">Hello there! I’m</span>
                    <span ref={text2} className="block text-[#f95959] font-[Parisienne]">María José Mejía</span>
                </h1>
                <p className="text-[#233142] leading-relaxed text-center">
                    Passionate Front-end Developer and Web Designer. <br />
                    Creating user-friendly and visually appealing websites.
                </p>
                
                <div className="sm:flex sm:justify-center sm:items-center">
                <Link href='/contact' passHref className="bottom-6 transform border-x-4 border-black hover:border-white text-black hover:text-white hover:bg-[#45171d] rounded-full font-semibold py-2 px-2.5 text-[20px] hover:font-[Viaoda] sm:flex sm:justify-center sm:w-72 sm:text-[18px]">
                    Let's work together
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/>
                    </svg>
                </Link>
                </div>
                
                </div>

                {/* Right Video Box */}
                <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full h-full sm:max-w-[400px] md:max-w-[800px] lg:w-full xl:w-full lg:h-full">
                    <img
                    src="/images/intro.png"
                    alt="video illustration"
                    className="rounded-lg w-full h-auto object-cover"
                    />
                    <a
                    href="https://www.youtube.com/shorts/uyr4XLOCS6E" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center text-white"
                    >
                    <i className="fas fa-play-circle text-6xl z-10" />
                    {/* Pulse Rings */}
                    <span
                    ref={ring1}
                    className="absolute w-24 h-24 rounded-full border-6 border-[#f95959] z-0 pointer-events-none animate-ping"
                    style={{ transformOrigin: "center center", display: "block" }}
                    ></span>
                    <span
                    ref={ring2}
                    className="absolute w-24 h-24 rounded-full border-6 border-[#f95959] z-0 pointer-events-none"
                    style={{ transformOrigin: "center center", display: "block" }}
                    ></span>
                    </a>
                </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f95959" fillOpacity="1" d="M0,160L24,176C48,192,96,224,144,245.3C192,267,240,277,288,245.3C336,213,384,139,432,122.7C480,107,528,149,576,181.3C624,213,672,235,720,229.3C768,224,816,192,864,149.3C912,107,960,53,1008,74.7C1056,96,1104,192,1152,224C1200,256,1248,224,1296,176C1344,128,1392,64,1416,32L1440,0L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
        </>
    );
}

export default Hero