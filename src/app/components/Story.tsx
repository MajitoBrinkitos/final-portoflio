"use client";
import Image from "next/image";

const MyStory = () => {
  return (
    <>
    <div id="about" className="bg-gradient-to-b from-[#ffffff] via-[#faf6e9] to-[#ece8d9] px-4 sm:px-6 lg:px-20 py-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#233142]">My Story</h2>
          <div className="w-24 h-1 bg-[#f95959] mx-auto mt-4 rounded-full" />
        </div>

        {/* Intro Text */}
        <div className="grid md:grid-cols-2 gap-6 bg-gradient-to-b from-[#fffdfb] via-[#c4dde6] to-[#9cc7d6] rounded-lg p-6 mb-12">
          <div className="flex items-center justify-center px-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-black">
              Driven by the incredible synergy of technology and art
            </h3>
          </div>
          <div className="text-start text-black px-4">
            <p>
              As a telecommunications engineer, I honed my problem-solving skills, but it was in front-end development that I found my true calling, blending technology with artistic vision to create something truly amazing.
            </p>
          </div>
        </div>

        {/* Experience Rows */}
        {[
          {
            title: "Engineering",
            desc: "As a telecommunications engineer, I had the privilege of collaborating on incredible, world-spanning projects with leading global companies.",
            img: "/images/story/engineering.png",
            icon: "fa-network-wired",
            reverse: false,
          },
          {
            title: "Front-end Development",
            desc: "For me, front-end development is about creating the bridge between innovative services and products and the people who need them, ensuring they're beautifully visible and easily accessible.",
            img: "/images/story/frontend.png",
            icon: "fa-laptop-code",
            reverse: true,
          },
          {
            title: "Digital Learning Designing",
            desc: "Volunteering in education was a great way for me to apply my skills and develop new ones. I especially learned how to teach and share my knowledge effectively.",
            img: "/images/story/tutorial.png",
            icon: "fa-graduation-cap",
            reverse: false,
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                item.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Text */}
            <div className="space-y-4 px-4">
              <div className={`text-4xl text-[#0881a3]`}>
                <i className={`fa-solid ${item.icon} fa-bounce`} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#233142]">
                {item.title}
              </h3>
              <p className="text-[#455d7a]">{item.desc}</p>
{/*               <button className="inline-flex items-center px-6 py-2 rounded-full border-2 border-[#45171d] hover:border-transparent text-[#45171d] font-medium hover:bg-[#f95959] hover:text-white active:scale-95 transition-transform">
                Learn more
                <span className="ml-2">
                  <i className="fas fa-arrow-right" />
                </span>
              </button> */}
            </div>

            {/* Image */}
            <div className="px-4">
              <Image
                src={item.img}
                alt={`${item.title} illustration`}
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ece8d9" fillOpacity="1" d="M0,160L24,176C48,192,96,224,144,245.3C192,267,240,277,288,245.3C336,213,384,139,432,122.7C480,107,528,149,576,181.3C624,213,672,235,720,229.3C768,224,816,192,864,149.3C912,107,960,53,1008,74.7C1056,96,1104,192,1152,224C1200,256,1248,224,1296,176C1344,128,1392,64,1416,32L1440,0L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
    </>
  );
};

export default MyStory;
