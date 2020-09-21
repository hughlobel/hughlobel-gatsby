import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
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
  const bgSection1 = {
    backgroundImage: "linear-gradient(rgba(248,248,255,0.7), rgba(248,248,255,0.7)), url('/img/" + work1Image + "')"
  }
  const bgSection2 = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/img/" + work2Image + "')"
  }
  const bgSection3 = {
    backgroundImage: "linear-gradient(rgba(248,248,255,0.7), rgba(248,248,255,0.7)), url('/img/" + backgroundImage + "')"
  }
  const bgSection4 = {
    backgroundImage: "linear-gradient(rgba(248,248,255,0.7), rgba(248,248,255,0.7)), url('/img/" + learnMoreImage + "')"
  }
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
            <h3 className='perfectCenter' >{introCopy}</h3>
          </div>
          <img src={`/img/${introImage}`} />
        </div>
      </section>
      <section className='contentSection gridCenter' style={bgSection1}>
        <div className="container-full gridCenter" >
          <div class='gridCenter'>
            <h2 className='perfectCenter textBorder' >{work1Title}</h2>
            <p className='perfectCenter textBorder' >{work1Copy}</p>
          </div>
        </div>
      </section>
      <section className='contentSection gridCenter' style={bgSection2}>
        <div className="container-full gridCenter" >
          <div class='gridCenter'>
            <h2 className='perfectCenter white textBorder' >{work2Title}</h2>
            <p className='perfectCenter white textBorder' >{work2Copy}</p>
          </div>
        </div>
      </section>
      <section className='contentSection gridCenter' style={bgSection3}>
        <div className="container-full gridCenter" >
          <div class='gridCenter'>
            <h2 className='perfectCenter textBorder' >{backgroundTitle}</h2>
            <p className='perfectCenter textBorder' >{backgroundCopy}</p>
          </div>
        </div>
      </section>
      <section className='contentSection gridCenter backgroundSection'>
        <div className="container-full gridCenter" >
          <h2 className='perfectCenter' >{devPathTitle}</h2>
          <p className='perfectCenter' >{devPathCopy}</p>
          <div className='gridCenter twoColumns listSection'>
            <div>
              {devPathList.map((event) => 
                <ul>
                  <li className=''>{event}</li>
                </ul>
              )}
            </div>
            <img src={`/img/${devPathImage}`} />
          </div>
          <p className='perfectCenter' >{devPathOutro}</p>
        </div>
      </section>
      <section className='contentSection gridCenter' style={bgSection4}>
        <div className="container-full gridCenter" >
          <h2 className='perfectCenter textBorder' >{learnMoreTitle}</h2>
          <p className='perfectCenter textBorder' >{learnMoreCopy}</p>
          <Link to="/portfolio"><div><button className="button-transparent"><span>Explore Portfolio</span></button></div></Link>
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
