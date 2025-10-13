"use client";

import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <div className='overflow-hidden'>
        <Hero id="hero"/>
        <Services id="services"/>
        <Resume id="resume"/>
        <Projects id="projects"/>
        <Skills id="skills"/>
        <Contact id="contact"/>

        </div>
    );
};

export default Home;
