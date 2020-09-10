import React from 'react'

import Layout from '../../components/Layout'
import ProjectRoll from '../../components/ProjectRoll'
import reveal from '../../config/revealActions'

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div class="projectsPage">
          <section className="heroSection simpleHero">
            <h1 {...reveal.slideDefault}>Projects</h1>
            <p {...reveal.slideDefault}>Below you'll find a collection of some of Hugh's favorite projects. Dive in to any project to learn about the details of the work, and to find out more about what went in to bringing the concepts to life!</p>
          </section>
          <ProjectRoll />
        </div>
      </Layout>
    )
  }
}
