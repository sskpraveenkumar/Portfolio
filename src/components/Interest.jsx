import React from 'react';
import './Index.css';


const Interest = () => {
  return (
    <section id="services-section" className="services-section container-fluid">
      <div className="container mt-100">
        <h2 className="text-center fw-600 dark-black-text">Interests</h2>
        <div className="blue-line mx-auto"></div>
        <p className="text-center segoe-font mt-5 mb-3 mb-sm-5 pb-sm-5">
          Areas of Interest: Passionate about Web Development and creating dynamic, user-friendly interfaces.
          Enthusiastic about Machine Learning innovations and Stock Market analytics and trends.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-evenly">

          {/* Web Development */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service-item position-relative">
              <div className="icon">
                <img
                  src="/assets/coding.png"
                  alt="Coding Icon"
                  style={{ width: '40px', height: '40px', filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <h4 className="mt-5 fw-600">Web Development</h4>
              <p className="segoe-font">
                Passionate about creating responsive, user-friendly web applications using modern front-end frameworks.
                Strong interest in full-stack development, with a focus on seamless user experience and performance optimization.
              </p>
            </div>
          </div>

          {/* Machine Learning */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service-item position-relative">
              <div className="icon">
                <img
                  src='/assets/machine-learning.png'
                  alt="Machine Learning Icon"
                  style={{ width: '40px', height: '40px', filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <h4 className="mt-5 fw-600">Machine Learning</h4>
              <p className="segoe-font">
                Enthusiastic about developing intelligent systems using machine learning and deep learning techniques.
                Interested in data-driven problem solving, model optimization, and real-world AI applications.
              </p>
            </div>
          </div>

          {/* Stock Market */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service-item position-relative">
              <div className="icon">
                <img
                  src="/assets/stock-market.png"
                  alt="Stock Market Icon"
                  style={{ width: '40px', height: '40px', filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <h4 className="mt-5 fw-600">Stock Market</h4>
              <p className="segoe-font">
                Keen interest in financial markets with a focus on stock analysis, trading strategies, and market trends.
                Passionate about leveraging data analytics and predictive modeling for smarter investment decisions making profit portfolio.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-evenly my-sm-5">
          {/* Music */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service-item position-relative">
              <div className="icon">
                <img
                  src="/assets/musical-note.png"
                  alt="Music Icon"
                  style={{ width: '40px', height: '40px', filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <h4 className="mt-5 fw-600">Music</h4>
              <p className="segoe-font">
                Deeply passionate about music composition, sound design, and exploring diverse musical genres.
                Interested in blending technology with music through digital audio workstations and creative production tools.
              </p>
            </div>
          </div>

          {/* Movies */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service-item position-relative">
              <div className="icon">
                <img
                  src="/assets/video-camera.png"
                  alt="Movies Icon"
                  style={{ width: '40px', height: '40px', filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <h4 className="mt-5 fw-600">Movies</h4>
              <p className="segoe-font">
                Enthusiastic about film analysis, storytelling, and exploring diverse genres and cinematic styles.
                Passionate about the art of visual storytelling and its impact on culture and emotion.
                More interested in sci-fi and action movies.
              </p>
            </div>
          </div>

          {/* UI Design */}
          <div className="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0">
            <div className="service-item position-relative">
              <div className="icon">
                <img
                  src="/assets/google-chrome.png"
                  alt="UI Design Icon"
                  style={{ width: '40px', height: '40px', filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <h4 className="mt-5 fw-600">UI Design</h4>
              <p className="segoe-font">
                Passionate about crafting intuitive and visually appealing user interfaces that enhance user experience.
                Interested in design systems, user-centered design principles, and prototyping with modern design tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;
