import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer'
import AboutImage from '../assets/contact.jpg'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar';

const Contact = () => {
  const scrollToVideo = () => {
    const countryInfoElement = document.querySelector('.form-container');
    if (countryInfoElement) {
      countryInfoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const {location} = useLocation();

  useEffect(() => {
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  }, [location]);
  return (
    <>
    <Navbar/>
    <div className="hero-contact-wrapper">
      <Hero 
        cName="hero-contact"
        heroImage={AboutImage}
        title="Contact Me"
        
        
        url = "/countries"
        scrollToVideo={scrollToVideo}
        showButton={true} 
        btnInfo="Click here"
        />
        </div>
        
        <ContactForm />
        
      <Footer />
    </>
    
  )
}

export default Contact