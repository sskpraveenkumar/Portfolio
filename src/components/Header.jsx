import React from "react";
import "./Index.css"; // update with your actual CSS file path
import logo from "../files/gemini.png"; // adjust path as needed
import cv from "../../public/assets/PRAVEEN KUMAR S P.pdf"; // adjust path as needed
import './index.css';




const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg dark-black py-3 position-fixed top-0 w-100 z-3">
                <div className="container">
                    <a href="#">
                        <img className="logo" src={logo} alt="Capgemini" width="150" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler"
                    >
                        <i className="fa-solid fa-bars text-white"></i>
                    </button>
                    <div className="navbar-collapse collapse mt-3 mt-lg-0" id="navbarToggler">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-lg-5">
                                <a href="#hero-section" className="nav-link text-white">Home</a>
                            </li>
                            <li className="nav-item me-lg-5">
                                <a href="#about-section" className="nav-link text-white">About</a>
                            </li>
                            <li className="nav-item me-lg-5">
                                <a href="#services-section" className="nav-link text-white">Interests</a>
                            </li>
                            <li className="nav-item me-lg-5">
                                <a href="#portfolio" className="nav-link text-white">Portfolio</a>
                            </li>
                            <li className="nav-item me-lg-5">
                                <a href="#contact-us" className="nav-link text-white">Contact</a>
                            </li>
                            <li className="nav-item mt-3 mt-lg-0">
                                <button className="btn-light rounded-pill px-5">
                                    <a
                                        className="text-dark p-3 px-0 d-inline-block text-decoration-none h4"
                                        href={cv}
                                        download
                                    >
                                        My CV
                                    </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
