import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import VideoBG from '../components/VideoBG'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div class="aboutPage">
      <section className="heroSection" >
        <h2>{title}</h2>
      </section>
      <VideoBG></VideoBG>
      <section className="formSection">
        <div className="bodyCopy">
        <PageContent className="content" content={content} />
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
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
      }
    }
  }
`
