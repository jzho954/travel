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
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-youtube-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Other Links</h4>
                <a href="/">__ project</a>
                <a href="/">__ project</a>
                <a href="/">__ project</a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer