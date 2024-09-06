import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';



const Footer = () => {
  return (
    
      <footer>

            <div class="footerColumnContainer">

                    <div class="col1">
                        <div class="footer-logo">
                            <NavLink to="/pearl_education" exact className={ ({ isActive }) => (isActive ? 'active logoNav' : 'logoNav')}></NavLink>
                        </div>
                        <h4>Pearl Education</h4>
                        <p>Embark on a path to academic success with Pearl Education, where personalized learning meets excellence.</p>
                    </div>
                    
                    <div class="col2 middle-box">
                        
                        <div>
                            <h4>Links</h4>
                        
                            <ul class="footerMenu">
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
                        </div>    
                        
                    </div>

                    <div class="col3">

                        <h3>Social Media</h3>

                        <div>
                        <a href='https://www.facebook.com/'  target="_blank">
                            <div class="socialMediaIcons fb"></div>
                            </a>
                            <a href='https://www.instagram.com/'  target="_blank">
                            <div class="socialMediaIcons insta"></div>
                            </a>
                            <a href='https://www.linkedin.com/in/pankaj-kumar-rathi-626302169/'  target="_blank">
                            <div  class="socialMediaIcons linkedIn"></div>
                            </a> 
                        </div>

                    </div>

            </div>

            <div class='copyright'>
                <p>© 2024 Pearl Education. All rights reserved.</p>
            </div>

      </footer>
    
  );
};

export default Footer;