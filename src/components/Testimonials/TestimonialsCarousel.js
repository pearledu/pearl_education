import React, { useState } from 'react';
import '../../css/Testimonials/TestimonialsCarousel.css';
import Button from '../Button';
import placeholder from '../../images/defaultProfilePicture.png';  
import pearl from '../../images/Logo.png';  

const testimonialsData = [
  {
    photo: placeholder,
    text: '“Great teaching service! The lessons are engaging, and have really helped me understand the material better.”',
    name: '- Justin Wilde, Parent',
    date: 'June 2024',
    rating: 5  
  },
  {
    photo: placeholder,
    text: '“Excellent support and teaching methods. My child has improved significantly.”',
    name: '- Sarah Johnson, Parent',
    date: 'July 2024',
    rating: 4
  },
  {
    photo: placeholder,
    text: '“My understanding of math has improved significantly. Thank you, Pearl Education!”',
    name: '- Alex Doe, Student',
    date: 'August 2024',
    rating: 4
  },
  {
    photo: placeholder,
    text: '“Pearl Education greatly benefited my studies and grades!”',
    name: '- Yashvi Sharma, Student',
    date: 'August 2024',
    rating: 4
  }
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
      <h2 className="testimonials-heading">Take a look at what our clients say about us!</h2>
      <div className="carousel-wrapper">

        

        <div className="carousel-slide" style={{ transform: `translateX(-${current * 100}%)` }}>
        
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`slide ${index === current ? 'active' : ''}`}
            >
              <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
              <div className="testimonial-card glass-effect">
                <img
                  src={testimonial.photo}
                  alt="Profile"
                  className="profile-photo"
                />
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-date">{testimonial.date}</p>
              </div>
              <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
            </div>
          ))}
          
        </div>

        

      </div>
      <div className="navigation-dots">
        {testimonialsData.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`dot ${dotIndex === current ? 'active' : ''}`}
            onClick={() => setCurrent(dotIndex)}
          ></span>
        ))}
      </div>
      <Button className="contact-us-button" redirectTo="/contact-us">Contact Us</Button>
    </div>
  );
};

export default TestimonialsCarousel;
