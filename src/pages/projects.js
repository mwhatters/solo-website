import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import ProjectProfile from "../components/projectProfile"
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import projects from '../lib/projects' 
import { timeout } from '../lib/timeout' 
import PatternInstance from "../components/patternInstance"
import smoothscroll from 'smoothscroll-polyfill';


const numberOfRows = Math.ceil(Object.entries(projects).length / 3)

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    smoothscroll.polyfill();
    this.scrollRef = React.createRef();
    this.state = {
      highlightedProjectKey: null,
    }
  }

  scrollToTop = () => {
    this.scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }

  async highLightProject(projectKey) {
    this.scrollToTop();
    await timeout(200)
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

    const projectIsHighlighted = this.state.highlightedProjectKey;

    return (
      <Layout scrollEnabled={!projectIsHighlighted}>
        <div ref={this.scrollRef} className="music__main__top" />
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
              <div style={{ position: 'relative' }}>
                <PatternInstance opacity="0.2" top={-50} left={-100} variation={6} animation="g3" />
                <PatternInstance opacity="0.2" top={150} left={-400} variation={3} animation="g5" />
                <PatternInstance opacity="0.2" top={0} right={-400} variation={2} animation="g6" />
                <PatternInstance opacity="0.2" top={400} left={-150} variation={5} animation="g1" />
                <PatternInstance opacity="0.2" bottom={0} right={-150} variation={7} animation="g2" />
                <PatternInstance opacity="0.2" bottom={-600} right={-150} variation={4} animation="g-main" />
                <PatternInstance opacity="0.2" bottom={-1000} right={100} variation={8} animation="g4" />
              </div>
            </CSSTransition>
          </SwitchTransition>
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

