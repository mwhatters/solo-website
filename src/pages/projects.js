import React, { useState, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useQueryParam, NumberParam, StringParam } from "use-query-params";
import { timeout } from '../lib/timeout' 
import queryString from 'query-string'
import projects from '../lib/projects' 

import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import ProjectProfile from "../components/projectProfile"
import PatternInstance from "../components/patternInstance"

import "../css/pages/projects.css"

const ProjectsPage = () => {
  const [highlightedProjectKey, setHighlightedProjectKey] = useState(null);
  const [project, setProjectParam] = useQueryParam('project', StringParam);
  const scrollEl = useRef(null);
  const numberOfRows = Math.ceil(Object.entries(projects).length / 3)

  const projectQueryParamsPresent = () => {
    return currentProject() ? true : false;
  }

  const currentProject = () => {
    let url = new URL(window.location)
    let parsed = queryString.parse(url.search)
    return parsed.project
  }

  const scrollToTop = () => {
    scrollEl.current.scrollIntoView({ behavior: "smooth" })
  }

  const highlightProject = async function(projectKey) {
    scrollToTop()
    await timeout(500)
    setProjectParam(projectKey)
  }

  const returnToGrid = () => {
    setProjectParam(undefined)
  }

  const generateProjectLinks = () => {
    let musicProfiles = []
    let row = 1
    let col = 1

    for (const [key, projectData] of Object.entries(projects)) {
      musicProfiles.push(
        <div
          onClick={() => highlightProject(key)}
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

  const generateContent = () => {
    if (projectQueryParamsPresent()) {
      let fullProject = projects[currentProject()]
      return (
        <>
          <ProjectProfile
            project={fullProject}
            highlighted={true}
            onBack={() => returnToGrid()}
          />
          <div className="music__post_wrapper"></div>
        </>
      )
    } else {
      return (
        <>
          <div
            className="music__grid"
            style={{
              gridTemplateColumns: `repeat(3, 1fr)`,
              gridTemplateRows: `repeat(${numberOfRows}, 1fr)`,
            }}
          >
            {generateProjectLinks()}
          </div>
          <div className="music__post_wrapper"></div>
        </>
      )
    }
  }

  const backgroundContent = () => {
    return (
      <SwitchTransition>
        <CSSTransition
          key={projectQueryParamsPresent()}
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
    )
  }

  const foregroundContent = () => {
    return (
      <SwitchTransition>
        <CSSTransition
          key={projectQueryParamsPresent()}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='fade'
        >
          {generateContent()}
        </CSSTransition>
      </SwitchTransition>
    )
  }

  return (
    <Layout scrollEnabled={!currentProject()}>
      <div ref={scrollEl} className="music__main__top" />
      <div className="music__main__wrapper">
        <SEO title="Projects" />
        <Spacer marginTop={100} />
        {backgroundContent()}
        {foregroundContent()}
      </div>
    </Layout>
  )
}

export default ProjectsPage