import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';


function Footer() {
  return (
    <footer className={`py-5 flex flex-col w-full bg-white border-gray-primary`} id="footer">
            <div className="flex align-center justify-center mt-4">
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/heisenbrgwhite">
                <FaGithub />
                <span class="sr-only">Github</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300" href="https://linkedin.com/in/soumyajeet-sarkar-0aa39b217">
                <FaLinkedin />
                <span class="sr-only">Linkedin</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://www.instagram.com/mr_whytt_/">
                <FaInstagram />
                <span class="sr-only">Instagram</span>  
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mailto:sarkar099@outlook.com">
                <FaRegEnvelope />
                <span class="sr-only">Email</span>  
              </a>
             
             
            </div>
            <div className='grid-cols-5 text-center items-center mx-auto' >
              <div className="col-span-2">
                  Made with 
                  <a className=' col-span-1 text-blue-900 cursor-pointer font-bold' href="https://reactjs.org/"><span role="icon" aria-label="react"> React.Js <FaReact className='inline'/> </span></a>
                  by 
                  <a className="col-span-2 text-blue-500 hover:underline" href="https://linkedin.com/in/soumyajeet-sarkar-0aa39b217"> Soumyajeet Sarkar</a>
              </div>
              </div>
    </footer>
  )
}

export default Footer
//className="text-black mb-4"
//className="flex"
//className='text-blue-900 cursor-pointer font-bold'
//className="text-blue-500 hover:underline"