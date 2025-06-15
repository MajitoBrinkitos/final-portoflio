"use client";

import "@/app/globals.css";
import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";

function Portfolio(){

    /*Title paragraphs */
    const text1 = useRef(null);
    const text2 = useRef(null);

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

    /*Grid */
        const projects = [
    {
        title: "Modern Landing Page",
        description: "Responsive front-end built with React, Tailwind CSS, and GSAP animations.",
        image: "/images/portfolio/landingpage.png",
        demo: "https://your-demo-link.com",
        code: "https://github.com/your-repo/landing-page",
    },
    {
        title: "Modern Landing Page",
        description: "Responsive front-end built with React, Tailwind CSS, and GSAP animations.",
        image: "/images/portfolio/landingpage.png",
        demo: "https://your-demo-link.com",
        code: "https://github.com/your-repo/landing-page",
    }
    ];

    return(
        <>
        <div id="portfolio" className="bg-[#f9f9f9] px-4 sm:px-6 lg:px-20 py-40">
            <div className="max-w-screen-xl mx-auto text-center mb-12 py-10 ">
                <p className="flex justify-center items-center capitalize text-[20px] text-[#ff2400]">LATEST PROJECTS</p>
                <p ref={text1} className="text-7xl font-[Lexend Deca] my-5">A project says more than a thousand words</p>
                <p ref={text2} className="text-4xl font-[Rochester]">What I have done, what I'm currently creating, and what my mind would like to see..</p>
            </div>

            {/*Grid */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#233142] mb-2">{project.title}</h3>
                    <p className="text-[#455d7a] text-sm mb-4">{project.description}</p>
                    <div className="flex gap-4">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#f95959] hover:underline">
                        Live Demo
                        </a>
                        <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-[#233142] hover:underline">
                        Source Code
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Portfolio