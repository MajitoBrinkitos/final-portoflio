import "@/app/globals.css";

import Hero from './components/Hero';
import Technologies from "./components/Technologies";
import Story from './components/Story';
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
    <Hero />
    <Technologies />
    <Story />
    <Testimonials />
    </>
  );
}
