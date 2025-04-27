import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'


const Ours = () => {
  return (
    <motion.div
    initial={{opacity: 0, x: -200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: true}}
    
    className='flex flex-col items-center justify-center
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
    id='about'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
            About <span className='underline underline-offset-4 decoration-1 font-light'> 
            Our Brand </span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>
            Obsessed with helping you grow your business.</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.ours} alt="" className='w-full sm:w-1/2 max-w-lg' />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>4+</p>
                        <p>Years of Experience</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>5+</p>
                        <p>Teams Member</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>3+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                   <p className='my-10 max-w-lg'>At WebDevSof, we believe that every great business starts with a dream and that dream deserves the right technology to grow.
                   With over 5 years of experience in the tech industry, we've worked across multiple areas to provide complete solutions tailored to real needs.
                  </p>
                  <a href='#contact' className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</a>
            </div>
        </div>
    </motion.div>
  )
}

export default Ours