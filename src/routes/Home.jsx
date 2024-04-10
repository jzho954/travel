import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Country from '../components/Country'
import AboutImage from '../assets/colombia1.jpg'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
  const scrollToVideo = () => {
    const countryInfoElement = document.querySelector('.test');
    if (countryInfoElement) {
      countryInfoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImage={AboutImage}
        title="Welcome to my travel website"
        text={<span role="img" aria-label="Colombia Flag">🇨🇴</span>}
        
        url = "/countries"
        btnInfo = "See Where I've Been"
        scrollToVideo={scrollToVideo}
        showButton={true} 
        
        />
        <Country />
        <div className='test'></div>
        <Trip />
        <Footer />
    </>
  )
}

export default Home