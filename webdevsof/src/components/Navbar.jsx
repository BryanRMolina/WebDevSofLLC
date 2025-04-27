import React from 'react'
import {assets} from '../assets/assets'


const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if(open){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    },[open])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between 
        items-center py-2 px-7 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.LogoHeader} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#header" className='cursor-pointer hover:text-gray-400'>
                    Home</a>
                <a href="#services" className='cursor-pointer hover:text-gray-400'>
                    Services</a>
                <a href="#projects" className='cursor-pointer hover:text-gray-400'>
                    Projects</a> 
                <a href="#about" className='cursor-pointer hover:text-gray-400'>
                    About Us</a>      
            </ul>
            <a href="#contact" className='hidden md:block bg-white px-8 py-2 rounded-full'>Contact Us</a>
            <img onClick={()=> setOpen(true)} src={assets.menu} className='md:hidden w-7' alt="" />
        </div>

        {/* -- Mobile Menu -- */}

        <div className={`md:hidden ${open ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=> setOpen(false)} src={assets.cross} className='w-6' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={()=> setOpen(false)} href="#header" className='px-4 py2 rounded-full inline-block'>
                    Home</a>
                <a onClick={()=> setOpen(false)} href="#services" className='px-4 py2 rounded-full inline-block'>
                    Services</a>
                <a onClick={()=> setOpen(false)} href="#projects" className='px-4 py2 rounded-full inline-block'>
                    Projects</a> 
                <a onClick={()=> setOpen(false)} href="#about" className='px-4 py2 rounded-full inline-block'>
                    About Us</a>
                <a onClick={()=> setOpen(false)} href="#contact" className='px-4 py2 rounded-full inline-block'>
                    Contact Us</a>            
            </ul>
        </div>

    </div>
  )
}

export default Navbar
