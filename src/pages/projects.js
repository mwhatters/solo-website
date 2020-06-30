import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import ProjectProfile from "../components/projectProfile"
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import projects from '../lib/projects' 
import PatternInstance from "../components/patternInstance"


const numberOfRows = Math.ceil(Object.entries(projects).length / 3)

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
      col++; if (col > 3) { row++; col = 1 }
    }

    return musicProfiles
  }


  render() {
    let content;
    
    if (this.state.highlightedProjectKey) {
      let currentProject = projects[this.state.highlightedProjectKey];
      content = (
        <>
          <ProjectProfile 
            project={currentProject}
            highlighted={true} 
            onBack={() => this.goToGrid()}
          />
          <div className="music__post_wrapper"></div>
        </>
      )
    } else {
      content = (
        <>
          <div
            className="music__grid"
            style={{
              gridTemplateColumns: `repeat(3, 1fr)`,
              gridTemplateRows: `repeat(${numberOfRows}, 1fr)`,
            }}
          >
            {this.generateProjectLinks()}
          </div>
          <div className="music__post_wrapper"></div>
        </>
      )
    }

    return (
      <Layout scrollEnabled={true}>
        <div 
          className="music__main__wrapper"
        >
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
          <div style={{ position: 'relative' }}>
            <PatternInstance position='fixed' top={-240} left={-140} variation={6} animation="g3" />
            <PatternInstance position='fixed' bottom={-240} left={-140} variation={7} animation="g2" />
            <PatternInstance position='fixed' bottom={-240} right={-140} variation={6} animation="g2" />
            <PatternInstance position='fixed' top={-240} right={-140} variation={7} animation="g3" />
          </div>

        </div> 
      </Layout>
    )
  }
}

