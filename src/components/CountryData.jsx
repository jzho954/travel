import React from 'react'
import './CountryStyles.css'
import { Component } from 'react'
import Thai2 from '../assets/thai2.jpg'
import Thai3 from '../assets/thai3.jpg'
import Viet1 from '../assets/vietnam1.jpg'
import Viet2 from '../assets/vietnam2.jpg'

class CountryData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className='country1-text'>
                <h2>
                    {this.props.heading}
                </h2>
                <p>
                    {this.props.description}
                </p>
            </div>
                <div className='images'>
                <img src={this.props.img1} alt="Thailand" loading="lazy" />
                <img src={this.props.img2} alt="Thailand" loading="lazy" />
                    
                
                </div>
        </div>     
        )
    }
}

export default CountryData