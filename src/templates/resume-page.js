import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import VideoBG from '../components/VideoBG'
import reveal from '../config/revealActions'

import config from '../config/config'

export const ResumePageTemplate = ({ 
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
      <section className="heroSection heroVideo" >
        <h2>{title}</h2>
      </section>
      <VideoBG video='video1'></VideoBG>
      <section className="">
        <div className="bodyCopy">
          <div>
            <div class="resumeTitle">
              <div className="container">
                <a href='/img/Hugh_Lobel_Resume.docx'><div {...reveal.slideDefault} ><button className="button-transparent"><span>Download Resume as Word Document</span></button></div></a><br/>
                <a href='/img/Hugh_Lobel_Resume.pdf' target="_blank"><div {...reveal.slideDefault} ><button className="button-transparent"><span>Download Resume as PDF</span></button></div></a><br />
                <h2><strong>H U G H&nbsp;&nbsp; L O B E L</strong></h2>
                {config.contact.map((line) => 
                  <p>{line}</p>
                )}
                <br />
              </div>
            </div>
            <div class="resumeDevWork">
              <div className="container">
                <h3><strong><u>Professional Experience</u></strong></h3>
                <br />
                {devWork.map((job) => 
                  <div>
                    <p><strong>{job.company}. {job.location}. {job.date}</strong></p>
                    <p>{job.description}</p>
                    <br />
                  </div>
                )}
              </div>
            </div>
            <div class="resumeResearch">
              <div className="container">
                <h3><strong><u>Selected Research, and Open-Source Software Development</u></strong></h3>
                <br />
                {openSource.map((proj) => 
                  <div>
                    <p><strong>{proj.name}. {proj.date}.</strong></p>
                    <p>{proj.description}</p>
                    <br />
                  </div>
                )}
              </div>
            </div>
            <div class="resumeExperience">
              <div className="container">
                <h3><strong><u>Experience</u></strong></h3>
                <br />
                {experience.map((cat) => 
                  <div>
                    <p><strong>{cat.title}</strong></p>
                    {cat.elements.map((item) =>
                      <p class='inlineList'>{item}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div class="resumeTeaching">
              <div className="container">
                <br />
                <h3><strong><u>Selected University Teaching in Web and Multimedia Software Development</u></strong></h3>
                <br />
                {teaching.map((uni) => 
                  <div>
                    <p><strong>{uni.location}</strong></p>
                    {uni.section.map((dept) => 
                      <div>
                        <div>
                          <p><i>{dept.name}</i></p>
                          {dept.courseList.map((cl) => 
                            <p><strong>{cl.num}: </strong>{cl.name}. {cl.date}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div class="resumeEducation">
              <div className="container">
                <br />
                <h3><strong><u>Education</u></strong></h3>
                <br />
                {education.map((degree) => 
                  <div>
                    <p><strong>{degree.school}.</strong> {degree.degree} - {degree.date}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ResumePageTemplate.propTypes = {
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

const ResumePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ResumePageTemplate
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

ResumePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ResumePage

export const ResumePageQuery = graphql`
  query ResumePage($id: String!) {
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
