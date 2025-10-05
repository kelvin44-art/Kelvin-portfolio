import SectionHeader from "../Component/SectionHeader"

function About() {
  return (
    <main className="">
       <div className="font-bold text-3xl pl-5">
            <SectionHeader title={"WHO AM I?"} number={"01."}/> 
       </div>
       <hr className="border-dashed h-3 mt-10 ml-3 mr-3"/>
       <p className="ml-3">
            Building digital experiences with purpose and precision.
       </p>
       {/*Table representing Coding projects execution Approach*/}
       <div className="flex md:justify-center">
          <article className="flex flex-col">
                    <div className="table border py-3 px-3 ml-3 mr-5 flex flex-col gap-3 mt-10 w-98">
                    <h1 className="font-bold">VALUES</h1>
                    <hr />
                    <ul className="flex flex-col gap-3 items-center">
                         <li className="value-list"> Quality</li>
          
                         <li className="value-list">Readability</li>

                         <li className="value-list">Innovative </li>

                         <li className="value-list">Impact</li>

                    </ul>
               </div>
               {/*Table representing values */}
               <div className="table border py-3 px-3 ml-3 mr-5 flex flex-col gap-3 mt-10 w-98">
               <h1 className="font-bold">APPROACH</h1>
               <hr />

               <ul className="flex flex-col gap-3">
                         <li> Problem-solving skills first</li>
                         <hr />
                         <li>Clean, maintainable, readable and scalable codes</li>
                         <hr />
                         <li>Performance and SEO optimization </li>
                         <hr />
                         <li>User experience and user interface focus when designing websites</li>
                         <hr />
                    </ul>

               </div>
          </article>
          <div className="table border w-98 ml-3 mt-8 pb-10 md:w-150">
               <h1 className="flex flex-row gap-3 items-center ml-2 mt-2 mb-4"><span className="border-4 py-4 px-3 bg-blue-500 text-white pr-2">01.</span>
                    CORE IDENTITY
               </h1>  
               <hr />
               <p className="mt-9 ml-3 mr-3 mb-10">I am a dedicated Full-Stack Developer with experience working on enterprise-grade software and complex web applications. 
                    My focus is on building scalable, reliable, and impactful solutions that solve real problems for both businesses and users.
                    Over time, I’ve developed a strong ability to navigate complexity, simplify challenges, and turn them into efficient, practical outcomes.
                    I take pride in writing clean, maintainable code and designing systems that can grow and adapt.
                    Beyond the technical side, I enjoy collaborating with teams and contributing to projects that demand creativity and precision.
                    I approach each project with the same drive: to deliver results that are clear, functional, and built to last
               </p>
               <hr />
          </div>
          </div>
         
    </main>
  )
}

export default About