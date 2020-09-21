import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import ClientOnly from '../components/ClientOnly'
import Layout from '../components/Layout'
import VideoBG from '../components/VideoBG'
import reveal from '../config/revealActions'

const sectionStyle = {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/movingparts.gif')",
  backgroundSize: "cover"
}
// Once grabbed, setup CSS for featured Section based on preview images
const sectionStyle2 = {
  backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/img/ampPlat2.jpg')",
  backgroundSize: "cover"
}

export const IndexPageTemplate = ({
  tagline,
  tagImage,
  manifestoSection,
  bioSection
}) => (
  <div class="homePage">
    <VideoBG video="homeVideo" loop='true'></VideoBG>
    <section class="titleSection">
      <div className='container-full titleContent twoColumns-6-4 gridCenter'>
        <div {...reveal.slideDefault} className='gridCenter container'>
          <h2 className='titleTag leftAlign'>{tagline}</h2>
        </div>
        <div className="titleImage" {...reveal.slideDefault}>
          <img className='titleImageImage' src={`img/${tagImage}`} alt="Hugh Lobel speaking in the Atlas Building at CU Boulder"/>
        </div>
      </div>
    </section>
    <section className="fullScreen homeScreen">
        <div className="fullRow">
          <div className="twoColumns featuredProjects" >
            <div class="featuredTitle" {...reveal.slideDefault} ><h2>Featured Projects</h2></div>
            <a className="featuredOne" style={ sectionStyle }>
              <Link to={`/portfolio/MSDP 2`} className="perfectCenter">
                  <h3 className="white">MSDP 2</h3><br />
                  <p className="white category">Software</p><br />
                  <p className="white">The Music and Sound Design Platform (MSDP) is a free and open-source platform for Multimedia Synthesis, Design, and Performance.</p>
              </Link>
            </a>
            <a className="featuredFrontTwo" style={ sectionStyle2 }>
              <Link to={`/portfolio/Amplifire`} className="perfectCenter">
                <h3 className='textBorder'>Amplifire</h3><br /> 
                <p className="category textBorder">Web App Development</p><br />
                <p className='textBorder'>Front-end development for a redesign of their flagship platform.</p>
              </Link>
            </a>
          </div>
        </div>
    </section>
    <section class="manifestoSection">
      <div className='container manifestoContent'>
        <h2 {...reveal.slideDefault} >{manifestoSection}</h2>
        <div className="actionCall twoColumns">
          <div className="diveIn">
            <h3 {...reveal.slideDefault} >Dive In...</h3>
            <Link to="/portfolio"><div {...reveal.slideDefault} ><button className="button-transparent"><span>Explore Portfolio</span></button></div></Link>
          </div>
          <div className="reachOut">
            <h3 {...reveal.slideDefault} >...or Reach Out!</h3>
            <div {...reveal.slideDefault} ><button className="button-transparent openModal"><span>Contact</span></button></div>
          </div>
        </div>
      </div>
    </section>
    <section class="bioSection">
      <div className='container bioContent'>
        <h2 {...reveal.slideDefault} >About Hugh Lobel</h2>
        <p className='bioContent' {...reveal.slideDefault}>{bioSection}</p>
        <div className="actionCall threeColumns">
          <Link to="/about"><div {...reveal.slideDefault} ><button className="button-transparent"><span>Read Full Bio</span></button></div></Link>
          <Link to="/resume"><div {...reveal.slideDefault} ><button className="button-transparent"><span>View Developer Resume</span></button></div></Link>
          <Link to="/artist-cv"><div {...reveal.slideDefault} ><button className="button-transparent"><span>View Artist CV</span></button></div></Link>
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
