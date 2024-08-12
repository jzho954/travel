import React from 'react'
import "./FooterStyles.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Mongdom</h1>
                <p>Contact Me</p>
            </div>
            <div>
                <a href="https://linkedin.com/in/jamie-zhou-227451221" target="_blank" >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/jzho954" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-youtube-square"></i>
                </a>
                
                
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Other Links</h4>
                <a href="https://jzho954.github.io/portfolio-new/" target="_blank">Portfolio project</a>
                <a href="https://www.healthstarcalcnz.online/" target="_blank">Health Star Calculator for client</a>
                
                
            </div>
        </div>
    </div>
  )
}

export default Footer