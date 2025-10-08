import React from 'react'
import { SiCss3, SiDjango, SiHtml5, SiJavascript, SiPython, SiReact } from 'react-icons/si'


const skills = [
    {
        name:'Python',
        icon:<SiPython/>
    },
    {
        name:'Django',
        icon:<SiDjango/>
    },
    {
        name:'Javascript',
        icon:<SiJavascript/>
    },
    {
        name:'Html',
        icon:<SiHtml5/>
    },
    {
        name:'Css',
        icon:<SiCss3/>
    },
    {
        name:'React js',
        icon:<SiReact/>
    },
]

function Skills() {
    return (
        <div className='text-white pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>My 
                <span className='text-cyan-200'>Skills</span>
            </h1>
        </div>
    )
}

export default Skills
