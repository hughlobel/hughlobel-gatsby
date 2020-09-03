import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import VideoBG from '../components/VideoBG'
import config from '../config/config'
import projects from '../config/projects'

let fp1 = projects.find(project => project.title === config.featuredProject1);
let sectionStyle = {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/img/" + fp1.image + "')",
  backgroundSize: "cover"
}
// Once grabbed, setup CSS for featured Section based on preview images
let fp2 = projects.find(project => project.title === config.featuredProject2);
let sectionStyle2 = {
  backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8)), url('/img/" + fp2.image + "')",
  backgroundSize: "cover"
}

export const IndexPageTemplate = ({
  tagline,
  tagImage,
  manifestoSection,
  bioSection
}) => (
  <div class="homePage">
    <VideoBG></VideoBG>
    <section class="titleSection">
      <p class="videoInfo">This, and all videos on this site, are captured in MSDP: a multimedia platform created by Hugh Lobel</p>
      <div className='container titleContent'>
        <div>
          <h2 className='titleTag'>{tagline}</h2>
        </div>
        <div className="titleImage">
          <img className='titleImageImage' src={`img/${tagImage}`} alt="Hugh Lobel speaking in the Atlas Building at CU Boulder"/>
        </div>
      </div>
    </section>
    <section className="fullScreen homeScreen">
      <div className="fullRow">
        <div className="twoColumns featuredProjects">
          <div class="featuredTitle"><h2>Featured Projects</h2></div>
          <a className="featuredOne" style={ sectionStyle }>
            <Link to={`/projects/${fp1.title}`} className="perfectCenter">
                <h3 className="white">{fp1.title}</h3><br />
                <p className="white category">{fp1.category}</p><br />
                <p className="white">{fp1.excerpt}</p>
            </Link>
          </a>
          <a className="featuredFrontTwo" style={ sectionStyle2 }>
            <Link to={`/projects/${fp2.title}`} className="perfectCenter">
              <h3>{fp2.title}</h3><br /> 
              <p className="category">{fp2.category}</p><br />
              <p>{fp2.excerpt}</p>
            </Link>
          </a>
        </div>
      </div>
    </section>
    <section class="manifestoSection">
      <div className='container manifestoContent'>
        <h2>{manifestoSection}</h2>
        <div className="actionCall twoColumns">
          <div className="diveIn">
            <h3>Dive In...</h3>
            <Link to="/projects"><div><button className="button-transparent"><span>Explore Projects</span></button></div></Link>
          </div>
          <div className="reachOut">
            <h3>...or Reach Out!</h3>
            <div><button className="button-transparent openModal"><span>Contact</span></button></div>
          </div>
        </div>
      </div>
    </section>
    <section class="bioSection">
      <div className='container bioContent'>
        <h2>About Hugh Lobel</h2>
        <p className='bioContent'>{bioSection}</p>
        <div className="actionCall threeColumns">
          <Link to="/about"><div><button className="button-transparent"><span>Read Full Bio</span></button></div></Link>
          <Link to="/resume"><div><button className="button-transparent"><span>View Developer Resume</span></button></div></Link>
          <Link to="/artist-cv"><div><button className="button-transparent"><span>View Artist CV</span></button></div></Link>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  tagline: PropTypes.string,
  tagImage: PropTypes.string,
  featuredProject1: PropTypes.string,
  featuredProject2: PropTypes.string,
  manifestoSection: PropTypes.string,
  bioSection: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        tagline={frontmatter.tagline}
        tagImage={frontmatter.tagImage}
        featuredProject1={frontmatter.featuredProject1}
        featuredProject2={frontmatter.featuredProject2}
        manifestoSection={frontmatter.manifestoSection}
        bioSection={frontmatter.bioSection}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        tagline
        tagImage
        featuredProject1
        featuredProject2
        manifestoSection
        bioSection
      }
    }
  }
`
