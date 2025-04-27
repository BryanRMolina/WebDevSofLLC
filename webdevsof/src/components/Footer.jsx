import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img className='w-20 h-20 rounded-full mx-auto mb-4' src={assets.Logo1} alt="" />
                <p className='text-gray-400 mt-4'>"The people who are crazy enough to think they can change the world are the ones who do."
                — Steve Jobs</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#header" className='hover:text-white'>Home</a>
                </ul>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#services" className='hover:text-white'>Services</a>
                </ul>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#about" className='hover:text-white'>About Us</a>
                </ul>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#projects" className='hover:text-white'>Projects</a>
                </ul>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#contact" className='hover:text-white'>Contacts</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Location</h3>
                <p className='text-gray-400 mb-4 max-w-80'>6901 Johnson St, Hollywood, FL 33024</p>
                <div className='flex gap-4'>
                    <img className='w-6 h-6' src={assets.insta} alt="" />
                    <img className='w-6 h-6' src={assets.linkedin} alt="" />
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            Copyright 2025 @ WebDevSofLLC All rights reserved. <br />
        </div>
    </div>
  )
}

export default Footer