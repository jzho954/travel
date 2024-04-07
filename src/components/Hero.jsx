import React from 'react'
import "./HeroStyles.css"

const Hero = (props) => {
  return (
    <div className={props.cName}>
        <img alt="home-page" src={props.heroImage} loading="lazy"/>
        <div className='hero-text'>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.text}
            </p>
            {props.showButton && (
                <button className="scroll-button" onClick={props.scrollToVideo}>
                    {props.btnInfo || "Scroll to Video"} 
                </button>
            )}
            <a href={props.url} className={props.btnClass}>
                {props.btnText}
            </a>
        </div>
    </div>
  )
}

export default Hero
