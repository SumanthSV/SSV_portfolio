import React,{useEffect} from 'react'
import Chatbot from '../assets/projects/chatbot.png'
import Calculator from '../assets/projects/calculator.jpg'
import tictoctoe from '../assets/projects/tic-tac-toe.png'
import Planner from '../assets/projects/Planner.png'
import sukalpa from '../assets/projects/Sukalpa.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src:sukalpa,
      desc: "Event : Sukalpa - 24",
      demo: "https://gmu.ac.in/public/sukalpa24",
      code:"", 
    },
    {
      id: 1,
      src: tictoctoe,
      desc: "Tic-Toc-Toe game...",
      demo: "https://sumanthsv.github.io/tic-tac-toe/",
      code: "https://github.com/SumanthSV/tic-tac-toe"
    },
    {
      id: 2,
      src: Planner,
      desc: "Prioritize your work...",
      demo: "https://sumanthsv.github.io/priority_planner/",
      code: "https://github.com/SumanthSV/priority_planner"
    },
    {
      id: 3,
      src: Calculator,
      desc: "simple Calculator...",
      demo: "https://sumanthsv.github.io/Calculator/",
      code: "https://github.com/SumanthSV/Calculator"
    },
    {
      id: 4,
      src: Chatbot,
      desc: "Simple self chatting app",
      demo: "https://sumanthsv.github.io/chatting-app/",
      code: "https://github.com/SumanthSV/chatting-app"
    },
  ]


  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0 '>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="15000" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a target='_blank' href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a target='_blank' href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects