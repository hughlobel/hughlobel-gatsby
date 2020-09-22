import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faTools, faCodeBranch, faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'
import ImageBG from '../components/ImageBG'
import Content, { HTMLContent } from '../components/Content'
import reveal from '../config/revealActions'


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
      <ImageBG image={imageUrl} title={title} category={category} description={description} />
      <div>
        <section className="projectContent">
          <div className="container">
            <PostContent content={content} />
          </div>
        </section>
        <section 
          className="additionalInfo"
          style={{backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.85) 33%, rgba(0,0,0,0.85) 55%),url("/img/${imageAlt}")`}}
        >
          <div className="threeColumns">
            <div className="horiCenter">
                <FontAwesomeIcon icon={faRocket} size="2x" {...reveal.slideDefault}/>
                <h3 {...reveal.slideDefault}>Concepts</h3>
                <ul>
                  {concepts.map((concept) => (
                    <li {...reveal.slideDefault}>{concept}</li>
                  ))}
                </ul>
            </div>
            <div className="horiCenter">
                <FontAwesomeIcon icon={faTools} size="2x" {...reveal.slideDefault}/>
                <h3 {...reveal.slideDefault}>Tools</h3>
                <ul>
                  {tools.map((tools) => (
                    <li {...reveal.slideDefault}>{tools}</li>
                  ))}
                </ul>
            </div>
            <div className="horiCenter">
                <FontAwesomeIcon icon={faCodeBranch} size="2x" {...reveal.slideDefault}/>
                <h3 {...reveal.slideDefault}>Related Projects</h3>
                <ul className="">
                  {relatedLinks.map((site) => (
                    <Link to={site.link}><button className="button-white button-transparent"><span {...reveal.slideDefault}>{site.text}</span></button></Link>
                  ))}
                </ul>
            </div>
          </div>
          <div className="oneColumn">
            <div className="horiCenter">
                <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" {...reveal.slideDefault}/>
                <h3 {...reveal.slideDefault}>Learn More</h3>
                <ul className="perfectCenter">
                  {more.map((site) => (
                    <a href={site.link} target="_blank" rel="noopener noreferrer"><button className="button-white button-transparent"><span {...reveal.slideDefault}>{site.text}</span></button></a>
                  ))}
                </ul>
            </div>
            <div className="horiCenter projectBack">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" {...reveal.slideDefault}/>
              <Link to='/portfolio'><button className="button-white button-transparent"><span {...reveal.slideDefault}>Back To Projects</span></button></Link>
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
