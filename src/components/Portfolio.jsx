import React from 'react';

import doctorImg from '../files/doctor.jpg';
import mlPortfolioImg from '../files/machine-learning portfolio.jpg';
import expenseTrackerImg from '../files/expence tracker.jpg';



const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section container-fluid">
      <div className="container mt-100">
        <h2 className="text-center fw-600 dark-black-text">Projects Done</h2>
        <div className="blue-line mx-auto"></div>
        <p className="text-center segoe-font mt-5 mb-3 mb-sm-5 pb-sm-5">
          Completed projects include a Hospice Doctors Appointment Website for streamlined patient scheduling,
          a Lung Cancer Detection and Classification system using deep learning for accurate diagnostics,
          and a Personal Expense Tracker to manage and visualize daily finances effectively.
        </p>
      </div>

      <div className="container projects-main-div">
        <div className="project-div pt-3">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12 pe-4 mb-5 mb-sm-0">
              <img src={doctorImg} alt="App-1" className="project-image" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 pe-4">
              <img src={mlPortfolioImg} alt="App-2" className="project-image" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 pe-4 mt-5 mt-lg-0">
              <img src={expenseTrackerImg} alt="App-3" className="project-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
