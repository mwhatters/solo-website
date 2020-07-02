import React, { useState, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useQueryParam, NumberParam, StringParam } from "use-query-params";
import { windowSize } from '../lib/windowSize' 
import queryString from 'query-string'
import projects from '../lib/projects' 
import "../css/pages/projects.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import ProjectProfile from "../components/projectProfile"
import PatternInstance from "../components/patternInstance"
import withSizes from 'react-sizes'

const ProjectsPage = ({ isMobile }) => {
  const [project, setProjectParam] = useQueryParam('project', StringParam);
  const [exitingPage, setExitingPage] = useState(false)
  const anchor = useRef(null);

  const scrollToTop = () => {
    anchor.current.scrollIntoView({ behavior: "auto" })
  }

  const projectIsHighlighted = () => {
    return currentProject() ? true : false;
  }

  const windowIsDefined = () => {
    return typeof window !== 'undefined'
  }

  const currentProject = () => {
    if (!windowIsDefined()) { return; }
    let url = new URL(window.location)
    let parsed = queryString.parse(url.search)
    if (projects[parsed.project]) {
      return parsed.project
    }
  }

  const highlightProject = (projectKey) => {
    setProjectParam(projectKey)
  }

  const returnToGrid = () => {
    setProjectParam(undefined)
  }

  const generateProjectLinks = () => {
    let musicProfiles = []
    for (const [key, projectData] of Object.entries(projects)) {
      musicProfiles.push(
        <div
          onClick={() => highlightProject(key)}
          key={projectData.name}
          style={{}}
        >
          <ProjectProfile project={projectData} highlighted={false} />
        </div>
      )
    }

    return musicProfiles
  }

  const generateContent = () => {
    if (projectIsHighlighted()) {
      let fullProject = projects[currentProject()]
      return (
        <>
          <ProjectProfile
            project={fullProject}
            highlighted={true}
            onBack={() => returnToGrid()}
          />
          <div className="projects__post_wrapper"></div>
        </>
      )
    } else {
      return (
        <div className="projects__grid__wrapper">
          <Spacer marginTop={40} />
          <div className="projects__grid">
            {generateProjectLinks()}
          </div>
          <div className="projects__post_wrapper"></div>
        </div>
      )
    }
  }

  const backgroundContent = () => {
    return (
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={projectIsHighlighted()}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='fade'
        >
          <div style={{ position: 'relative' }}>
            <PatternInstance opacity={0.2} top={-50} left={-100} variation={6} animation="g3" />
            <PatternInstance opacity={0.2} top={150} left={-400} variation={3} animation="g5" />
            <PatternInstance opacity={0.2} top={0} right={-400} variation={2} animation="g6" />
            <PatternInstance opacity={0.2} top={400} left={-150} variation={5} animation="g1" />
            <PatternInstance opacity={0.2} bottom={-10} right={-130} variation={7} animation="g2" />
            <PatternInstance opacity={0.2} bottom={-640} right={-200} variation={4} animation="g-main" />
            <PatternInstance opacity={0.2} bottom={-1000} right={100} variation={8} animation="g4" />
          </div>
        </CSSTransition>
      </SwitchTransition>
    )
  }

  const leavingProjectsPages = () => {
    if (!windowIsDefined()) { return; }
    return !window.location.href.match('projects')
  }

  const foregroundContent = () => {
    return (
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={projectIsHighlighted()}
          addEndListener={(node, done) => {
            let enteringNewPage = node.className.match("fade-enter-active");
            if (enteringNewPage) { scrollToTop() }
            if (enteringNewPage && leavingProjectsPages()) { setExitingPage(true) }
            node.addEventListener("transitionend", done, false)
          }}
          classNames='fade'
        >
          {generateContent()}
        </CSSTransition>
      </SwitchTransition>
    )
  }

  return (
    <Layout scrollEnabled={!currentProject()}>
      <div ref={anchor} className="projects__main__top" />
        <SEO title="Projects" />
        <Spacer marginTop={isMobile ? 0 : 50} />
        {!exitingPage && 
          <>
            {backgroundContent()}
            {foregroundContent()}
          </>
        }
    </Layout>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 705,
})

export default withSizes(mapSizesToProps)(ProjectsPage)