"use client";

import React from "react";
import Image from "next/image";

const projects = [
    {
        title: "Event Booking API",
        category: "Django • DRF • MySQL • PayPal",
        image: "/images/event.avif",
        github: "https://github.com/arathyrajeesh/event-booking-api", // add your GitHub link
    },
    {
        title: "RedConnect - Blood Bank Management System",
        category: "HTML • CSS • Django • Python",
        image: "/images/blood.jpg",
        github: "https://github.com/arathyrajeesh/blood-bank-management-django",
        demo: "https://blood-bank-management-django-12.onrender.com/",
    },
    {
        title: "LocalService - Service Provider Marketplace",
        category: "HTML • CSS • Django • Python",
        image: "/images/local.avif",
        github: "https://github.com/arathyrajeesh/localservice_port.git",
        // demo: "https://example.com",
    },
        {
        title: "NeoMart - E-commerce Frontend",
        category: "React.js • Hooks • UI",
        image: "/images/ab.jpg",
        github: "https://github.com/arathyrajeesh/ecommerce-project-react",
        demo: "https://ecommerce-project-react-i779.vercel.app/login",
    },
    {
        title: "FreshMart - E-commerce (Team Project)",
        category: "HTML • CSS • JavaScript",
        image: "/images/fresh.png",
        github: "https://github.com/arathyrajeesh/ecommerce-mini-project",
    },
];

function Projects() {
    return (
        <div id="projects" className="pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            A small selection of recent <br />
            <span className="text-cyan-200">projects</span>
        </h1>

        <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            {projects.map((project, i) => (
            <div
                key={i}
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay={`${i * 100}`}
                className="bg-[#131332]/60 rounded-lg p-4 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
                <Image
                src={project.image}
                alt="project image"
                width={800}
                height={650}
                className="rounded-lg w-full h-auto hover:opacity-80 transition-all duration-300"
                />

                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                {project.title}
                </h1>
                <h1 className="pt-1 font-medium text-white/80">{project.category}</h1>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-5">
                <a
                    href={project.demo}
                    target="_blank"
                    className="px-6 py-2 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all duration-300"
                >
                    Live Demo
                </a>

                <a
                    href={project.github}
                    target="_blank"
                    className="px-6 py-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white font-medium transition-all duration-300"
                >
                    GitHub
                </a>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Projects;
