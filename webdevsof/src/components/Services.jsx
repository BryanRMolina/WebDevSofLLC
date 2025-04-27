import React from 'react'
import {services} from '../assets/assets'
import {motion} from 'framer-motion'

const Services = () => {
  return (
    <motion.div 
    initial={{opacity: 0, y: 100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    
    
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='services'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Our <span className='underline underline-offset-4 decoration-1 under font-light'> Services</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Different areas, same quality.</p>

        <div className='flex flex-wrap justify-center gap-8 space-x-4'>
          {services.map((service, index) => (
            <motion.div 
            whileHover={{ scale: 1.1 }}
          key={index} className='max-w-[340px] border border-gray-100 shadow-lg rounded px-8 py-12 text-center'>
              <img className='w-20 h-20  mx-auto mb-4' src={service.img} alt={service.img}/>
              <div>
                <h2 className='text-xl font-bold'>{service.type}</h2>
                <p className='text-gray-500'>{service.about}</p>
              </div>
              <div className='mt-4'>
                <a href='#contact' className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>Send Message</a>
              </div>
              </motion.div>
          ))}
        </div>
    
    </motion.div>
  )
}

export default Services