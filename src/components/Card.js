import React from "react";
import profile from '../Images/sarkar.JPG';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from 'react-icons/fa';

function Card({scroll}) {
    return(
        <div className="block w-full z-10 mt-10">
             <div className={`flex flex-col justify-center ${scroll ? "w-full" :"max-w-xs rounded-xl mx-auto"}  bg-white shadow-2xl p-5`}>
                <div className = "object-contain">
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile face" />

                </div>
                <div className="text-center mt-5">
                    <p className='text-xl sm:text-2xl font-semibold text-gray-900'>
                        Soumyajeet Sarkar
                    </p>
                    <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                       React Developer / Programmer

                    </p>
                    <div className="flex align-center justify-center mt-4">
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="#!">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mailto:sarkar099@outlook.com">
              <FaRegEnvelope />
              <span class="sr-only">Email</span>  
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://linkedin.com/in/soumyajeet-sarkar-0aa39b217">
              <FaLinkedin />
              <span class="sr-only">Linkedin</span>  
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card; 
