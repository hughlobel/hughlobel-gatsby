import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade';

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import VideoBG from '../components/VideoBG'

import config from '../config/config'

export const CVPageTemplate = ({ 
  title, 
  content, 
  contentComponent,
   devWork,
   experience,
   teaching,
   openSource,
   presentations,
   education
}) => {
  const PageContent = contentComponent || Content

  return (
    <div class="resumePage innerPage">
      <section className="heroSection" >
        <Fade>
          <h2>{title}</h2>
        </Fade>
      </section>
      <VideoBG></VideoBG>
      <section className="formSection">
        <Fade>
          <div className="bodyCopy">
          <PageContent className="content" content={content} />
          </div>
        </Fade>
      </section>
      <section className="heroSection simpleHero" >
        <Fade>
          <h1>{title}</h1>
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
                {devWork.map((job) => 
                  <Fade bottom>
                    <p><strong>{job.date}</strong></p>
                    <p>{job.company}</p>
                    <p>{job.description}</p>
                    <p>{job.location}</p>
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
                {experience.map((cat) => 
                  <Fade bottom>
                    <p><strong>{cat.title}</strong></p>
                    <div>
                      {cat.elements.map((item) =>
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
                {teaching.map((uni) => 
                  <Fade bottom>
                    <p><strong>{uni.location}</strong></p>
                    <br />
                    {uni.section.map((dept) => 
                      <div>
                        <div>
                          <p><i>{dept.name}</i></p>
                          {dept.courseList.map((cl) => 
                            <p><strong>{cl.num}: </strong>{cl.name}. {cl.date}</p>
                          )}
                          <br />
                        </div>
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
                {openSource.map((proj) => 
                  <Fade bottom>
                    <p><strong>{proj.date}</strong></p>
                    <p>{proj.name}</p>
                    <p>{proj.description}</p>
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
                {presentations.map((event) => 
                  <Fade bottom>
                    <p>{event.event}</p>
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
                {education.map((degree) => 
                  <Fade bottom>
                    <p><i>{degree.school}</i></p>
                    <p>{degree.degree}</p>
                    <p>{degree.date}</p>
                    <p>{degree.other}</p>
                    <br />
                  </Fade>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

CVPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  devWork: PropTypes.array,
  experience: PropTypes.array,
  teaching: PropTypes.array,
  openSource: PropTypes.array,
  presentations: PropTypes.array,
  education: PropTypes.array,
}

const CVPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CVPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        devWork={post.frontmatter.devWork}
        experience={post.frontmatter.experience}
        teaching={post.frontmatter.teaching}
        openSource={post.frontmatter.openSource}
        presentations={post.frontmatter.presentations}
        education={post.frontmatter.education}
        content={post.html}
      />
    </Layout>
  )
}

CVPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CVPage

export const CVPageQuery = graphql`
  query CVPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        devWork {
          date
          company
          description
          location
        }
        experience {
          title
          elements
        }
        teaching {
          section {
            name
            courseList {
              num
              name
              date
            }
          }
        }
        openSource {
          date
          name
          description
        }
        presentations {
          event
        }
        education {
          school
          degree
          date
          other
        }
      }
    }
  }
`
