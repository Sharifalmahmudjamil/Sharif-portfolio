import React from 'react'

const Education = () => {
  return (
    <div>
       <div id='education' className="bg-slate-950 ">
            <h1 className="text-5xl font-medium text-center text-teal-300 ">Education</h1>
            <span className='w-[280px] hidden md:block h-[5px] bg-teal-500 rounded-sm mb-4 mx-[39%] mt-3'></span>

            <ul className="timeline timeline-vertical mt-5">
                <li>
                    {/* <div className="timeline-start timeline-box">First Macintosh computer</div> */}
                    <div className="timeline-middle text-2xl text-cyan-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                  
                </li>
                <li>
                    <hr className="bg-primary" />
                   {/* hsc */}
                  
                    <div className="timeline-end timeline-box bg-gray-600 font-medium text-white">Higher Secondary Certificate (HSC)
                    <p className="text-center">Dhaka City College</p>
                    <p className="text-center">(2016-2018)</p>
                    </div>
                    
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    {/* bsc */}
                    <div className="timeline-start timeline-box bg-gray-600 font-medium text-white">B.S.C IN Computer Science & Engineering <p><small>Bangladesh Institute Of Science & Technology</small></p>
                    <p className="text-center">(2019-2024)</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                   
                   
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Education