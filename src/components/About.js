import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view'
import bgImg from '../Images/coding.gif';


function About() {
  return (
    <div id="about" className="z-40 pt-1 my-auto">
      <div className="mt-10 max-w-[1240px] mx-auto text-white relative">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center">
        Hey 👋  
        </p>
        <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
        I am Soumyajeet Sarkar, a creative enthusiastic website developer. I am
        currently learning and developing interactive and functioning websites
        using React, an innovative Javascript Frontend Library. React makes web
        developing easier and more convenient compared to it's predecessors, i.e
        HTML. You simply write reusable Javescript functions which are known as
        JSX components and use them as building blocks for the website. React in
        turn converts the JSX code in vanilla HTML and javascript and displays
        on your browser.
        </p>
      </div>
      <div className='w-full h-[590px] static '>
          <img className='w-full h-full object-cover mix-blend-overlay' src={bgImg} alt="/" />
      </div>
      <ScrollIntoView selector = "#tech">
        <p className='text-black text-center text-bold p-10 text-2xl'>Tap to learn about my skills</p>
        <div class='mx-auto pb-20 '>
          
           <FaChevronDown class= "animate-bounce mx-auto text-3xl text-blue-500"/> 
      
        </div>
       </ScrollIntoView>
    </div>
  )
}

export default About

