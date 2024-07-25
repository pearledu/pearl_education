import React, { useEffect } from 'react';
import TitleBar from '../components/TitleBar';
import Footer from '../components/footer';
import Menu from '../components/menu';
import '../css/Home/home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonials from '../components/Home/Testimonials';


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


  return (
    <>
          <div className="hero-banner-container">
      <div className="hero-banner">
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
        >
          <div className="slide">
            <h2>Get Started With Pearl Education</h2>
            <p>Ready to take the next step in your academic journey? Contact us today to learn more about our services and how we can help you achieve your goals. At Pearl Education, your success is our mission.</p>
          </div>
          <div className="slide">
            <h2>Special Offer 2</h2>
         
            <p>Details about the offer.</p>
          </div>
          <div className="slide">
            <h2>Special Offer 3</h2>
            
            <p> Details about the offer.</p>
          </div>
        </Carousel>
      </div>
    </div>

      <div className="services">
        <h2>Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Experienced Tutors</h3>
            <p>Our team of highly qualified tutors brings extensive knowledge and expertise to each session. They are passionate about teaching and committed to helping students achieve their full potential.</p>
            <button className="service-btn">Learn More</button>
            <div className="more-info">Additional information about Service 1.</div>
          </div>
          <div className="service-card">
            <h3>Flexible Learning Modes</h3>
            <p>To accommodate the diverse needs of our students, we offer both online and offline one-on-one tutoring options. Whether you prefer the convenience of online sessions or the traditional in-person experience, we have the right solution for you.</p>
            <button className="service-btn">Learn More</button>
            <div className="more-info">Additional information about Service 2.</div>
          </div>
          <div className="service-card">
            <h3>Supportive Environment</h3>
            <p>We create a positive and encouraging learning atmosphere that motivates students to strive for excellence. Our supportive environment helps build confidence and fosters a love for learning.</p>
            <button className="service-btn">Learn More</button>
            <div className="more-info">Additional information about Service 3.</div>
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
            <h3>Comprehensive Subject Coverage</h3>
          </div>
          <div className="why-choose-card">
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
          </div>

          <div className="why-choose-card">
            <h3>Proven Success</h3>
            <p>Our students consistently achieve high academic performance and gain the confidence to pursue their educational and career goals. Join our community of successful learners and start your journey towards excellence today.</p>
          </div>
        </div>
      </div>

      <div className="embark-journey">
        <h2>Embark Your Journey</h2>
        <div className="embark-journey-card">
          <p>Unlock your full potential with Pearl Education, your trusted partner in academic excellence. We provide personalized, high-quality tutoring for students from Lower Kindergarten (LKG) to undergraduate levels. Whether you need help with core subjects or are preparing for important language proficiency exams, Pearl Education is here to guide you every step of the way.</p>
          <button className="contact-btn" >Get in Touch</button>
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
