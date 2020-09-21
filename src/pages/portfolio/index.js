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
            <h1 {...reveal.slideDefault}>Portfolio</h1>
            <p {...reveal.slideDefault}>Below you'll find a curated collection of client and personal projects. Dive in to any project for more details, and to find out more about what went in to bringing the concepts to life.</p>
          </section>
          <ProjectRoll />
        </div>
      </Layout>
    )
  }
}
