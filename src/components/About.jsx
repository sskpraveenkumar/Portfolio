import React from "react";
import profileImg from "../files/gradiantmyimg.png"; 
import './Index.css';

const About = () => {
  return (
    <>
      <section id="about-section" className="about-section container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-xl-flex gap-5">
                <img src={profileImg} alt="About-Man" width="250" height="225" />
                <div className="profile-description">
                  <p className="mb-4 mt-5 mt-xl-0">
                    <span className="fw-600 grey-clr">Name:</span> Praveen Kumar S P
                  </p>
                  <p className="mb-4">
                    <span className="fw-600 grey-clr">Profile:</span> Frontend Developer
                  </p>
                  <p className="mb-4">
                    <span className="fw-600 grey-clr">Email:</span> sskpraveenkumar@gmail.com
                  </p>
                  <p className="mb-4">
                    <span className="fw-600 grey-clr">Phone:</span> (91) 7373053873
                  </p>
                  <p className="mb-4">
                    <span className="fw-600 grey-clr">Location:</span> Bangalore
                  </p>
                </div>
              </div>

              <div className="skills-main-div mt-5 mb-2">
                <h3 className="fw-600 mb-5">Skills</h3>
                {[
                  { name: "HTML", value: "100%" },
                  { name: "CSS", value: "95%" },
                  { name: "JavaScript", value: "85%" },
                  { name: "Bootstrap 5", value: "90%" },
                  { name: "React Js", value: "80%" },
                ].map((skill, index) => (
                  <div className="skills-div mt-4" key={index}>
                    <div className="mb-2 problemone d-flex justify-content-between">
                      <span>{skill.name}</span>
                      <span>{skill.value}</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: skill.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 about-me-description mt-5 mt-lg-0 pt-4 pt-lg-0">
              <h2 className="fw-600">About me</h2>
              <div className="blue-line"></div>
              {[
                "I aim to grow with an organization that values talent, innovation, and dedication.",
                "A detail-oriented and passionate learner, constantly striving to improve my skills and contribute meaningfully to team goals.",
                "I value integrity and accountability, and I’m committed to delivering high-quality work under minimal supervision.",
                "Strong problem-solver with a creative mindset, always ready to face challenges with innovative solutions.",
                "I possess strong communication skills, enabling smooth collaboration with cross-functional teams.",
                "Adaptable and quick to grasp new technologies, I thrive in fast-paced and evolving work environments.",
                "I'm driven by curiosity and a growth mindset, always seeking opportunities to learn and expand my knowledge base.",
                "Highly organized and time-efficient, I’m capable of managing multiple tasks without compromising on quality.",
              ].map((paragraph, idx) => (
                <p className="segoe-font" key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resume-section" className="resume-section container-fluid">
        <div className="container mt-100">
          <h2 className="text-center fw-600 dark-black-text">Resume</h2>
          <div className="blue-line mx-auto"></div>
          <p className="text-center segoe-font mt-5 mb-3 mb-sm-5 pb-sm-5">
            I'm a self-reliant and diligent individual aiming to seek a job that fully utilizes my technical potential.
          </p>
        </div>

        <div className="container">
          <div className="row justify-content-evenly">
            {/* Left Column */}
            <div className="col-lg-5">
              <h4 className="resume-title dark-black-text fw-600 my-5 my-sm-3">Summary</h4>
              <div className="resume-item mt-5 ps-5">
                <h5 className="text-uppercase grey-clr">Capgemini</h5>
                <p className="mt-lg-3 segoe-font">
                  Front-End Developer with 1 year of hands-on experience at Capgemini, specializing in building responsive,
                  user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks like React.js.
                </p>
                <ul>
                  <li className="p-font-size dark-black-text segoe-font mb-2">Prestige Tech Park, Bangalore</li>
                  <li className="p-font-size dark-black-text segoe-font mb-2">(91) 7373053873</li>
                  <li className="p-font-size dark-black-text segoe-font mb-2">sskpraveenkumar@gmail.com</li>
                </ul>
              </div>

              <h4 className="resume-title dark-black-text fw-600 my-5">Education</h4>
              <div className="resume-item ps-5">
                <h5 className="grey-clr mb-3">BACHELOR OF ENGINEERING COMPUTER SCIENCE</h5>
                <h6 className="year mb-4">2019 - 2023</h6>
                <p className="mt-lg-3 segoe-font">
                  <em>SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</em>
                </p>
                <p className="mt-lg-3 segoe-font mb-0">
                  Graduated with a distinction, securing an 8.5 CGPA, reflecting consistent academic excellence and a strong
                  grasp of core technical subjects.
                </p>
              </div>

              <div className="resume-item ps-5 pt-5">
                <h5 className="grey-clr mb-3">HSC</h5>
                <h6 className="year mb-4">2017 - 2019</h6>
                <p className="mt-lg-3 segoe-font">Vidyaa Vikas Matric Hr.Sec School</p>
              </div>

              <div className="resume-item ps-5 pt-5">
                <h5 className="grey-clr mb-3">SSLC</h5>
                <h6 className="year mb-4">2016 - 2017</h6>
                <p className="mt-lg-3 segoe-font">Vidyaa Vikas Matric Hr.Sec School</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-5">
              <h4 className="resume-title dark-black-text fw-600 my-5 my-lg-3">PROJECTS</h4>

              <div className="resume-item ps-5 mt-5">
                <h5 className="grey-clr mb-3">
                  <b>Hospice Doctors Appointment Website</b>
                </h5>
                <h6 className="year mb-4">2023 - 2024</h6>
                <p className="mt-lg-3 segoe-font">
                  <em>Tech Stacks: HTML, CSS, JavaScript, Bootstrap 5</em>
                </p>
                <ul className="mb-0">
                  <li className="p-font-size dark-black-text segoe-font mb-2">
                    Developed a responsive and user-friendly healthcare website with <b>multiple integrated pages</b> including Home, Departments, Doctors, Services, and Blog.
                  </li>
                  <li className="p-font-size dark-black-text segoe-font mb-2">
                    Implemented an <b>appointment booking system</b> enabling patients to schedule consultations with doctors.
                  </li>
                  <li className="p-font-size dark-black-text segoe-font mb-2">
                    Designed a <b>testimonials section</b> to showcase patient reviews and feedback, improving user trust and experience.
                  </li>
                  <li className="p-font-size dark-black-text segoe-font mb-0">
                    Created a <b>doctor directory</b> with professional details and departmental classifications for easy user navigation.
                  </li>
                  <li className="p-font-size dark-black-text segoe-font mb-0">
                    Optimized layout for <b>mobile and desktop responsiveness</b> using media queries and flexible grid systems.
                  </li>
                  <li className="p-font-size dark-black-text segoe-font mb-0">
                    Applied UI/UX best practices to design intuitive page flows and improve user engagement.
                  </li>
                </ul>
              </div>

              <div className="resume-item resume-item-1 ps-5 pt-5">
                <h5 className="grey-clr mb-3">
                  <b>Lung Cancer Detection and Classification Using Deep Learning Algorithm</b>
                </h5>
                <h6 className="year mb-4">2023 - 2024</h6>
                <p className="mt-lg-3 segoe-font">
                  <em>Tech Stacks: TensorFlow, Keras, Pandas</em>
                </p>
                <ul className="mb-0">
                  <li className="p-font-size dark-black-text segoe-font mb-2">
                    Developed a deep learning model for automatic detection and classification of lung cancer from medical imaging data (CT/X-ray).
                  </li>
                  <li className="p-font-size dark-black-text segoe-font mb-2">
                    Integrated OpenCV and image processing techniques for nodule extraction and enhancement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
