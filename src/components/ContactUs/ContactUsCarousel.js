
import React from 'react';
import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import "../../css/ContactUs/contactUsCarousel.css"
import person1 from "../../images/defaultProfilePicture.png"

const ContactUsCarousel = () => {


  useEffect(() => {
    var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      speed: 600,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 10,
        stretch: 600,
        depth: 50,
        modifier: 1,
        slideShadows: false,
      },
      on: {
        click(event) 
        {
          swiper.slideTo(this.clickedIndex);
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }, []);

  return (
    <div className="left-content">
      <div className="slider-container">
        <div className="swiper">
          <div
            className="swiper-wrapper"
            aria-live="polite"
            style={{
              cursor: 'grab',
              transitionDuration: '0ms',
              transform: 'translate3d(-445px, 0px, 0px)',
              transitionDelay: '0ms',
            }}
          >
            <div
              className="swiper-slide"
              role="group"
              aria-label="1 / 6"
              data-swiper-slide-index="0"
              style={{
                transitionDuration: '0ms',
                transform: 'translate3d(240px, 0px, -400px) rotateX(0deg) rotateY(20deg) scale(1)',
                zIndex: -1,
              }}
            >
              <div className="review">
                <div className="reviewTopSection">
                  <img src={person1} alt="Person 1" className="person" />
                  <div className="reviewTopSectionLeftCol">
                    <div className="starsText">
                      4.0<div className="stars"> ★</div>
                    </div>
                    <h3>Ravi G</h3>
                    <div className="service"> Parent of Grade 12 Student</div>
                  </div>
                </div>
                <div className="title">Transformative Experience</div>
                <div className="text">
                "Pearl Education has been a game-changer for my daughter. 
                The personalized one-on-one sessions have helped her grasp complex math concepts with ease. 
                Thank you, Pearl Education!"
                </div>
              </div>
            </div>

            <div
              className="swiper-slide"
              role="group"
              aria-label="2 / 6"
              data-swiper-slide-index="1"
              style={{
                transitionDuration: '0ms',
                transform: 'translate3d(120px, 0px, -200px) rotateX(0deg) rotateY(10deg) scale(1)',
                zIndex: 0,
              }}
            >
              <div className="review">
                <div className="reviewTopSection">
                  <img src={person1} alt="Person 1" className="person" />
                  <div className="reviewTopSectionLeftCol">
                    <div className="starsText">
                      5.0<div className="stars"> ★</div>
                    </div>
                    <h3>Rahil</h3>
                    <div className="service">Grade 11 Student</div>
                  </div>
                </div>
                <div className="title">Outstanding Results</div>
                <div className="text">
                "I was really struggling with Physics until I joined Pearl Education. 
                The tutor was patient and explained everything in a way that made sense to me. 
                I ended up scoring an A in my final exams!"
                </div>
              </div>
            </div>

            <div
              className="swiper-slide "
              role="group"
              aria-label="3 / 6"
              data-swiper-slide-index="2"
              style={{
                transitionDuration: '0ms',
                transform: 'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)',
                zIndex: 1,
              }}
            >
              <div className="review">
                <div className="reviewTopSection">
                  <img src={person1} alt="Person 1" className="person" />
                  <div className="reviewTopSectionLeftCol">
                    <div className="starsText">
                      4.8<div className="stars"> ★</div>
                    </div>
                    <h3>Ephraim</h3>
                    <div className="service">Parent of Grade 12 Student</div>
                  </div>
                </div>
                <div className="title">Expert Guidance</div>
                <div className="text">
                "The tutors at Pearl Education are incredibly knowledgeable and dedicated. 
                My son’s computer science skills have improved significantly. 
                He’s now confident in coding and even created his first app!"
                </div>
              </div>
            </div>

            <div
              className="swiper-slide "
              role="group"
              aria-label="4 / 6"
              data-swiper-slide-index="3"
              style={{
                transitionDuration: '0ms',
                transform: 'translate3d(-120px, 0px, -200px) rotateX(0deg) rotateY(-10deg) scale(1)',
                zIndex: 0,
              }}
            >
              <div className="review">
                <div className="reviewTopSection">
                  <img src={person1} alt="Person 1" className="person" />
                  <div className="reviewTopSectionLeftCol">
                    <div className="starsText">
                      4.6<div className="stars"> ★</div>
                    </div>
                    <h3>Muko</h3>
                    <div className="service">Senior Applicant</div>
                  </div>
                </div>
                <div className="title">Comprehensive Support</div>
                <div className="text">
                "Pearl Education provided excellent support for my CELPIP preparation. The focused sessions and practical tips boosted my confidence, and I achieved the band score I needed for my PR application."
                </div>
              </div>
            </div>

            <div
              className="swiper-slide"
              role="group"
              aria-label="5 / 6"
              data-swiper-slide-index="4"
              style={{
                transitionDuration: '0ms',
                transform: 'translate3d(-240px, 0px, -400px) rotateX(0deg) rotateY(-20deg) scale(1)',
                zIndex: -1,
              }}
            >
              <div className="review">
                <div className="reviewTopSection">
                  <img src={person1} alt="Person 1" className="person" />
                  <div className="reviewTopSectionLeftCol">
                    <div className="starsText">
                      4.5<div className="stars"> ★</div>
                    </div>
                    <h3>Rayyan</h3>
                    <div className="service">Undergraduate Student</div>
                  </div>
                </div>
                <div className="title">Flexible and Convenient!</div>
                <div className="text">
                "With my busy schedule, finding time for tutoring was challenging. 
                Pearl Education’s online tutoring option was a lifesaver. 
                The flexibility allowed me to learn at my own pace without compromising on quality."
                </div>
              </div>
              <div
              className="swiper-slide"
              role="group"
              aria-label="6 / 6"
              data-swiper-slide-index="4"
              style={{
                transitionDuration: '0ms',
                transform: 'translate3d(-240px, 0px, -400px) rotateX(0deg) rotateY(-20deg) scale(1)',
                zIndex: -1,
              }}
            >
              <div className="review">
                <div className="reviewTopSection">
                  <img src={person1} alt="Person 1" className="person" />
                  <div className="reviewTopSectionLeftCol">
                    <div className="starsText">
                      4<div className="stars"> ★</div>
                    </div>
                    <h3>Deepak Sharma</h3>
                    <div className="service">Parent of Grade 7 Student</div>
                  </div>
                </div>
                <div className="title">Great Guidance and Support</div>
                <div className="text">
                "We have been with Pearl Education for 2 years now and it has greatly benefited 
                her understanding on many concepts ranging from Math to Computer Science."
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
          </div>

          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCarousel;
