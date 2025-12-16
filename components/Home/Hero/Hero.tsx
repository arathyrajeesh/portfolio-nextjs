"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      await import("aos/dist/aos.css");

      AOS.init({
        duration: 1000,
        once: true,
      });
    };

    initAOS();
  }, []);

  return (
    <div
      id="hero"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col"
    >
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/arathy.jpeg"
          alt="hero image"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide"
        >
          Creating Web Products, <br />
          brands,
          <span className="text-cyan-200"> and experiences.</span>
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          Hi, I&apos;m Arathy – A Passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  " Frontend Developer",
                  " Backend Developer",
                  " Web Developer",
                  " Python FullStack Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>

        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-16 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium flex items-center"
        >
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
