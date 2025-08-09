import React from "react";
import './Index.css';

const Contact = () => {
  return (
    <>
      <section id="contact-us" className="contact-section container-fluid">
        <div className="container mt-100">
          <h2 className="text-center fw-600 dark-black-text">Contact Us</h2>
          <div className="blue-line mx-auto"></div>
          <p className="text-center segoe-font mt-5 mb-4 pb-5">
            Feel free to reach out for collaboration, inquiries, or opportunities.
            Contact me via email or LinkedIn—I look forward to connecting with you.
          </p>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-12">
              <form className="bg-white rounded p-3 py-5 p-sm-5 text-xl-center" id="contact-form">
                <input
                  type="text"
                  className="form-control form-control-lg mb-5 p-3"
                  required
                  placeholder="Enter your name"
                  id="full_name"
                />
                <input
                  type="email"
                  className="form-control form-control-lg mb-5 p-3"
                  required
                  placeholder="Enter your email"
                  id="email_id"
                />
                <textarea
                  className="form-control form-control-lg mb-5"
                  rows="8"
                  placeholder="Your feedback/suggestions"
                  required
                  id="message"
                ></textarea>
                <button type="submit" className="btn btn-block submit-btn rounded-pill">
                  Message
                </button>
                <p className="thank-you-msg mt-5 text-center">
                  Thank you for submitting the form!!!
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer-section container-fluid mt-100">
        <p className="copyright-txt text-center text-sm-start mb-5 text-white">
          © Copyright{" "}
          <strong>
           
              Praveen Kumar S P
           
          </strong>{" "}
          All Rights Reserved
        </p>
        <div className="social-icons">
          <a href="#" className="text-decoration-none">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="text-decoration-none">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="text-decoration-none">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" className="text-decoration-none">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
