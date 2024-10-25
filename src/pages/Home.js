import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import TitleBar from '../components/TitleBar';
import Footer from '../components/footer';
import Button from '../components/Button';
import Menu from '../components/menu';
import '../css/Home/home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonials from '../components/home/Testimonials.js';
import embarkBanner from '../images/embark_banner.png';
import heroBanner1 from "../images/hero-banner-1.jpg";
import heroBanner2 from "../images/hero-banner-2.jpg";
import heroBanner3 from "../images/hero-banner-3.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {

  useEffect(() => {
    var hoverTimeout;

    $('.why-choose-card').hover(
      function () {
        var element = $(this);
        hoverTimeout = setTimeout(function () {
          element.stop().animate({ height: "100%" }, 4000); // Animation duration is 4000 milliseconds
          element.find('p, h3').css({
            overflow: "",
            whiteSpace: "",
            textOverflow: ""
          });
          element.find('.downArrow').html('&#9650;'); // Set the up arrow
        }, 1000); // Add a delay of 1000 milliseconds before starting the animation
      },
      function () {
        clearTimeout(hoverTimeout);
        var element = $(this);
        element.stop().animate({ height: "200px" }, 400); // Animation duration for collapse is 400 milliseconds
        element.find('p, h3').css({
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis"
        });
        element.find('.downArrow').html('&#9660;'); // Set the down arrow
      }
    );
  }, []);

  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRefs.current && !cardRefs.current.some(ref => ref && ref.contains(event.target))) {
        setActiveCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = (index) => {
    setActiveCard(index);
  };

  return (
    <>
      <div className="hero-banner-container">
        <div className="hero-banner">
          <Carousel
            autoPlay={false}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showArrows={true}
          >
            <div className="slide">
              
              <h2>Get Started With Pearl Education</h2>
              <p>Take the next step in your academic journey with Pearl Education—contact us today to learn how we can help you achieve your goals, because your success is our mission.</p>
              <img src={heroBanner1} alt="Special Offer 1" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="slide">
              <h2>Hear from Our Satisfied Clients</h2>
              <p> Discover the success stories and testimonials from parents and students who have benefited from our dedicated tuition services.</p>
              <img src={heroBanner2} alt="Hear from Our Satisfied Clients" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="slide">
              <h2>Seamless Communication</h2>
              <p>Stay connected with our dedicated team through efficient email communication, ensuring all your queries and concerns are addressed promptly.</p>
              <img src={heroBanner3} alt="Seamless Communication" style={{ width: '100%', height: 'auto' }} />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="services">
        <h2>Services</h2>
        <div className="service-cards">
          <div
            className={`service-card ${activeCard === 0 ? 'show-more' : ''}`}
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <h3>Experienced Tutors</h3>
            <p>Our passionate team of qualified tutors brings extensive knowledge and expertise to each session, providing personalized tutoring tailored to each student's unique needs and learning style to help them achieve their full potential.</p>
            <Button className="service-btn" onClick={() => handleButtonClick(0)}>Learn More</Button>
            <div className="more-info">
              <h4>Additional Information:</h4>
              <p>Our tutors specialize in Math, Science, and Humanities, and have a proven track record of helping students improve their grades and build confidence in their academic abilities.</p>
            </div>
          </div>
          <div
            className={`service-card ${activeCard === 1 ? 'show-more' : ''}`}
            ref={(el) => (cardRefs.current[1] = el)}
          >
            <h3>Flexible Learning Modes</h3>
            <p>We offer both online and in-person one-on-one tutoring options to accommodate our students' diverse needs, with flexible scheduling that fits seamlessly into busy lives.</p>
            <Button className="service-btn" onClick={() => handleButtonClick(1)}>Learn More</Button>
            <div className="more-info">
              <h4>Additional Information:</h4>
              <p>Online sessions use interactive tools to enhance learning, while offline sessions provide face-to-face interaction, letting you choose the mode that best suits your preferences and learning style.</p>
            </div>
          </div>
          <div
            className={`service-card ${activeCard === 2 ? 'show-more' : ''}`}
            ref={(el) => (cardRefs.current[2] = el)}
          >
            <h3>Supportive Environment</h3>
            <p>We foster a positive and supportive learning environment that encourages students to excel, build confidence, and develop a love for learning, while providing a safe space for questions and exploration.</p>
            <Button className="service-btn" onClick={() => handleButtonClick(2)}>Learn More</Button>
            <div className="more-info">
              <h4>Additional Information:</h4>
              <p>Our approach combines academic support with emotional encouragement, fostering a supportive environment that is essential for helping students achieve their best.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose">
        <h2>Why Choose Pearl Education</h2>
        <div className="why-choose-cards">
          <div className="why-choose-card">
            <h3>Success in standardized tests is vital for academic and professional progress. We offer specialized preparation for:</h3>
            <h3>IELTS</h3>
            <p>Our IELTS courses focus on enhancing language proficiency and test-taking strategies to help students achieve their desired scores.</p>
            <h3>CELPIP</h3>
            <p>Our targeted instruction and practice sessions ensure students are well-prepared to excel in the CELPIP exam.</p>
            <div className="downArrow">&#9660;</div>
          </div>
          <div className="why-choose-card">
            <h3>Comprehensive Subject Coverage</h3>
            <h3>Test Preparation</h3>
            <p>From foundational subjects to advanced topics, we’ve got you covered:</p>
            <h3>English</h3>
            <p>Improve your language skills with our expert guidance in grammar, writing, and literature analysis.</p>
            <h3>Mathematics</h3>
            <p>Master math concepts from basic arithmetic to advanced calculus with our simplified and engaging tutoring.</p>
            <h3>Computer Science:</h3>
            <p>We provide in-depth tutoring in programming, coding, and computer fundamentals, equipping students with essential skills for the digital age.</p>
            <h3>Physics:</h3>
            <p>Our physics tutors simplify intricate theories and principles, making it easier for students to understand and apply them.</p>
            <h3>Chemistry: </h3>
            <p>We break down challenging chemical concepts and reactions, ensuring students can grasp and excel in this crucial science subject.</p>
            <div className="downArrow">&#9660;</div>
          </div>
          <div className="why-choose-card">
            <h3>Proven Success</h3>
            <p>Our students consistently achieve high academic performance and gain the confidence to pursue their educational and career goals. Join our community of successful learners and start your journey towards excellence today.</p>
            <div className="downArrow">&#9660;</div>
          </div>
        </div>
      </div>

      <div className="embark-journey">
        <h2>Embark Your Journey</h2>
        <div className="embark-journey-card">
          <img className="embark_banner" src={embarkBanner} alt="Descriptive text here" />
          <p>Unlock your full potential with Pearl Education, your trusted partner in academic excellence. We provide personalized, high-quality tutoring for students from Lower Kindergarten (LKG) to undergraduate levels. Whether you need help with core subjects or are preparing for important language proficiency exams, Pearl Education is here to guide you every step of the way.</p>
          
          <Button className="contact-btn" redirectTo="/contact-us" onClick={() => window.scrollTo(0, 0)}>Contact Us</Button>
        </div>
      </div>

      <div>
        <Testimonials />
      </div>

      <Footer />
    </>
  );
};

export default Home;
