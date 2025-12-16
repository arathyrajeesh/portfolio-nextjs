'use client';

import React from "react";
import {
    SiApifox,
    SiCss3,
    SiDjango,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiPython,
    SiReact,
    SiRedux,
} from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import Tilt from "react-parallax-tilt";

const skills = [
    { name: "Python", icon: <SiPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "React JS", icon: <SiReact /> },
    { name: "Tailwind CSS", icon: <SiCss3 /> },
    { name: "Bootstrap", icon: <BsBootstrapFill /> },   
    { name: "Redux", icon: <SiRedux /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <i className="devicon-git-plain text-5xl" /> },
    { name: "GitHub", icon: <i className="devicon-github-original text-5xl" /> },
    { name: "REST API", icon: <SiApifox /> },

];


export default function Skills() {
    return (
        <div id="skill" className="text-white pt-16 pb-16 overflow-hidden">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold">
            My <span className="text-cyan-300">Skills</span>
        </h1>

        {/* SLIDER WRAPPER */}
        <div className="mt-16 w-full overflow-hidden whitespace-nowrap">
            {/* Infinite Sliding Container */}
            <div className="slider flex gap-10">
            {/* Duplicate array to create infinite loop */}
            {[...skills, ...skills].map((skil, i) => (
                <Tilt key={i} scale={1.1} transitionSpeed={400}>
                <div
                    className="bg-[#14134145] w-40 h-48 rounded-3xl flex flex-col 
                    items-center justify-center shadow-lg transition hover:scale-105"
                >
                    <div className="text-5xl mb-4 text-gray-300">{skil.icon}</div>
                    <p className="text-purple-400 mt-1">{skil.name}</p>
                </div>
                </Tilt>
            ))}
            </div>
        </div>
        </div>
    );    
}
