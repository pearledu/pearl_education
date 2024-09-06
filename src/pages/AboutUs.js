import React from 'react';
import Footer from '../components/footer';
import TitleBar from '../components/TitleBar';
import Welcome from '../components/AboutUs/Welcome';
import OurStory from '../components/AboutUs/OurStory';
import OurServices from '../components/AboutUs/OurServices';
import OurApproach from '../components/AboutUs/OurApproach';
import OurCommitment from '../components/AboutUs/OurCommitment';
import Button from '../components/Button';
import '../css/AboutUs/AboutUs.css';




const AboutUs = () => {
  return (
    <>
      <div>
      <TitleBar textColor="#000000" colorCode="#14aca0" titleText="About Us" />
      </div>
      <Welcome />
      <OurStory />
      <OurServices />
      <OurApproach />
      <OurCommitment />
      <div class="contact-button">
          <Button redirectTo="/contact-us" onClick={() => window.scrollTo(0, 0)}>Contact Us</Button>
      </div>
      <Footer />
      
    
    </>
  );
};

export default AboutUs;