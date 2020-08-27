import React, { Component } from 'react';
import { motion } from "framer-motion";
import Fade from 'react-reveal/Fade';

import config from '../../config/config'
import resume from '../../config/resume'

class DeveloperResume extends Component {
  componentDidMount() {
  } 

  render() {
    window.scrollTo(0, 0)
    return (
        <motion.div
          key="1"
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="resumePage innerPage"
        >
          <section className="heroSection simpleHero" >
            <Fade>
              <h1>Developer Resume</h1>
            </Fade>
          </section>
          <section className="">
            <div className="bodyCopy">
              <div>
                <div class="resumeTitle">
                  <div className="container">
                    <h2><strong>H U G H&nbsp;&nbsp; L O B E L</strong></h2>
                    <br />
                    <Fade bottom>
                      {config.contact.map((line) => 
                        <p>{line}</p>
                      )}
                    </Fade>
                    <br />
                  </div>
                </div>
                <div class="resumeDevWork">
                  <div className="container">
                    <br />
                    <h3><strong><u>Development Work</u></strong></h3>
                    <br />
                    {resume.devWork.map((job) => 
                      <Fade bottom>
                        <p><strong>{job[0]}</strong></p>
                        <p>{job[1]}</p>
                        <p>{job[2]}</p>
                        <p>{job[3]}</p>
                        <br />
                      </Fade>
                    )}
                  </div>
                </div>
                <div class="resumeExperience">
                  <div className="container">
                    <br />
                    <h3><strong><u>Experience</u></strong></h3>
                    <br />
                    {resume.experience.map((cat) => 
                      <Fade bottom>
                        <p><strong>{cat[0]}</strong></p>
                        <div>
                          {cat[1].map((item) =>
                            <p class='inlineList'>{item},&nbsp;</p>
                          )}
                        </div>
                        <br />
                      </Fade>
                    )}
                  </div>
                </div>
                <div class="resumeTeaching">
                  <div className="container">
                    <br />
                    <h3><strong><u>Selected University Teaching in Web and Multimedia Software Development</u></strong></h3>
                    <br />
                    {resume.teaching.map((uni) => 
                      <Fade bottom>
                        <p><strong>{uni[0]}</strong></p>
                        <br />
                        {uni.slice(1).map((dept) => 
                          <div>
                            {dept.map((info) => 
                              <div>
                                <p><i>{info[0]}</i></p>
                                {info.slice(1).map((cl) => 
                                  <p><strong>{cl[0]}: </strong>{cl[1]}. {cl[2]}</p>
                                )}
                                <br />
                              </div>
                            )}
                          </div>
                        )}
                        <br />
                      </Fade>
                    )}
                  </div>
                </div>
                <div class="resumeResearch">
                  <div className="container">
                    <br />
                    <h3><strong><u>Open Source and Research Development</u></strong></h3>
                    <br />
                    {resume.openSource.map((cat) => 
                      <Fade bottom>
                        <p><strong>{cat[0]}</strong></p>
                        <p>{cat[1]}</p>
                        <p>{cat[2]}</p>
                        <br />
                      </Fade>
                    )}
                  </div>
                </div>
                <div class="resumePresentations">
                  <div className="container">
                    <br />
                    <h3><strong><u>Selected Workshops and Presentations</u></strong></h3>
                    <br />
                    {resume.presentations.map((event) => 
                      <Fade bottom>
                        <p>{event}</p>
                        <br />
                      </Fade>
                    )}
                  </div>
                </div>
                <div class="resumeEducation">
                  <div className="container">
                    <br />
                    <h3><strong><u>Education</u></strong></h3>
                    <br />
                    {resume.education.map((degree) => 
                      <Fade bottom>
                        <p><i>{degree[0]}</i></p>
                        <p>{degree[1]}</p>
                        <p>{degree[2]}</p>
                        <p>{degree[3]}</p>
                        <br />
                      </Fade>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
    );  }
}

export default DeveloperResume;
