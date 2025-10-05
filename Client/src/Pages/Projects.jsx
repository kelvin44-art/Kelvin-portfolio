import React from 'react'
import temp from '../assets/sss.png'
import SectionHeader from '../Component/SectionHeader'
import ProjectCard from '../Component/ProjectCard'
import carweb from '../assets/screens.png'
import carweb1 from '../assets/screenssh.png'

function Projects() {
  return (
    <section>
        <div>

             <SectionHeader title={"Featured Projects"} number={"04."}/>
            <div className='md:grid md:grid-cols-[1fr_1fr] gap-6'>
               <ProjectCard title={"ONLINE LC WAIKIKI"} temp={temp} description={"I got inspired by a website on album sales where people navigate to a specific room to purchase records. I made an interractive website on the same incorporating local kenyan brands with a touch of…"}/>
                <ProjectCard title={"Tech Charity Platform"} temp={carweb1} description={"Basically a platform that helps to connect underserved community in terms of technology accessibility through getting donation from well wishers and philanthropists. The platform main aim is to gat…"}/>
                <ProjectCard title={"Luxury Car Rental"} temp={carweb} description={"The Website is a simple animated User Interface that allows a user to explore the different types of car available for renting, search based on the model, feature and make year, and book a timeline…"}/>
            </div>
        </div>
    </section>
  )
}

export default Projects