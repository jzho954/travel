import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Navbar from "../components/Navbar";
import bg from "../assets/korea-bgg.jpg";
import Footer from "../components/Footer";

//korea images
import KoreaImage1 from '../assets/korea2.jpg';
import KoreaImage2 from '../assets/korea4.jpg';
import KoreaImage3 from '../assets/korea5.jpg';
import KoreaImage4 from '../assets/korea3.jpg';
import KoreaImage5 from '../assets/food.jpg';
import KoreaImage6 from '../assets/food2.jpg';
import KoreaImage7 from '../assets/hanoi1.jpg';
import KoreaImage8 from '../assets/korea6.jpg';

//colombia images
import ColombiaImage1 from '../assets/CO1.jpg';
import ColombiaImage2 from '../assets/CO2.jpg';
import ColombiaImage3 from '../assets/CO3.jpg';
import ColombiaImage4 from '../assets/CO4.jpg';
import ColombiaImage5 from '../assets/CO5.jpg';
import ColombiaImage6 from '../assets/CO6.jpg';
import ColombiaImage7 from '../assets/CO7.jpg';
import ColombiaImage8 from '../assets/CO8.jpg';

const Photos = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  }, [pathname]);

  const responsive = {
    superLargeDesktop: {
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

  const imageList = [
    { src: KoreaImage1, alt: 'Korean street', caption: 'Korean street' },
    { src: KoreaImage2, alt: 'Winter in Korea', caption: 'Winter in Korea' },
    { src: KoreaImage3, alt: 'Valorant event', caption: 'Valorant event' },
    { src: KoreaImage4, alt: 'Hongdae during winter', caption: 'Hongdae during winter' },
    { src: KoreaImage5, alt: 'Shake Shack in Korea', caption: 'Shake Shack in Korea' },
    { src: KoreaImage6, alt: 'Spanish Restaurant', caption: 'Spanish Restaurant' },
    { src: KoreaImage7, alt: 'Hanoi Train Tracks', caption: 'Hanoi Train Tracks' },
    { src: KoreaImage8, alt: 'First day in Korea', caption: 'First day in Korea' },
    { src: ColombiaImage1, alt: 'Gutape', caption: 'Gutape' },
    { src: ColombiaImage2, alt: 'Cartagena', caption: 'Cartagena' },
    { src: ColombiaImage3, alt: 'Hostel Friends', caption: 'Hostel Friends' },
    { src: ColombiaImage4, alt: 'Communa 13, Medellin', caption: 'Communa 13, Medellin' },
    { src: ColombiaImage5, alt: 'Acai Bowl', caption: 'Acai Bowl' },
    { src: ColombiaImage6, alt: 'Tayrona National Park', caption: 'Tayrona National Park' },
    { src: ColombiaImage7, alt: 'Bogota', caption: 'Bogota' },
    { src: ColombiaImage8, alt: 'Bogota, Mountain', caption: 'Bogota, Mountain' },
  ];

  return (
    <>
      <Navbar />
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
            {imageList.map((image, index) => (
              <div className="item" key={index}>
                <img src={image.src} alt={image.alt} />
                <h5>{image.caption}</h5>
              </div>
            ))}
          </Carousel>
          <img className="background-image-left" src={bg} alt="Image" />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Photos;
