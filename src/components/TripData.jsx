import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./TripStyles.css"; // Import your CSS file

const TripData = (props) => {
  return (
    <Link to={props.link} className='t-card'> {/* Replace "/new-link" with your desired link */}
      <div className='t-image'>
        <img alt="image" src={props.image}/>
      </div>
      <h4>{props.location}</h4>
      <p>{props.text}</p>
    </Link>
  );
}

export default TripData;
