import Hero from "../Component/Hero"
import SectionHeader from "../Component/SectionHeader"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Projects from "./Projects"
import Technical from "./Technical"


function Home() {
  return (
    <div className="overflow-x-hidden w-screen">
        <Hero/>
        <hr className="h-10 mt-10"/>
        <About/>
        <Technical/>
       
        <Projects/>
        <SectionHeader title={"Contact me"} number={"04."}/>
         <Contact/>
         <Footer/>
    </div>
  )
}

export default Home