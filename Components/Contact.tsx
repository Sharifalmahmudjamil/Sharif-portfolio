import React from 'react'
import Social from './Social'

const Contact = () => {
  return (
    <div id='contact' className='bg-slate-950'>
        <h1 className='text-center text-3xl font-medium text-teal-300 '>Contact</h1>
        <span className='w-[280px] hidden md:block h-[5px] bg-teal-500 rounded-sm mb-4 mx-[39%] mt-3'></span>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                
                <Social></Social>
            </div>
            <div>
            <form  className=''>
            <div className="md:w-[60%]">
                <label className="label">
                    <span className="label-text text-xl font-medium text-teal-200">Name :</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="user_name" placeholder="" className="input input-bordered w-full rounded bg-cyan-200" />
                </label>
                </div>
            <div className="md:w-[60%]">
                <label className="label">
                    <span className="label-text text-xl font-medium text-teal-200">Email :</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="user_email" placeholder="" className="input input-bordered w-full rounded bg-cyan-200" />
                </label>
                </div>
                <h1 className="text-xl font-medium mt-3 text-teal-200">Message:</h1>
                <textarea name="message" placeholder="" className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-3 bg-cyan-200 text-black rounded" ></textarea>
                <div>
                <button className='btn btn-outline btn-sm bg-cyan-300 text-black rounded'><input type="submit" value="Send" /></button>
                </div>
            </form> 
            </div>
      
        </div>
    </div>
  )
}

export default Contact