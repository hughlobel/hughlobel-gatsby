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
  education,
  teaching,
  guestLecture,
  communityEngagement,
  projects,
  devWork,
  leadership,
  interests,
  experience,
  awards,
  works,
  performances,
  presentations,
  musician
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
            <div class="resumeEducation">
              <div className="container">
                <br />
                <h3><strong><u>Education</u></strong></h3>
                <br />
                {education.map((degree) => 
                  <Fade bottom>
                    <p><i>{degree.uni}</i></p>
                    <p><strong>{degree.deg}.&nbsp;</strong>{degree.year}.</p>
                    <p>{degree.instructors}.</p>
                    <p>{degree.other}</p>
                    <br />
                  </Fade>
                )}
              </div>
            </div>
            <div class="resumeTeaching">
              <div className="container">
                <br />
                <h3><strong><u>University Teaching</u></strong></h3>
                <br />
                {teaching.map((uni) => 
                  <Fade bottom>
                    <p><strong>{uni.location}</strong></p>
                    <br />
                    {uni.section.map((dept) => 
                      <div>
                        <Fade bottom>
                          <p><i>{dept.name}</i></p>
                          {dept.courseList.map((cl) => 
                            <p><strong>{cl.num}: </strong>{cl.name}. {cl.date}</p>
                          )}
                          <br />
                        </Fade>
                      </div>
                    )}
                    <br />
                  </Fade>
                )}
              </div>
            </div>
            <div class="resumeGuestTeaching">
              <div className="container">
                <br />
                <h3><strong><u>Guest Teaching</u></strong></h3>
                <br />
                {guestLecture.map((uni) => 
                  <Fade bottom>
                    <p><strong>{uni.location}</strong></p>
                    {uni.courseList.map((info) => 
                      <Fade bottom>
                        <p><i>{info.num}</i> - {info.name}</p>
                      </Fade>
                    )}
                    <br />
                  </Fade>
                )}
              </div>
            </div>
            <div class="resumeCommunityEngagement">
              <div className="container">
                <br />
                <h3><strong><u>Community Engagement</u></strong></h3>
                <br />
                {communityEngagement.map((item) => 
                  <Fade bottom>
                    <p><strong>{item.location}</strong></p>
                    {item.engagements.map((info) => 
                      <Fade bottom>
                        <p><i>{info.title}</i> - {info.description}</p>
                      </Fade>
                    )}
                    <br />
                  </Fade>
                )}
              </div>
            </div>
            <div class="resumeProjects">
              <div className="container">
                <br />
                <h3><strong><u>Art Technology and Interdisciplinary Media Collaboration</u></strong></h3>
                <br />
                {projects.map((cat) => 
                  <Fade bottom>
                    <p><strong>{cat.date}</strong></p>
                    <p><i>{cat.name}.&nbsp;</i>{cat.description}</p>
                    <br />
                  </Fade>
                )}
              </div>
            </div>
            <div class="resumeDevWork">
              <div className="container">
                <br />
                <h3><strong><u>Commercial Web and Software Development</u></strong></h3>
                <br />
                {devWork.map((job) => 
                  <Fade bottom>
                    <p><strong>{job.date}</strong></p>
                    <p><i>{job.company}.&nbsp;</i>{job.description}&nbsp;{job.location}.</p>
                    <br />
                  </Fade>
                )}
              </div>
            </div>
            <div class="resumeLeadership">
              <div className="container">
                <br />
                <h3><strong><u>Art and Education Leadership and Administration</u></strong></h3>
                <br />
                {leadership.map((cat) => 
                  <Fade bottom>
                    <p><strong>{cat.title}</strong>. {cat.description}.</p>
                  </Fade>
                )}
              </div>
            </div>
            <div class="resumeInterest">
              <div className="container">
                <br />
                <h3><strong><u>Areas of Interest</u></strong></h3>
                <br />
                {interests.map((cat, i, arr) => 
                    <p class='inlineList'>{cat}{arr.length - 1 > i && ','}{arr.length - 1 === i && '.'}&nbsp;</p>
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
                      {cat.elements.map((item, i, arr) =>
                          <p class='inlineList'>{item}{arr.length - 1 > i && ','}{arr.length - 1 === i && '.'}&nbsp;</p>
                      )}
                    </div>
                    <br />
                  </Fade>
                )}
              </div>
            </div>
            <div class="resumeAwards">
              <div className="container">
                <br />
                <h3><strong><u>Selected Awards and Commissions</u></strong></h3>
                <br />
                {awards.map((year) => 
                  <Fade bottom>
                    <p><strong>{year.year}</strong></p>
                    <div>
                      {year.awards.map((item) =>
                        <div>
                          <p><strong>{item.type} -&nbsp;</strong>{item.title}.&nbsp;{item.description && item.description+'.'}</p>
                        </div>
                      )}
                    </div>
                    <br />
                  </Fade>
                )}
              </div>
            </div>
            <div class="resumeWorks">
              <div className="container">
                <br />
                <h3><strong><u>Selected Sonic and Multimedia Works</u></strong></h3>
                <br />
                {works.map((year) => 
                  <Fade bottom>
                    <p><strong>{year.year}</strong></p>
                    <div>
                      {year.list.map((item) =>
                        <p><strong>{item.title} -&nbsp;</strong>{item.description+'.'}</p>
                      )}
                    </div>
                    <br />
                  </Fade>
                )}
              </div>
            </div>
            <div class="resumePerformances">
              <div className="container">
                <br />
                <h3><strong><u>Selected Premieres</u></strong></h3>
                <br />
                {performances.map((event) => 
                  <Fade bottom>
                    <p><strong>{event.date} -&nbsp;</strong><i>{event.ensemble}.&nbsp;</i>{event.title}.&nbsp;{event.location}.</p>
                  </Fade>
                )}
              </div>
              <br />
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
            <div class="resumeMusician">
              <div className="container">
                <br />
                <h3><strong><u>Selected Performing Experience</u></strong></h3>
                <br />
                {musician.map((year) => 
                  <Fade bottom>
                    <p><strong>{year.year}</strong></p>
                    {year.events.map((item) =>
                        <p><strong>{item.instrument} -</strong> {item.description}.</p>
                    )}
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
  education: PropTypes.array,
  teaching: PropTypes.array,
  guestLecture: PropTypes.array,
  communityEngagement: PropTypes.array,
  projects: PropTypes.array,
  devWork: PropTypes.array,
  leadership: PropTypes.array,
  interests: PropTypes.array,
  experience: PropTypes.array,
  awards: PropTypes.array,
  works: PropTypes.array,
  performances: PropTypes.array,
  presentations: PropTypes.array,
  musician: PropTypes.array,
}

const CVPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CVPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        education={post.frontmatter.education}
        teaching={post.frontmatter.teaching}
        guestLecture={post.frontmatter.guestLecture}
        communityEngagement={post.frontmatter.communityEngagement}
        projects={post.frontmatter.projects}
        devWork={post.frontmatter.devWork}
        leadership={post.frontmatter.leadership}
        interests={post.frontmatter.interests}
        experience={post.frontmatter.experience}
        awards={post.frontmatter.awards}
        works={post.frontmatter.works}
        performances={post.frontmatter.performances}
        presentations={post.frontmatter.presentations}
        musician={post.frontmatter.musician}
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

// export const CVPageQuery = graphql`
//   query CVPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `

export const CVPageQuery = graphql`
  query CVPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        education {
          uni
          deg
          year
          instructors
          other
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
        guestLecture {
          location
          courseList {
            num
            name
          }
        }
        communityEngagement {
          location 
          engagements {
            title
            description
            date
          }
        }
        projects {
          date
          name
          description
        }
        devWork {
          date
          company
          description
          location
        }
        leadership {
          title
          description
        }
        interests
        experience {
          title
          elements
        }
        awards {
          year
          awards {
            type
            title
            description
          }
        }
        works {
          year
          list {
            title
            description
          }
        }
        performances {
          date
          ensemble
          title
          location
        }
        presentations {
          event
        }
        musician {
          year
          events {
            instrument
            description
          }
        }
      }
    }
  }
`
