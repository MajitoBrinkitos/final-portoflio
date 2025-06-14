"use client";
import Image from "next/image";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Alejandra Cecinco",
    role: "C5 Mexico City Manager",
    image: "/images/testimonials/alejandrac5.png",
    review:
      "It was such a joy collaborating with Maria Jose. Her collaboration reflects the kind of impact I aim to create on every project.",
  },
  {
    name: "Lourdes Acosta",
    role: "CEO & Founder IFIS S.A. de C.V.",
    image: "/images/testimonials/lourdes.png",
    review:
      "Maria Jose's vision and knowledge have been incredibly important for the growth of our foundation.",
  },
  {
    name: "Sebastián Bárcenas",
    role: "Mechanical Chief Engineer Olympus",
    image: "/images/testimonials/sebastian.png",
    review:
      "I've known Maria Jose from from previous projects, and all I can say is that her collaboration has helped us build amazing and unique projects.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials" className="bg-[#ffffff] text-[#233142] pt-0">
      {/* Wavy Top SVG */}
{/*       <div className="relative w-full overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#e3e3e3" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,0L21.8,42.7C43.6,85,87,171,131,192C174.5,213,218,171,262,144C305.5,117,349,107,393,85.3C436.4,64,480,32,524,53.3C567.3,75,611,149,655,165.3C698.2,181,742,139,785,117.3C829.1,96,873,96,916,101.3C960,107,1004,117,1047,138.7C1090.9,160,1135,192,1178,170.7C1221.8,149,1265,75,1309,53.3C1352.7,32,1396,64,1418,80L1440,96L1440,0L0,0Z"
          />
        </svg>
      </div> */}

      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold">Testimonials</h2>
        <div className="w-24 h-1 bg-[#f95959] mx-auto mt-4 mb-6 rounded-full" />
        <p className="text-xl text-[#455d7a] mb-12">
          Nice things <span className="text-[#f95959] font-semibold">people say</span> about my work
        </p>

        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                <p className="text-[#233142] text-lg italic mb-4 relative">
                  <i className="fas fa-quote-left mr-2 text-[#f95959]" />
                  {item.review}
                  <i className="fas fa-quote-right ml-2 text-[#f95959]" />
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-[#f95959] mx-0.5" />
                  ))}
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src={item.image}
                    alt={`${item.name} picture`}
                    width={80}
                    height={80}
                    className="rounded-full object-cover mb-2"
                  />
                  <h3 className="font-semibold text-[#233142]">{item.name}</h3>
                  <p className="text-sm text-[#455d7a]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
