import React from 'react'
import github_logo from '../assets/github.png'
import link_redirect from '../assets/redirect.png'


function ProjectCard({title, description,temp }) {
  return (
    <section className='table border w-98 ml-3 mr-3 md:w-120'>
        <div className='border mr-1 ml-1 mt-1 mb-1'>
            <img src={`${temp}`} alt="" className='px-2 py-3'/>
        </div>
        <hr />
        <article className='flex flex-col gap-5 mt-4 px-3 py-3'>
            <h1 className='font-bold text-2xl'>{title}</h1>

            <hr />
            <p className='flex gap-5'>
                <span className='skills-list'>React</span>
                <span className='skills-list'>Express</span>
                <span className='skills-list'>Mongo DB</span>
            </p>
            <p >{description}</p>
        </article>
        <footer className='flex flex-col items-center mt-4 md:flex-row md:items-center md:px-4 md:gap-2'>
            <button className='bg-cyan-300 border py-1 font-bold w-80'>READ MORE</button>
            <div className='flex gap-10 mt-5 mb-5 md:gap-3 '>
                <img className='h-8' src={github_logo} alt="" />
                <img className='h-8' src={link_redirect} alt="" />
            </div>
        </footer>

        

    </section>
  )
}
 
export default ProjectCard