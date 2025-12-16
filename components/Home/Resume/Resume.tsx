import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'

function Resume() {
    return (
        <div id="resume" className='pt-20 pb-16'>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
                {/* Experience Section */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                        My Works <span className='text-cyan-200'> Experience</span>
                    </h1>
                    <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement='top-center'>
                        <ResumeCard 
                        Icon={FaCodepen} role='Python Full-Stack Developer (Intern)'
                        date='may 2025 - Present'
                        organization='Maitexa Pvt Ltd'  
                        />
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                        My <span className='text-cyan-200'> Education</span>
                    </h1>
                    <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement='top-center' date-aos-delay="300">
                        <ResumeCard 
                            Icon={BiBadge} 
                            role='Diploma in Computer Engineering' 
                            date='Aug 2022 - Mar 2025'
                            organization='Govt Residentials womens polytechnic college'  
                        />
                        <ResumeCard 
                            Icon={FaReact} 
                            role='Higher Secondary' 
                            date='2020 - 2022'
                            organization='Ramavilasam Higher Secondary School'  
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
