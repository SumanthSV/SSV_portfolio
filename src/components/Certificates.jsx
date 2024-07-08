import React,{ useEffect } from "react"
import c from '../assets/certificate/C_nptel.jpg'
import java from '../assets/certificate/java_hr.jpg'
import ps from '../assets/certificate/problem_solving.jpg'
import gen_ai from '../assets/certificate/gen_ai.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Certificates = () =>{
    useEffect(()=>{
        AOS.init({duration:1000})
    })

    const Cert=()=>[
        {
            id:1,
            src:c,
            title:'Intro.. to c',
            issued:"https://nptel.ac.in/noc/E_Certificate/NPTEL23CS02S4440018203121906",
        },
        {
            id:2,
            src:java,
            title:'Java',
            issued:"https://www.hackerrank.com/certificates/543a87a08bfd?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate",
        },
        {
            id:3,
            src:ps,
            title:'Problem Solving',
            issued:"https://www.hackerrank.com/certificates/db10a75ce316",
        },
        {
            id:4,
            src:gen_ai,
            title:'Generative AI',
            issued:"https://www.cloudskillsboost.google/public_profiles/f7f0dca3-4443-4c98-8913-3790670848a3/badges/5780754",
        }
    ]

    return (
        <div name="certificates" className='h-auto   bg-gradient-to-b from-black to-gray-800 w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400 '>Certificates</h2>
          <p className='py-6'> I am certified in following programming languages  and technologies.</p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-2 mb-20 gap-16 px-12 sm:px-0 '>
          {
            Cert().map(({ id, src, title, issued}) => (

              // <div data-aos="fade-in" data-aos-duration="15000" key={id} className='shadow-md shadow-green-600 rounded-lg'>
              //   <img src={src} alt="Loading" className='rounded-md duration-200 hover:scale-105' style={{position: 'absolute', top: 0, left: 0, width: '100%',opacity:0.8}} />
              //   <p className='p-2 text-justify font-extralight md:text-center '>{title}</p>
              //   <div className='flex items-center justify-center'>
                  
              //     <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
              //       <a target='_blank' href={issued}>View</a>
              //     </button>
              //   </div>
              // </div>

              <div data-aos="fade-in" data-aos-duration="15000" key={id} className=''> <div className='relative overflow-hidden'> <img src={src} alt="Loading" className='rounded-md duration-200 hover:scale-105 w-full' /> <div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-950 to-green-20 opacity-0.7'></div> <div className=' absolute bottom-10 left-2.5 w-full  text-white'> <p className='text-left text-xl'>{title}</p> </div> </div> <div className='flex items-center justify-end absolute bottom-0 right-0 w-full bg-gradient-to-t from-green-600 to-transparent rounded-lg'> <button className='px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'> <a target='_blank' href={issued}>View</a> </button> </div> </div>


            ))
          }
        </div>
      </div>
    </div>
    )

}

export default Certificates