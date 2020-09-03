import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Media from 'react-media';

class ProjectRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="projectsList">
        {posts &&
          posts.map(({ node: post }, index) => (
            <div>
              <div className="fullWidth singleProject">
                {index%2 === 0 && 
                  <Media queries={{ small: { maxWidth: 768 } }}>
                    {matches =>
                      matches.small ? (
                        <Link to={post.fields.slug} className="twoColumns fillContainer projectBG" style={{backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.75) 33%, rgba(0,0,0,0.95) 55%),url("/img/${post.frontmatter.imageUrl}")`}}>
                          <div class="hideOnMobile"></div>
                          <div className="perfectCenter oddProject">
                            <h2>{post.frontmatter.title}</h2>
                            <span>{post.frontmatter.category}</span>
                            <p>{post.frontmatter.description}</p>
                            <button className="button-white button-transparent"><span>More</span></button>
                          </div>
                        </Link>
                      ) : (
                        <Link to={post.fields.slug} className="twoColumns fillContainer projectBG" style={{backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.95) 65%),url("/img/${post.frontmatter.imageUrl}")`}}>
                          <div class="hideOnMobile"></div>
                          <div className="perfectCenter oddProject">
                            <h2>{post.frontmatter.title}</h2>
                            <span>{post.frontmatter.category}</span>
                            <p>{post.frontmatter.description}</p>
                            <button className="button-white button-transparent"><span>More</span></button>
                          </div>
                        </Link>
                      )
                    }
                  </Media>
                }
                {index%2 === 1 && 
                  <Media queries={{ small: { maxWidth: 768 } }}>
                  {matches =>
                    matches.small ? (
                      <Link to={post.fields.slug} className="twoColumns fillContainer projectBG" style={{backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.75) 66%),url("/img/${post.frontmatter.imageUrl}")`}}>
                        <div className="perfectCenter evenProject">
                          <h2>{post.frontmatter.title}</h2>
                          <span>{post.frontmatter.category}</span> 
                          <p>{post.frontmatter.description}</p>
                          <button className="button-black button-transparent"><span>More</span></button>
                        </div>
                        <div class="hideOnMobile"></div>
                      </Link>
                    ) : (
                      <Link to={post.fields.slug} className="twoColumns fillContainer projectBG" style={{backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.75) 45%, rgba(0,0,0,0) 60%),url("/img/${post.frontmatter.imageUrl}")`}}>
                        <div className="perfectCenter evenProject">
                          <h2>{post.frontmatter.title}</h2>
                          <span>{post.frontmatter.category}</span>
                          <p>{post.frontmatter.description}</p>
                          <button className="button-black button-transparent"><span>More</span></button>
                        </div>
                        <div class="hideOnMobile"></div>
                      </Link>
                    )
                  }
                </Media>
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
