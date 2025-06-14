"use client";
import Image from "next/image";

const technologies = [
  { src: "/images/technologies/html.png", alt: "HTML", label: "HTML" },
  { src: "/images/technologies/css.png", alt: "CSS", label: "CSS" },
  { src: "/images/technologies/js.png", alt: "JavaScript", label: "JS" },
  { src: "/images/technologies/b5.png", alt: "Bootstrap", label: "BOOTSTRAP" },
  { src: "/images/technologies/astro.png", alt: "Astro", label: "ASTRO" },
  { src: "/images/technologies/gsap.png", alt: "GSAP", label: "GSAP" },
];

const Technologies = () => {
  return (
    <section id="technologies" className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl xl:6xl font-bold text-[#233142]">Technologies</h2>
          <div className="h-1 w-24 bg-[#f95959] mx-auto mt-4 mb-2 rounded-full" />
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#f4f4f4] rounded-lg shadow-md p-4 hover:scale-105 hover:font-[Rochester] transition-transform duration-300"
            >
                <div className="w-20 h-20 flex items-center justify-center">
                <Image
                src={tech.src}
                alt={`${tech.alt} logo`}
                title={`${tech.label} logo`}
                width={64}
                height={64}
                className="object-contain w-full h-full rounded-5"
                />
                </div>
              <p className="pt-4 text-[#233142] text-[20px] hover:text-black hover:font-[Rochester]">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
