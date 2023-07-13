import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import {FaMap} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BiLogoLinkedinSquare} from 'react-icons/bi';
import {AiFillYoutube} from 'react-icons/ai';
import {AiOutlineBehance} from 'react-icons/ai';
import {HiOutlineSearchCircle} from 'react-icons/hi';
import {BiSolidUser} from 'react-icons/bi';
import {GiVibratingBall} from 'react-icons/gi';
import {BsCart3} from 'react-icons/bs';
import logo from '../assets/logo.png';
import bottle from '../assets/bottle.png';
import line from '../assets/line.png';
import f1 from '../assets/f1.png';

const About = () => {
    return(
        <>
        <div className='header-area  d-none  d-md-block'>
            <Container className='w-1140'>
                <div className='row'>
                    <div className='col-xl-7 col-lg-7 col-md-9'>
                        <div className='header-wrapper'>
                            <div className='heder-text'>
                                <span className='header-text'>
                                    <i>
                                        <FaMap/>
                                    </i>
                                    504 White St . Dawsonville, GA 30534 , New York
                                </span>
                                <span className='p-4 header-text'>
                                    <i>
                                        <FaEnvelope/>
                                    </i>
                                    suport@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-5 col-lg-5 col-md-3'>
                        <div className='header-icon'>
                            <a>
                                <i>
                                    <FaFacebookF/>
                                </i>
                            </a>
                            <a>
                                <i>
                                    <AiOutlineTwitter/>
                                </i>
                            </a>
                            <a>
                                <i>
                                    <BiLogoLinkedinSquare/>
                                </i>
                            </a>
                            <a>
                                <i>
                                    <AiFillYoutube/>
                                </i>
                            </a>
                            <a>
                                <i>
                                    <AiOutlineBehance/>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <div className='main-menu-area'>
            <Container>
                <div className='row align-items-center'>
                    <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                        <div className='logo'>
                            <a>
                                <img src={logo}/>
                            </a>
                        </div>
                    </div>
                    <div className='col-xl-10 col-lg-2 d-none d-xl-block d-lg-block text-right'>
                    <Navbar className='head'  expand="lg">
                        <Container className='w-1140'>
                            <Navbar.Brand className='text3' href="#home "></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                 <Nav className='ms-auto'>
                                    <Nav.Link className='text11' href="#link">Home</Nav.Link>
                                    <Nav.Link className='text11' href="#link">About me</Nav.Link>
                                    <Nav.Link className='text11' href="#link">Services</Nav.Link>
                                    <Nav.Link className='text11' href="#link">Work</Nav.Link>
                                     <Nav.Link className='text  btn-light' href="#link">Contact</Nav.Link>
                                </Nav>  
                            </Navbar.Collapse>
                            <div className='header-right flex '>
                                        <HiOutlineSearchCircle/>
                                        <BiSolidUser/>
                                        <BsCart3/>
                                        <GiVibratingBall/>
                            </div>
                         </Container>
                    </Navbar>
                       
                    </div>
                   
                </div>
            </Container>
        </div>
        
            <div className='slider-height d-flex align-items-center w-100%'>
                <Container className='w-1140'>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <div className='slider-content mt-85'>
                                <h1>
                                Organic Food Is 
                                <br/>
                                 Good For Health
                                </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                <div className='slider-button'>
                                    <a className='btn'>
                                    Our Services
                                    </a>
                                    <a className='btn1'>
                                    Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='about-us-area pt-115 pb-90'>
            <Container className='w-1140'>
                <div className='row w-1140'>
                    <div className='col-lg-6'>
                        <div className='about-us-img mb-30 '>
                            <img src={bottle} className='mt-4'/>
                        </div>
                    </div><div className='col-lg-6'>
                        <div className='about-us-text  mb-30 mt-5'>
                            <h1>
                            Welcome To 
                            <br/>
                            Zomata Organic
                            </h1>
                            <span>with love & dedication</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                            <a className='btn mt-5'>
                            Learn More
                            </a>
                        </div> 
                    </div>
                </div>
            </Container>
            </div>
            <div className='features-area pt-110 pb-90 mt-5'>
                <Container className='w-1140'>
                    <div className='row'>
                        <div className='col-lg-12 mt-5'>
                            <div className='section-title text-center section-circle mb-70'>
                                <div className='section-img'>
                                    <img src={line}/>
                                     <h1 className='text-center'>Our Features</h1>
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor <br/>incididunt ut labore et dolore magna aliqua enim minim veniam</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='features-wrapper text-center mb-30'>
                                    <div className='features-img'>
                                        <img src={f1}/>
                                    </div>
                                    <div className='features-text'>
                                        <h4>Natarul Food</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt ut labore et dolore magna aliqua.</p>
                                        <a>Read More </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </Container>
            </div>
        </>
    )
}

export default About;