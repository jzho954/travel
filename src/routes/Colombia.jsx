import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import AboutImage from '../assets/cartagena.jpg'
import ColombiaImage1 from '../assets/CO1.jpg'
import ColombiaImage2 from '../assets/CO4.jpg'
import ColombiaImage3 from '../assets/CO3.jpg'
import ColombiaImage4 from '../assets/CO6.jpg'
import Footer from '../components/Footer'
import CountryInfo from '../components/CountryInfo';



const Colombia = () => {
    const scrollToVideo = () => {
        const countryInfoElement = document.querySelector('.colombia-info');
        if (countryInfoElement) {
          countryInfoElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const {location} = useLocation();

      useEffect(() => {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }, [location]);
    
  return (
    <>
    <Navbar/>
    <Hero 
    cName="colombia-hero"
    heroImage={AboutImage}
    title="Colombia"
    text={<span> Visited: June 24th 2024 - July 10th 2024<br /> <span style={{ fontSize: '2rem' }}>🇨🇴</span></span>}
    url = "/korea"
    scrollToVideo={scrollToVideo}
        showButton={true} 
    />

    <CountryInfo 
     className="colombia-info"
     heading ="Colombia"
     videoUrl = "https://www.youtube.com/embed/lzyxM29emxM" 
     description = "Cartagena is a port city on Colombia’s Caribbean coast. By the sea is the walled Old Town, founded in the 16th century, with squares, cobblestone streets and colorful colonial buildings. With a tropical climate, the city is also a popular beach destination. Reachable by boat are Isla de Barú, with white-sand beaches and palm trees, and the Islas del Rosario, known for their coral reefs."
     videoTitle="Colombia video"
     image1 = {ColombiaImage1}
     image2 = {ColombiaImage2}
     image3 = {ColombiaImage3}
     image4 = {ColombiaImage4}
    />

    <Footer />
    </>
  )
}

export default Colombia