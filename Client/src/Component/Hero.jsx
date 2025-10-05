import React from 'react'
import '../App.css'
import stu from '../assets/stu.jpeg'

function Hero() {
  return (
    <div className="w-full flex flex-col ml-5 mr-5 mt-10 items-center animate-fadein">
        <div className='flex justify-center flex-col gap-8 items-center mt-10 animate-slideup'>
             <div className='flex items-center gap-20'>
                <div className='flex flex-col gap-10'>
                    <div className='greeting-part flex justify-center transition-all duration-500 hover:scale-105'>HELLO &#9995; MY NAME IS </div>
                    <ul  className='text-6xl flex flex-col gap-3 font-bold items-center'>
                        <li className='surname names transition-all duration-500 hover:scale-105'>WARUINGE</li>
                        <li className='first-name names transition-all duration-500 hover:scale-105'>KELVIN G.</li>
                    </ul>
                </div>
                 <img src={stu} alt="" className='hero-img h-110 transition-all duration-700 hover:scale-105 hover:rotate-2' />
             </div>
             <p className='py-4 px-5 md:w-150'>I'm a passionate Software Engineer  
                 I specialize in building exceptional digital experiences and innovative blockchain solutions. With expertise in web development and blockchain technology,
                 I'm dedicated to pushing the boundaries of what's possible in decentralized gaming and web applications
             </p>
                 <ul className='flex flex-col gap-6 font-bold items-center md:flex-row'>
                     <button className='work-btn bg-cyan-300 transition-all duration-500 hover:bg-cyan-400 hover:scale-105'>View Work</button>
                     <button className='contact-btn transition-all duration-500 hover:bg-gray-200 hover:scale-105'>Contacts</button>
                 </ul>
        </div>
       
    </div>
  )
}

export default Hero