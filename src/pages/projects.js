import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import ProjectProfile from "../components/projectProfile"
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import projects from '../lib/projects' 
import { timeout } from '../lib/timeout' 
import PatternInstance from "../components/patternInstance"
import { useQueryParam, NumberParam, StringParam } from "use-query-params";
import React, { useState, useEffect, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import queryString from 'query-string'

const ProjectsPage = () => {
  const [highlightedProjectKey, setHighlightedProjectKey] = useState(null);
  const [project, setProjectParam] = useQueryParam('project', StringParam);
  const scrollEl = useRef(null);
  const numberOfRows = Math.ceil(Object.entries(projects).length / 3)

  const projectQueryParamsPresent = () => {
    let url = new URL(window.location)
    let parsed = queryString.parse(url.search)
    let currentProject = parsed.project
    if (currentProject) {
      setHighlightedProjectKey(currentProject)
      return true;
    }

    return false;
  }

  const scrollToTop = () => {
    scrollEl.current.scrollIntoView({ behavior: "auto" })
  }

  const highlightProject = async function(projectKey) {
    scrollToTop()
    setProjectParam(projectKey)
    await timeout(500)
    setHighlightedProjectKey(projectKey)
  }

  const returnToGrid = () => {
    setProjectParam(undefined)
    setHighlightedProjectKey(null)
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
    if (highlightedProjectKey || projectQueryParamsPresent()) {
      let currentProject = projects[highlightedProjectKey]
      return (
        <>
          <ProjectProfile
            project={currentProject}
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
          key={highlightedProjectKey}
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
          key={highlightedProjectKey}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='fade'
        >
          {generateContent()}
        </CSSTransition>
      </SwitchTransition>
    )
  }

  return (
    <Layout scrollEnabled={!highlightedProjectKey}>
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