import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Testimonials from '../pages/Testimonials';
import ContactUs from '../pages/ContactUs';
import $ from 'jquery';
import { useEffect } from 'react';

function Menu() {


    const scrollToTop = () => 
    {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

  

    const toggleMenu = () => {
        $('nav').slideToggle();
      };


      


      useEffect(() => {

        

        const handleScroll = () => 
        {
            if (window.scrollY > 20) 
            {
                document.querySelector('.mainMenu').classList.add('mainMenuSticky');
           
            } else {
                document.querySelector('.mainMenu').classList.remove('mainMenuSticky');
            }

             if (window.scrollY > 500) 
            {
                document.querySelector('.goUpButton').classList.add('goUpButtonShow');
            }
            else 
            {
                document.querySelector('.goUpButton').classList.remove('goUpButtonShow');
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };



    }, []);
      

    return (
        <Router>
            <div className="mainMenu">

                <div class="menu-icon" id="menu-icon" onClick={toggleMenu}> &#9776; </div>

                
                    <div className="logo" >
                        <NavLink to="/pearl_education" exact className={ ({ isActive }) => (isActive ? 'active logoNav' : 'logoNav')}></NavLink>
                    </div>
                

                <div class="menuBorder"></div>
                <nav>
 
                    <ul className="menu">
                        <li>
                            <NavLink to="/pearl_education" exact className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'active' : '')}>Testimonials</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
                        </li>
                    </ul>
                </nav>
                

                
            </div>
            
            <div className='goUpButton' onClick={scrollToTop}>
            &#11014;
            </div>

                <Routes>
                    <Route path="/pearl_education" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
        </Router>
    );
}

export default Menu;
