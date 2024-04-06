
import React, { useState, useEffect } from 'react';
import Colombia1 from '../assets/col1.jpg'
import Colombia2 from '../assets/col2.jpg'
import Italy1 from '../assets/italy1.jpg'
import Italy2 from '../assets/italy2.jpg'
import './CountryStyles.css'
import CountryData from './CountryData'

const Country = () => {
  
  return (
    <div className='country'>
        <h1>Countries I plan to visit</h1>
        <p> </p>
        <CountryData 
            className='country1'
            heading ={<><span role="img" aria-label="Colombia Flag">🇨🇴</span> Colombia</>}
            description="Colombia has been calling my name lately. I've been drawn to its vibrant culture, friendly people, and stunning landscapes. Learning Spanish has been a passion of mine, and what better place to practice than in Colombia? The food scene sounds incredible too. From what I've seen and heard, Colombia seems like the perfect mix of adventure and relaxation, and I'm excited to explore everything it has to offer."
        
            img1 ={Colombia1}
            img2 ={Colombia2}

            
        />

<CountryData 
className='country1-reverse'
            heading ={<>Italy <span role = "img" aria-label="Italy Flag">🇮🇹</span></>}
            description="Italy has been on my mind a lot lately. I've always been captivated by its rich history, delicious cuisine, and breathtaking landscapes. Learning about the art, architecture, and culture of Italy has only fueled my desire to visit. The thought of wandering through charming cobblestone streets, sipping on espresso in quaint cafes, and indulging in authentic Italian pasta dishes makes me feel like I'm already there. Italy seems like the kind of place where every corner holds a new adventure, and I can't wait to experience it firsthand."
        
            img1 ={Italy1}
            img2 ={Italy2}

            
        />
    </div>
  )
}

export default Country