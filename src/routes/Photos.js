import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Navbar from "../components/Navbar";
import KoreaImage1 from '../assets/korea2.jpg'
import KoreaImage2 from '../assets/korea4.jpg'
import KoreaImage3 from '../assets/korea5.jpg'
import KoreaImage4 from '../assets/korea3.jpg'


import KoreaImage5 from '../assets/food.jpg'
import KoreaImage6 from '../assets/food2.jpg'
import KoreaImage7 from '../assets/hanoi1.jpg'
import KoreaImage8 from '../assets/korea6.jpg'
import bg from "../assets/korea-bgg.jpg";
import Footer from "../components/Footer";
const Photos = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 0);
    }, [pathname]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
    <Navbar/>
      <Container className="photo-container">
        <div>
          <h1>Photos</h1>
          <p>Here are some photos I have taken when travelling</p>

          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            <div className="item">
              <img src={KoreaImage1} alt="Image" />
              <h5>Korean street</h5>
            </div>
            <div className="item">
              <img src={KoreaImage2} alt="Image" />
              <h5>Winter in Korea</h5>
            </div>
            <div className="item">
              <img src={KoreaImage3} alt="Image" />
              <h5>Valorant event </h5>
            </div>
            <div className="item">
              <img src={KoreaImage4} alt="Image" />
              <h5>Hongdae during winter</h5>
            </div>

            <div className="item">
              <img src={KoreaImage5} alt="Image" />
              <h5>Shake Shack in Korea</h5>
            </div>
            <div className="item">
              <img src={KoreaImage6} alt="Image" />
              <h5>Spanish Restaurant</h5>
            </div>
            <div className="item">
              <img src={KoreaImage7} alt="Image" />
              <h5>Hanoi Train Tracks</h5>
            </div>
            <div className="item">
              <img src={KoreaImage8} alt="Image" />
              <h5>First day in Korea</h5>
            </div>

           
          </Carousel>
          <img className="background-image-left" src={bg} alt="Image" />
        </div>
        
      </Container>
      <Footer/>
    </>
  );
};

export default Photos;
