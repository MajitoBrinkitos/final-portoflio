"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinksRef = useRef(null);
  useEffect(() => {
  if (!navLinksRef.current) return;

  const links = navLinksRef.current.querySelectorAll("li");

  gsap.from(links, {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });
}, []);


  return (
    <nav className="bg-[#ececec] shadow fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <Link href="/" className="shrink-0">
          <img src="/images/logo.jpg" alt="logo image" className="w-auto max-w-[200px] h-auto block shadow-[10px_5px_5px_#ea8a8a]" />
        </Link>
        <button
          className="lg:hidden text-[#455d7a] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`flex-col lg:flex-row lg:flex lg:items-center ${isOpen ? "flex" : "hidden"}`}>
          <ul className="w-full lg:w-auto flex flex-col lg:flex-row gap-4 text-white lg:ml-auto mt-4 lg:mt-0"
          ref={navLinksRef}
          >
             <li>
                <Link href="/about" className="navbar-typo text-[#233142] hover:text-[30px] text-[20px] sm:text-[22px] lg:text-[24px] hover:font-gabriela px-[0.7rem] capitalize font-semibold">About Me</Link>
            </li>
            <li><Link href="/portfolio" className="navbar-typo text-[#233142] hover:text-[30px] text-[20px] sm:text-[22px] lg:text-[24px] px-[0.7rem] capitalize font-semibold">Portfolio</Link></li>
            <li><Link href="/blog" className="navbar-typo text-[#233142] hover:text-[30px] text-[20px] sm:text-[22px] lg:text-[24px] px-[0.7rem] capitalize font-semibold">Blog</Link></li>
            <li><Link href="/contact" className="navbar-typo text-[#233142] hover:text-[30px] text-[20px] sm:text-[22px] lg:text-[24px] px-[0.7rem] capitalize font-semibold">Contact</Link></li>
          </ul>

            {/*Contact Button */}
            <Link
                href="/contact"
                className="coffee-font fixed bottom-6 right-6 transition z-50 bg-[#45171d] hover:bg-[#fecea8] text-white hover:text-[#45171d] text-[24px] border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:inline-flex items-center mb-2 hidden sm:bottom-4 sm:right-4"
            >
                Buy me a coffee!
                <svg className="w-6 h-6 text-white hover:text-[#45171d]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13h2c1.1046 0 2 .8954 2 2s-.8954 2-2 2h-2.5M10 3c0 2.4-3 1.6-3 4m8-4c0 2.4-3 1.6-3 4m-7 4 .6398 6.398C5.84428 19.4428 7.56494 21 9.61995 21H10.38c2.0551 0 3.7757-1.5572 3.9802-3.602L15 11H5Z"/>
                </svg>
                <span className="animate-ping mx-2 h-3 w-3 rounded-full bg-[#fecea8] inline-block"></span>

            </Link>
            </div>
      </div>
    </nav>
  );
}
