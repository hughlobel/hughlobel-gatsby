import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import reveal from '../config/revealActions'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import VideoBG from '../components/VideoBG'
import ImageBG from '../components/ImageBG'

export const AboutPageTemplate = ({ 
  title, 
  content, 
  introduction,
  introTitle,
  introCopy,
  introImage, 
  work1Title, 
  work1Copy, 
  work1Image, 
  work2Title, 
  work2Copy,
  work2Image, 
  backgroundTitle, 
  backgroundCopy, 
  backgroundImage, 
  devPathTitle, 
  devPathCopy, 
  devPathImage, 
  devPathList, 
  devPathOutro, 
  learnMoreTitle, 
  learnMoreCopy, 
  learnMoreImage,
  background,
  contentComponent 
}) => {
  const PageContent = contentComponent || Content

  return (
    <div class="aboutPage">
      <ImageBG image='hughAbout.jpg' title={title} light='true' />
      {/* <section className="heroSection heroVideo" >
        <h2 {...reveal.slideDefault} >{title}</h2>
      </section> */}
      {/* <VideoBG></VideoBG> */}
      <section className='contentSection gridCenter'>
        <div className="container-full gridCenter twoColumns" >
          <div class='gridCenter'>
            <h2 className='perfectCenter' >{introTitle}</h2>
            <p className='perfectCenter' >{introCopy}</p>
          </div>
          <img src={`/img/${introImage}`} />
        </div>
      </section>
      <section className='contentSection gridCenter'>
        <div className="container-full gridCenter twoColumns" >
          <div class='gridCenter'>
            <h2 className='perfectCenter' >{work1Title}</h2>
            <p className='perfectCenter' >{work1Copy}</p>
          </div>
          <img src={`/img/${work1Image}`} />
        </div>
      </section>
      <section className='contentSection gridCenter'>
        <div className="container-full gridCenter twoColumns" >
          <div class='gridCenter'>
            <h2 className='perfectCenter' >{work2Title}</h2>
            <p className='perfectCenter' >{work2Copy}</p>
          </div>
          <img src={`/img/${work2Image}`} />
        </div>
      </section>
      <section className='contentSection gridCenter'>
        <div className="container-full gridCenter twoColumns" >
          <div class='gridCenter'>
            <h2 className='perfectCenter' >{backgroundTitle}</h2>
            <p className='perfectCenter' >{backgroundCopy}</p>
          </div>
          <img src={`/img/${backgroundImage}`} />
        </div>
      </section>
      <section className='contentSection gridCenter'>
        <div className="container-full gridCenter twoColumns" >
          <div class='gridCenter'>
            <h2 className='perfectCenter' >{devPathTitle}</h2>
            <p className='perfectCenter' >{devPathCopy}</p>
            {devPathList.map((event) => 
              <div>
                <p className='perfectCenter'>{event}</p>
                <br />
              </div>
            )}
            <p className='perfectCenter' >{devPathOutro}</p>
          </div>
          <img src={`/img/${devPathImage}`} />
        </div>
      </section>
      <section className='contentSection gridCenter'>
        <div className="container-full gridCenter twoColumns" >
          <div class='gridCenter'>
            <h2 className='perfectCenter' >{learnMoreTitle}</h2>
            <p className='perfectCenter' >{learnMoreCopy}</p>
          </div>
          <img src={`/img/${learnMoreImage}`} />
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  introduction: PropTypes.string,
  introTitle: PropTypes.string,
  introCopy: PropTypes.string,
  introImage: PropTypes.string,
  work1Title: PropTypes.string,
  work1Copy: PropTypes.string,
  work1Image: PropTypes.string,
  work2Title: PropTypes.string,
  work2Copy: PropTypes.string,
  work2Image: PropTypes.string,
  backgroundTitle: PropTypes.string,
  backgroundCopy: PropTypes.string,
  backgroundImage: PropTypes.string,
  devPathTitle: PropTypes.string,
  devPathCopy: PropTypes.string,
  devPathImage: PropTypes.string,
  devPathList: PropTypes.array,
  devPathOutro: PropTypes.string,
  learnMoreTitle: PropTypes.string,
  learnMoreCopy: PropTypes.string,
  learnMoreImage: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        introTitle={post.frontmatter.introTitle}
        introCopy={post.frontmatter.introCopy}
        introImage={post.frontmatter.introImage}
        work1Title={post.frontmatter.work1Title}
        work1Copy={post.frontmatter.work1Copy}
        work1Image={post.frontmatter.work1Image}
        work2Title={post.frontmatter.work2Title}
        work2Copy={post.frontmatter.work2Copy}
        work2Image={post.frontmatter.work2Image}
        backgroundTitle={post.frontmatter.backgroundTitle}
        backgroundCopy={post.frontmatter.backgroundCopy}
        backgroundImage={post.frontmatter.backgroundImage}
        devPathTitle={post.frontmatter.devPathTitle}
        devPathCopy={post.frontmatter.devPathCopy}
        devPathImage={post.frontmatter.devPathImage}
        devPathList={post.frontmatter.devPathList}
        devPathOutro={post.frontmatter.devPathOutro}
        learnMoreTitle={post.frontmatter.learnMoreTitle}
        learnMoreCopy={post.frontmatter.learnMoreCopy}
        learnMoreImage={post.frontmatter.learnMoreImage}
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
        introTitle
        introCopy
        introImage
        work1Title
        work1Copy
        work1Image
        work2Title
        work2Copy
        work2Image
        backgroundTitle
        backgroundCopy
        backgroundImage
        devPathTitle
        devPathCopy
        devPathImage
        devPathList
        devPathOutro
        learnMoreTitle
        learnMoreCopy
        learnMoreImage
      }
    }
  }
`
