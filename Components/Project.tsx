import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { SiWebstorm } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import html from "../public/images/html-5-2-removebg-preview.png"
import tailwind from "../public/images/Tailwind.webp"
import react from "../public/images/react js.jpg"
import node from "../public/images/node.js.jpg"
import express from "../public/images/Express.js.png"
import mongo from "../public/images/Mongodb (2).png"
import Image from 'next/image';

const Project = () => {
  return (
    <div>
       <div id="project" className="bg-slate-950">
            <h1 className="text-5xl font-medium text-center text-teal-400 ">Projects</h1>
            <span className='w-[280px] hidden md:block h-[5px] bg-teal-500 rounded-sm mb-4 mx-[39%] mt-3'></span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
                {/* 1st project */}
                <div className="card w-96  bg-slate-900 shadow-2xl mx-5 ">
                    <figure>
                    <Carousel className="text-center">
        <div>
            <img src="https://i.ibb.co/4MdpwmW/mingle-match.jpg"/>
           
        </div>
        <div>
            <img src='https://i.ibb.co/7Xccw70/biodata.jpg' />
           
        </div>
        <div>
            <img src='https://i.ibb.co/3yxDyNd/Login.jpg' />
           
        </div>
        <div>
            <img src='https://i.ibb.co/LnCn7SK/contact.jpg' />
           
        </div>
       
        
    </Carousel>
                       </figure>
                    <div className="card-body">
                        <h2 className=" font-semibold text-2xl text-teal-400">Website: Match-Mingle</h2>
                        <p className="text-gray-400 font-medium">Mingle-Match is your one-stop destination to find your life partner. Our online platform connects you with compatible individuals who share your values and goals. Find your perfect match</p>
                        <div className='flex justify-between'>
                        <h2 className='text-lg font-semibold text-teal-400'>Technologies :</h2>
                        <Image src={html} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={tailwind} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={react} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={node} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={mongo} alt='html'className='w-[30px] h-[30px]'></Image>
                        </div>
                    
                        <div className="card-actions justify-between my-3">
                            <button  className="btn btn-outline btn-sm rounded bg-teal-400 text-black">
                               <a href="https://mingle-match-33548.web.app/"> Live Site</a>
                            <SiWebstorm></SiWebstorm>
                            </button>
                            <button className="btn btn-outline btn-sm rounded bg-teal-400 text-black">
                                <a href="https://github.com/Sharifalmahmudjamil/Mingle-Match-Client-Repo">Code</a>
                            <FaCode></FaCode>
                            </button>
                        </div>
                    </div>
                </div>
                {/* 2nd project */}
                <div className="card w-96  bg-slate-900 shadow-2xl mx-5">
                    <figure>
                    <Carousel className="text-center">
        <div>
            <img src="https://i.ibb.co/f9JcPJG/food.jpg"/>
           
        </div>
        <div>
            <img src='https://i.ibb.co/fvhdxjx/food1.jpg' />
           
        </div>
        <div>
            <img src='https://i.ibb.co/M6Ry9Gc/food3.jpg' />
           
        </div>
        <div>
            <img src='https://i.ibb.co/d7KJB2L/food4.jpg' />
           
        </div>
       
        
    </Carousel>
                       </figure>
                    <div className="card-body">
                        <h2 className=" font-semibold text-2xl text-teal-400">Website: FoodShare Network</h2>
                        <p className="text-gray-400 font-medium mt-5">🍲 Join the Food Share Network 🤝 Together, we share a meal, share a smile. Connecting compassionate hearts to share food with those in need. Together, we can make a difference!</p>
                        <div className='flex justify-between'>
                        <h2 className='text-lg font-semibold text-teal-400'>Technologies :</h2>
                        <Image src={html} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={tailwind} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={react} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={node} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={mongo} alt='html'className='w-[30px] h-[30px]'></Image>
                        </div>
                        <div className="card-actions justify-between my-3">
                            <button  className="btn btn-outline btn-sm rounded bg-teal-400 text-black">
                               <a href="https://timely-monstera-4afae1.netlify.app/"> Live Site</a>
                            <SiWebstorm></SiWebstorm>
                            </button>
                            <button className="btn btn-outline btn-sm rounded bg-teal-400 text-black">
                                <a href="https://github.com/Sharifalmahmudjamil/Food-Share-Network-Client-Repo">Code</a>
                            <FaCode></FaCode>
                            </button>
                        </div>
                    </div>
                </div>
                {/* 3rd project */}
                <div className="card w-96  bg-slate-900 shadow-2xl mx-5">
                    <figure>
                    <Carousel className="text-center">
        <div>
            <img src="https://i.ibb.co/v3vcYrx/car.jpg"/>
           
        </div>
        <div>
            <img src='https://i.ibb.co/zhZvwBC/car1.jpg' />
           
        </div>
        <div>
            <img src='https://i.ibb.co/9tbfNDk/car2.jpg' />
           
        </div>
        <div>
            <img src='https://i.ibb.co/WGpsvcq/car3.jpg' />
           
        </div>
       
        
    </Carousel>
                       </figure>
                    <div className="card-body">
                        <h2 className=" font-semibold text-2xl text-teal-400">Website: Auto Motive</h2>
                        <p className="text-gray-400 font-medium">Automotive Website where users can buy many different Types of car.Explore an extensive collection of diverse automobiles at our online automotive hub.Discover the joy of driving with our wide range of cars, available for purchase at your fingertips.</p>
                        <div className='flex justify-between'>
                        <h2 className='text-lg font-semibold text-teal-400'>Technologies :</h2>
                        <Image src={html} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={tailwind} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={react} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={node} alt='html'className='w-[30px] h-[30px]'></Image>
                        <Image src={mongo} alt='html'className='w-[30px] h-[30px]'></Image>
                        </div>
                        <div className="card-actions justify-between my-3">
                            <button  className="btn btn-outline btn-sm rounded bg-teal-400 text-black">
                               <a href="https://automotive-ce653.web.app/"> Live Site</a>
                            <SiWebstorm></SiWebstorm>
                            </button>
                            <button className="btn btn-outline btn-sm rounded bg-teal-400 text-black">
                                <a href="https://github.com/Sharifalmahmudjamil/Automotive-Client-Site-Repo">Code</a>
                            <FaCode></FaCode>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
  )
}

export default Project