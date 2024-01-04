/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import myPic from '../public/images/jamil.jpeg'

const About = () => {
  return (
    <div className='bg-slate-950 pb-[3rem] pt-[4rem] md:pt-[8rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
            <div>
                <h1 className='text-2xl font-bold uppercase text-teal-400 mb-[1rem]'>About Me</h1>
                <span className='w-[120px] hidden md:block h-[5px] bg-teal-500 rounded-sm mb-4'></span>
                <div className='mb-[3rem] flex items-center md:space-x-10'>
                
                <p className='text-[20px] text-slate-400 w-[100%]'>
                <span className='text-3xl font-extrabold text-cyan-500'>I'm Sharif Al Mahmud,</span> As a junior Computer Science student, I am immersed in the world of MERN stack development. Passionate about crafting seamless digital experiences ,
                I aim to leverage my skills in HTML,CSS, MongoDB, Express.js, React.js, and Node.js to contribute to impactful web projects.
                Seeking a dynamic role to further develop my full-stack capabilities, and Balancing academia with coding, I'm on a perpetual quest for knowledge, eager to collaborate and contribute to the evolving landscape of web technologies. Let's connect and build something amazing together.

                Passionate about playing cricket and football, finding joy in the thrill of the pitch and the camaraderie of the field.
                </p>
                </div>
            </div>
            <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                <Image src={myPic} alt='user' layout='fill' objectFit='contain' 
                className='relative z-[11] w-[100%] h-[110%] mx-5  object-contain'
                />
                <div className='absolute  w-[80%] h-[100%] mx-4 bg-teal-300 top-[-2rem] right-[-2rem]'>

                </div>
            </div>

        </div>
    </div>
  )
}

export default About