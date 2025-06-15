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
        title: "Note and Go",
        description: "Minimalist Note taking app built with EJS and Bootstrap5.",
        image: "/images/portfolio/note-and-go.png",
        demo: "https://your-demo-link.com",
        code: "https://github.com/MajitoBrinkitos/note-taking-app.git",
        year: "2024",
    },
    {
        title: "Card Flipping Game",
        description: "Simple but fun memory game built with React.",
        image: "/images/portfolio/card-flipping.png",
        demo: "https://majitobrinkitos.github.io/card-flipping-game/",
        code: "https://github.com/MajitoBrinkitos/card-flipping-game.git",
        year: "2024",
    },
        {
        title: "Cielito Lindo Cafe",
        description: "Restaurant Cielito Lindo coffee shop menu built with Bootstrap and Sass.",
        image: "/images/portfolio/cielito-lindo.png",
        demo: "https://your-demo-link.com",
        code: "https://github.com/MajitoBrinkitos/cafe-menu.git",
        year: "2024",
    }
    ];

    return(
        <>
        <div id="portfolio" className="bg-[#f2f4fb] px-4 sm:px-6 lg:px-20 py-40">
            <div className="max-w-screen-xl mx-auto text-center mb-12 py-10 ">
                <p className="flex justify-center items-center capitalize text-[20px] text-[#ff2400]">LATEST PROJECTS</p>
                <p ref={text1} className="text-7xl font-[Lexend Deca] my-5">A project says more than a thousand words</p>
                <p ref={text2} className="text-4xl font-[Rochester]">What I have done, what I'm currently creating, and what my mind would like to see..</p>
            </div>

            <div className="max-w-screen-xl text-start mb-12">
                <span className="text-[20px] text-[#ff2400] font-[Lexend Deca]">Featured</span>
            </div>

            {/*Grid */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                <div key={index} className="bg-[#45315d] rounded-lg shadow-md overflow-hidden hover:shadow-violet-900 transition-shadow duration-300 p-3">
                    <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                    />
                    <div>
                    <h3 className="text-xl rounded-5 font-semibold text-[#f2f4fb] mb-2">{project.title} - {project.year}</h3>
                    <p className="text-[#f2f4fb] text-sm mb-4">{project.description}</p>
                    <div className="flex gap-4">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#ff2400] hover:underline">
                        Live Demo
                        </a>
                        <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-[#ff9280] hover:underline">
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