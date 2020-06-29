import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import ProjectProfile from "../components/projectProfile"


const projects = {
  glyph: {
    name: 'Glyph',
    pageLink: '/music/glyph',
    imageKey: 'glyph',
  },
  sc2020: {
    name: 'SC2020',
    pageLink: '/music/sc2020',
    imageKey: 'sc2020',
  },
  brookspark: {
    name: 'Brooks Park',
    pageLink: '/projects/brookspark',
    imageKey: 'brookspark',
  },
  restyoureyeseasynow: {
    name: 'Rest your Eyes Easy, Now',
    pageLink: '/projects/restyoureyeseasynow',
    imageKey: 'restyoureyeseasynow',
  },
  sib: {
    name: 'Luna',
    pageLink: '/projects/sib',
    imageKey: 'sib',
  },
  ontothemoon: {
    name: 'On to the Moon',
    pageLink: '/projects/ontothemoon',
    imageKey: 'ontothemoon',
  },
  cheshireking: {
    name: 'Cheshire King',
    pageLink: '/projects/cheshireking',
    imageKey: 'cheshireking',
  },
  intosilence: {
    name: 'Into Silence',
    pageLink: '/projects/intosilence',
    imageKey: 'intosilence',
  },
  aloud: {
    name: 'Aloud',
    pageLink: '/projects/aloud',
    imageKey: 'aloud',
  },
  onisolation: {
    name: 'On Isolation',
    pageLink: '/projects/onisolation',
    imageKey: 'onisolation',
  },
}

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedProjectKey: null,
    }
  }

  highLightProject(projectKey) {
    this.setState({ highlightedProjectKey: projectKey })
  }

  goToGrid() {
    this.setState({ highlightedProjectKey: null })
  }

  generateProjectLinks() {
    let musicProfiles = []
    let row = 1
    let col = 1

    for (const [key, projectData] of Object.entries(projects)) {
        musicProfiles.push(
          <div
            onClick={() => this.highLightProject(key)}
            key={projectData.name}
            style={{
              gridColumnStart: col,
              gridColumnEnd: col,
              gridRowStart: row,
              gridRowEnd: row,
            }}
          >
            <ProjectProfile project={projectData} highlighted={false} />
          </div>
        )
      

      col++
      if (col > 3) { row++; col = 1}
    }

    return musicProfiles
  }


  render() {
    let content;
    
    if (this.state.highlightedProjectKey) {
      let currentProject = projects[this.state.highlightedProjectKey];
      content = (
        <div className="project__highlighted__wrapper">
          <p>HEY!</p>
          <ProjectProfile project={currentProject} highlighted={true} onBack={() => this.goToGrid()}/>
        </div>
      )
    } else {
      let numberOfRows = Math.ceil(Object.entries(projects).length / 3)

      content = (
        <div
          className="music__grid"
          style={{
            gridTemplateColumns: `repeat(3, 1fr)`,
            gridTemplateRows: `repeat(${numberOfRows}, 1fr)`,
            height: 266.66 * numberOfRows,
            width: `800px`,
            marginBottom: `150px`,
          }}
        >
          {this.generateProjectLinks()}
        </div>
      )
    } 

    return (
      <Layout>
        <div className="music__main__wrapper">
          <SEO title="Music" />
          <Spacer marginTop={100} />
          {content}
        </div> 
      </Layout>
    )
  }
}

