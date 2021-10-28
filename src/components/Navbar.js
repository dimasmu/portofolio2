import React from 'react'
// FONT AWESOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons' 
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" style={{ paddingLeft: 10 }} href="Logo">Portofolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        < FontAwesomeIcon icon={faBars}/>
                    </button>
                    <div className="collapse navbar-collapse" style={{ height : '3.75rem' }} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span className="sr-only">Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">How work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portofolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacts</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar