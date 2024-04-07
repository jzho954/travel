import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Country from '../components/Country'
import AboutImage from '../assets/colombia1.jpg'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImage={AboutImage}
        title="Welcome to my travel website"
        text={<span role="img" aria-label="Colombia Flag">🇨🇴</span>}
        btnText = "See where I've been"
        url = "/countries"
        btnClass ="show"
        />
        <Country />
        <Trip />
        <Footer />
    </>
  )
}

export default Home