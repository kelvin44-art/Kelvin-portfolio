import React from 'react'
import SectionHeader from '../Component/SectionHeader'
import Platforms from './Platforms'

function Contact() {
  return (
    <div className='w-full flex flex-col md:flex-row gap-10 items-center ml-15' >
        <form action="" className='table border-2 sm:w-98 py-2 px-2 h-140 md:w-110 flex flex-col items-center'>
            <section className='flex gap-4'>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Full name'/>
                </div>
                <div className='flex flex-col gap-4'>
                     <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='email@domain.com'/>
                </div>
            </section>
            <section className='flex flex-col gap-4 py-3'>
                <label htmlFor="">Your Project idea</label>
                    <textarea name="" id=""></textarea>
            </section>
        </form>
        
        
    <Platforms/>

    </div>
    
  )
}

export default Contact