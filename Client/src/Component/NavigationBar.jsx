import React from 'react'
import '../App.css'


function NavigationBar() {
  return (
    <nav className='flex justify-between p-5 font-bold items-center px-10'>
        <div>
            LOGO HERE
        </div>
        <ul className='flex gap-5 sm:hidden md:hidden lg:flex lg:gap-10'>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contacts</li>
        </ul>
        <ul className='flex gap-5  md:hidden lg:flex lg:gap-10'>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
        </ul>
    </nav>
  )
}

export default NavigationBar