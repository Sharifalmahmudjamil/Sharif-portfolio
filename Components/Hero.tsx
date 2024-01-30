/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import images from "../public/images/sharif.jpg"



const Hero = () => {
  const resumeUrl = "../public/Resume/Sharif-Al-Mahmud.pdf"
  return (
    <div className='h-[110vh] bg-[url("/images/banner.jpg")] bg-cover bg-center'> 
      <Particle></Particle>
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-8 h-[100%] items-center'>
        <div>
        <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            HI, I'M <span className='text-cyan-400'>Sharif Al Mahmud</span> </h1>
         
            <TextEffect></TextEffect>
            <p className='mt-[2rem] text-[20px] text-[#ffffff92]'>A Fresher Developer's Journey Through Code and Creativity.</p>
            <div className='mt-[2rem] flex-col space-y-6 md:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                <button className='px-[2rem] hover:bg-cyan-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-teal-300 text-black flex  items-center space-x-2 rounded-full'>
                    <Link href={resumeUrl} target="_blank" download='Sharif-Al-Mahmud.pdf' >Download Resume</Link>
                    <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                </button>
            </div>
        </div>
        <div className='w-[500px]  hidden  relative lg:flex items-center rounded-full h-[500px]'>
           <Image src={images} alt='user' layout='fill' className='object-cover rounded-full'></Image>
        </div>
       
      </div>
    </div>
  )
}

export default Hero