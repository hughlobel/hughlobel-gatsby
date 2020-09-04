import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import reveal from '../config/revealActions'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import VideoBG from '../components/VideoBG'

export const AboutPageTemplate = ({ 
  title, 
  content, 
  introduction,
  introImage,
  background,
  contentComponent 
}) => {
  const PageContent = contentComponent || Content

  return (
    <div class="aboutPage">
      <section className="heroSection" >
        <h2 {...reveal.slideDefault} >{title}</h2>
      </section>
      <VideoBG></VideoBG>
      <section introSection>
        <div className="bodyCopy container gridCenter twoColumns" >
          <h2 className='perfectCenter' >{introduction}</h2>
          <img src={`/img/${introImage}`} />
        </div>
      </section>
      <section className="formSection">
        <div className="bodyCopy" >
          <p>{background}</p>
        <PageContent className="content" content={content} />
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  introduction: PropTypes.string,
  introImage: PropTypes.string,
  background: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        introduction={post.frontmatter.introduction}
        introImage={post.frontmatter.introImage}
        background={post.frontmatter.background}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        introduction
        background
        introImage
      }
    }
  }
`
