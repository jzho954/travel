import React, { useEffect }from 'react'
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero'
import AboutImage from '../assets/thai.jpg'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'


const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  }, [pathname]);
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