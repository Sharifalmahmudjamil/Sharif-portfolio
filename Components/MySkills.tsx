
import Image from 'next/image'
import React from 'react'
import html from '../public/images/html-5-2-removebg-preview.png'
import css from '../public/images/css-4-removebg-preview.png'
import tailwind from '../public/images/Tailwind.webp'
import javascript from '../public/images/javascript.png'
import react from '../public/images/download (2).png'
import node from '../public/images/node.js.jpg'
import express from '../public/images/Express.js.png'
import mongo from '../public/images/Mongodb (2).png'
const MySkills = () => {
  return (
    <div>
       <div id='skills' className="bg-slate-950 overflow-x-hidden">
            <h1 className="text-5xl font-medium text-center mt-5 text-teal-400 ">My Skills</h1>
            <span className='w-[280px] hidden md:block h-[5px] bg-teal-500 rounded-sm mb-4 mx-[39%] mt-5'></span>

            <h1 className='text-2xl font-bold uppercase text-teal-400 mb-[1rem] lg:mx-10 mt-5'>Frontend</h1>
                <span className='w-[130px] md:block h-[5px] bg-teal-500 rounded-sm mb-4 lg:mx-10'></span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mx-auto">
                <div className="card w-52 bg-slate-800 shadow-lg shadow-orange-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                    <figure className="px-10 pt-10">
                     <Image src={html} alt='html'></Image>
                    
                    </figure>
                    <span className='w-[185px]  md:block h-[7px] bg-orange-500 rounded-sm mb-4 mt-5'></span>
                    
                </div>
             

             <div className="card w-52 bg-slate-800 shadow-lg shadow-sky-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                    <figure className="px-10 pt-10">
                      <Image src={css} alt='css'></Image>
                    </figure>
                    <span className='w-[160px]  md:block h-[7px] bg-blue-500 rounded-sm mb-4 mt-5'></span>
                </div>  
            
                <div className="card w-52 bg-slate-800 shadow-lg shadow-indigo-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                    <figure className="px-10 pt-10">
                      <Image src={tailwind} alt='tailwind'></Image>
                    </figure>
                    <span className='w-[200px]  md:block h-[7px] bg-indigo-500 rounded-sm mb-4 mt-5'></span>
                </div>
                <div className="card w-52 bg-slate-800 shadow-lg shadow-yellow-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                    <figure className="px-10 pt-10">
                      <Image src={javascript} alt='javascript'></Image>
                    </figure>
                    <span className='w-[150px]  md:block h-[7px] bg-yellow-500 rounded-sm mb-4 mt-5'></span>
                </div>

                <div className="card w-52 bg-slate-800 shadow-lg shadow-sky-300/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                    <figure className="px-10 pt-10">
                       <Image src={react} alt='react'></Image>
                    </figure>
                    <span className='w-[150px]  md:block h-[7px] bg-cyan-400 rounded-sm mb-4 mt-5'></span>
                </div>
             
            </div>
            {/* backend */}
            <h1 className='text-2xl font-bold uppercase text-teal-400 mb-[1rem] lg:mx-10 mt-6'>Backend</h1>
                <span className='w-[130px] md:block h-[5px] bg-teal-500 rounded-sm mb-4 lg:mx-10'></span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto'>
                  {/* Node.js */}
                <div className="card w-52 bg-slate-800 shadow-lg shadow-green-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                    <figure className="px-10 pt-10">
                        <Image src={node} alt='node'></Image>
                    </figure>
                    <span className='w-[130px]  md:block h-[7px] bg-lime-500 rounded-sm mb-4 mt-5'></span>
                </div>
                {/* Express.js */}
                <div className="card w-52 bg-slate-800 shadow-lg shadow-green-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                    <figure className="px-10 pt-10">
                        <Image src={express} alt='node'></Image>
                    </figure>
                    <span className='w-[110px]  md:block h-[7px] bg-gray-600 rounded-sm mb-4 mt-5'></span>
                </div>
                {/* mongodb */}
                <div className="card w-52 bg-slate-800 shadow-lg shadow-green-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                    <figure className="px-10 pt-10">
                        <Image src={mongo} alt='node'></Image>
                    </figure>
                    <span className='w-[160px]  md:block h-[7px] bg-green-700 rounded-sm mb-4 mt-5'></span>
                </div>

                </div>
        </div>
      
    </div>
  )
}

export default MySkills