import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  const links=[
    {
        id:1,
        child: (
            
            <>
            LinkedIn <FaLinkedin  size={30}></FaLinkedin> 
            </> 
        ),
        href:'https://www.linkedin.com/in/sharifalmahmud/',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child: (
            
            <>
            Github <FaGithub  size={30}></FaGithub> 
            </> 
        ),
        href:'https://github.com/Sharifalmahmudjamil',
        
    },
    {
        id:3,
        child: (
            
            <>
            Mail <MdEmail  size={30}></MdEmail> 
            </> 
        ),
        href:'mailto:smjamil111@gmail.com',
        
    },
    {
        id:4,
        child: (
            
            <>
            Resume <BsFillPersonLinesFill  size={30}></BsFillPersonLinesFill> 
            </> 
        ),
        href:'../public/Resume/Sharif-Al-Mahmud.pdf',
        style:'rounded-br-md',
        download:true
    },
]
  return (
    <div>
       <div className="flex flex-col top-[35%] left-0 ">
            <ul>
                {
                    links.map(({id,child,href,style,download})=>(
                        <li key={id} className={"flex justify-between items-center w-40 h-14  px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-cyan-400"+ " "+ style}>
                        <a 
                        className="flex justify-between items-center w-full text-black" 
                        href={href}
                        download={download}
                        target="blank"
                        
                        > 

                        {child} 
                        </a>
                        </li>
                    ))
                }
              
            </ul>
        </div>
    </div>
  )
}

export default Social