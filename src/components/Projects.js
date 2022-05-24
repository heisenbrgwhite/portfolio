import React from 'react';

import { ArrowSmRightIcon } from '@heroicons/react/outline';
import {BsChatRightDots} from "react-icons/bs";
import {FcTodoList} from "react-icons/fc";
import valflix from "../logo.png";
import bgImg from '../Images/giphy.gif';
export default function Projects(){
    return (
        <div id="projects" className='w-full mb-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
              <img className='w-full h-full object-cover mix-blend-overlay' src={bgImg} alt="/" />
            </div>
            
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>My Projects</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Find out what I am working on right now!</h3>
                    <p className='py-4 text-3xl text-slate-300'></p>
                </div>
      
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                        <div className='w-16 p-4 bg-black rounded-lg mt-[-4rem] border-white border-2'><img className='object-contain h-[30px]' src={valflix}/></div>
                            <h3 className='font-bold text-2xl my-6'>ValFlix</h3>
                            <p className='text-gray-600 text-xl'>A website I developed with an idea of a Netflix Clone but instead of movies it has all kinds of video content related to my favourite game Valorant. Go check it out!</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'><a href="http://valflix.sarkardev.online">Link to website</a> <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                        
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <div className='w-16 p-4 bg-black text-white rounded-lg mt-[-4rem] border-white border-2' ><BsChatRightDots size={30}/></div>
                            <h3 className='font-bold text-2xl my-6'>A messaging app</h3>
                            <p className='text-gray-600 text-xl'>A messaging app made with M.E.R.N stack for learning purposes. By creating this app I was able to get experience in MongoDB database and Express.js. </p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'><a href="https://my-chat-app-sarkar.netlify.app">MYCHAT-APP</a><ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <div className='w-16 p-4 bg-black rounded-lg mt-[-4rem]  border-white border-2'><FcTodoList size={30} /></div>
                            <h3 className='font-bold text-2xl my-6'>To-Do List Flutter</h3>
                            <p className='text-gray-600 text-xl '>A flutter to-do app I developed using flutter. </p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}