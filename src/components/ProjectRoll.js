import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

import reveal from '../config/revealActions'

class ProjectRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="projectsList">
        {posts &&
          posts.map(({ node: post }, index) => (
            <div>
              <div className="fullWidth singleProject" {...reveal.fadeDefault}>
                {index%2 === 0 && 
                  <Link to={post.fields.slug} className="twoColumns fillContainer projectBG" style={{backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.75) 65%),url("/img/${post.frontmatter.imageUrl}")`}}>
                    <div class="hideOnMobile"></div>
                    <div className="perfectCenter oddProject">
                      <h2 {...reveal.slideDefault}>{post.frontmatter.title}</h2>
                      <span {...reveal.slideDefault}>{post.frontmatter.category}</span>
                      <p {...reveal.slideDefault}>{post.frontmatter.description}</p>
                      <button className="button-white button-transparent"><span {...reveal.slideDefault}>More</span></button>
                    </div>
                  </Link>
                }
                {index%2 === 1 && 
                  <Link to={post.fields.slug} className="twoColumns fillContainer projectBG" style={{backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.75) 45%, rgba(0,0,0,0) 60%),url("/img/${post.frontmatter.imageUrl}")`}}>
                    <div className="perfectCenter evenProject" {...reveal.fadeDefault}>
                      <h2 {...reveal.slideDefault}>{post.frontmatter.title}</h2>
                      <span {...reveal.slideDefault}>{post.frontmatter.category}</span>
                      <p {...reveal.slideDefault}>{post.frontmatter.description}</p>
                      <button className="button-black button-transparent"><span {...reveal.slideDefault}>More</span></button>
                    </div>
                    <div class="hideOnMobile"></div>
                  </Link>
                }
              </div>
            </div>
          ))}
      </section>
    )
  }
}

ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "projects-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                imageUrl
                description
                category
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProjectRoll data={data} count={count} />}
  />
)
