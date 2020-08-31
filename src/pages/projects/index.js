import React from 'react'

import Layout from '../../components/Layout'
import ProjectRoll from '../../components/ProjectRoll'

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div class="projectsPage">
          <section className="heroSection simpleHero">
            <h1>Projects</h1>
          </section>
          <ProjectRoll />
        </div>
      </Layout>
    )
  }
}
