import React from 'react'
import ReactTyped from 'react-typed'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development site promotion</h1>
                <ReactTyped 
                className="typed-text" strings={["Web Developer","Web design"]} typeSpeed={40} backSpeed={50} loop>
                </ReactTyped>
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header