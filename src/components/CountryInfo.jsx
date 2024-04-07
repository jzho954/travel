import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import "./CountryInfoStyles.css";

const CountryInfo = (props) => {
  return (
    <div className={`country-info ${props.className}`}>
      <Container className='cont'>
        <h1>{props.heading}</h1>

        <div className="ratio ratio-16x9">
          <iframe src={props.videoUrl} title={props.videoTitle} allowFullScreen></iframe>
        </div>

        <div className='country-image'>
          {props.image1 && <img src={props.image1} alt="Image 1" />}
          {props.image2 && <img src={props.image2} alt="Image 2" />}
          {props.image3 && <img src={props.image3} alt="Image 3" />}
          {props.image4 && <img src={props.image4} alt="Image 4" />}
        </div>
      </Container>
    </div>
  );
};

export default CountryInfo;