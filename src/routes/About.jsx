import React, { useEffect }from 'react'
import Hero from '../components/Hero'
import AboutImage from '../assets/thai.jpg'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
        
        <Hero 
        cName="hero-about"
        heroImage={AboutImage}
        title="About Me"
        
        
        url = "/countries"
        btnClass ="hide"
        />
        <AboutMe  />
        <Footer />
    </>
  )
}

export default About