import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import ProjectProfile from "../components/projectProfile"
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import projects from '../lib/projects' 

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedProjectKey: null,
    }
  }

  static numberOfRows = Math.ceil(Object.entries(projects).length / 3)

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
      col++; if (col > 3) { row++; col = 1 }
    }

    return musicProfiles
  }


  render() {
    let content;
    
    if (this.state.highlightedProjectKey) {
      let currentProject = projects[this.state.highlightedProjectKey];
      content = (
          <ProjectProfile 
            project={currentProject}
            highlighted={true} 
            onBack={() => this.goToGrid()}
          />
      )
    } else {
      content = (
        <div
          className="music__grid"
          style={{
            gridTemplateColumns: `repeat(3, 1fr)`,
            gridTemplateRows: `repeat(${this.numberOfRows}, 1fr)`,
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
          <SEO title="Projects" />
          <Spacer marginTop={100} />
          <SwitchTransition>
            <CSSTransition
              key={this.state.highlightedProjectKey}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames='fade'
            >
              {content}
            </CSSTransition>
          </SwitchTransition>
        </div> 
      </Layout>
    )
  }
}

