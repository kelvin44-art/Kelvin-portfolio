import React from 'react'
import html_logo from '../assets/html.png'
import css_logo from '../assets/css.png'
import js_logo from '../assets/download.png'
import SectionHeader from '../Component/SectionHeader'
import Skills from './Skills'

function Technical() {
  return (
    <section className='mt-10'>
        <div>
           <SectionHeader title={"Technical Skills"} number={"02."}/>
            <hr className='border-dashed'/>
            
            <div className='flex flex-col md:grid md:grid-cols-[1fr_1fr] md:justify-items-center overfow-hidden'>         
            
                <Skills title={"WEB DEVELOPMENT"} skill1={"INTERACTION"} skill2={"RESPONSIVE"} 
                    langauge1={"HTML"} langauge2={"CSS"} langauge3={"JAVASCRIPT"}/>
                <Skills title={"FRONTEND DEVELOPMENT"} skill1={"UI/UX"} skill2={"FRAMEWORKS"} 
                    langauge1={"REACT"} langauge2={"JAVASCRIPT"} langauge3={"TAILWINDCSS"}/>
                <Skills title={"BACKEND DEVELOPMENT"} skill1={"SECURE"} skill2={"API"} 
                    langauge1={"EXPRESS JS"} langauge2={"TYPESCRIPT"} langauge3={"JAVA"}/>
                <Skills title={"DATABASE MANAGEMENT"} skill1={"MODULAR"} skill2={"SCALABLE"} 
                    langauge1={"MONGO DB"} langauge2={"MY SQL"} langauge3={"TAILWINDCSS"}/>
            </div>
        </div>
        
    </section>
  )
}

export default Technical