import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faTools, faCodeBranch, faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

export const ProjectsPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  imageUrl,
  imageAlt,
  category,
  concepts,
  tools,
  more,
  relatedLinks
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="singleProjectPage">
      {helmet || ''}
      <div>
        <div 
          className="twoColumns twoColumns-3-7 heroSection projectHeroSection" 
          style={{backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.9) 55%),url("/img/${imageUrl}")`}}
        >
          <div class="hideOnMobile"></div>
            <div className="perfectCenter projectInfo">
              <h2>{title}</h2>
              <span>{category}</span>
              <p>{description}</p>
            </div>
        </div>
        <section className="container projectContent">
            <PostContent content={content} />
        </section>
        <section 
          className="additionalInfo"
          style={{backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.85) 33%, rgba(0,0,0,0.85) 55%),url("/img/${imageAlt}")`}}
        >
          <div className="threeColumns">
            <div className="horiCenter">
                <FontAwesomeIcon icon={faRocket} size="2x" />
                <h3>Concepts</h3>
                <ul>
                  {concepts.map((concept) => (
                    <li>{concept}</li>
                  ))}
                </ul>
            </div>
            <div className="horiCenter">
                <FontAwesomeIcon icon={faTools} size="2x" />
                <h3>Tools</h3>
                <ul>
                  {tools.map((tools) => (
                    <li>{tools}</li>
                  ))}
                </ul>
            </div>
            <div className="horiCenter">
                <FontAwesomeIcon icon={faCodeBranch} size="2x" />
                <h3>Related Projects</h3>
                <ul className="">
                  {relatedLinks.map((site) => (
                    <Link to={site.link}><button className="button-white button-transparent"><span>{site.text}</span></button></Link>
                  ))}
                </ul>
            </div>
          </div>
          <div className="oneColumn">
            <div className="horiCenter">
                <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
                <h3>Learn More</h3>
                <ul className="perfectCenter">
                  {more.map((site) => (
                    <a href={site.link} target="_blank" rel="noopener noreferrer"><button className="button-white button-transparent"><span>{site.text}</span></button></a>
                  ))}
                </ul>
            </div>
            <div className="horiCenter">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
              <Link to='/projects'><button className="button-white button-transparent"><span>Back To Projects</span></button></Link>
            </div> 
          </div>
        </section>
      </div>
    </div>
  )
}

ProjectsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  concepts: PropTypes.array,
  tools: PropTypes.array,
  relatedLinks: PropTypes.array,
  more: PropTypes.array,
  category: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ProjectsPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProjectsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        imageUrl={post.frontmatter.imageUrl}
        imageAlt={post.frontmatter.imageAlt}
        concepts={post.frontmatter.concepts}
        tools={post.frontmatter.tools}
        relatedLinks={post.frontmatter.relatedLinks}
        more={post.frontmatter.more}
        category={post.frontmatter.category}
        helmet={
          <Helmet titleTemplate="%s | Projects">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

ProjectsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectsPost

export const pageQuery = graphql`
  query ProjectsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        imageUrl
        imageAlt
        concepts
        tools
        relatedLinks {
          link
          text
        }
        more {
          link
          text
        }
        category
      }
    }
  }
`
