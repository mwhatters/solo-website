import React, { useState, useCallback } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useQueryParam, StringParam } from "use-query-params";
import queryString from 'query-string'
import projects from '../lib/projects' 
import "../css/pages/projects.css"
import "../css/components/styled-scroll.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import ProjectProfile from "../components/projectProfile"
import PatternInstance from "../components/patternInstance"
import withSizes from 'react-sizes'

const ProjectsPage = ({ isMobile }) => {
  const [_, setProjectParam] = useQueryParam('project', StringParam);
  const [exitingPage, setExitingPage] = useState(false)
  const [scrollPositionY, setScrollPositionY] = useState(0)

  const anchor = useCallback(node => {
      if (node == null) { return }

      if (scrollPositionY > 0) {
        node.scrollTop = scrollPositionY
      }
  }, [scrollPositionY]);

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
    let scrollEl = document.querySelector('.projects__grid__wrapper')
    setScrollPositionY(scrollEl.scrollTop)
    setProjectParam(projectKey)
  }

  const returnToGrid = () => {
    setProjectParam(undefined);
  }

  const generateProjectLinks = () => {
    let musicProfiles = []
    for (const [key, projectData] of Object.entries(projects)) {
      musicProfiles.push(
        <div
          onClick={() => highlightProject(key)}
          onKeyDown={() => highlightProject(key)}
          key={projectData.name}
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
          <Spacer marginTop={40} />
          <ProjectProfile
            project={fullProject}
            highlighted={true}
            onBack={() => returnToGrid()}
          />
          <Spacer marginTop={40} />
        </>
      )
    } else {
      return (
        <>
          <Spacer marginTop={40} />
            <div ref={anchor} className="projects__grid__wrapper styled-scroll">
              <div className="projects__grid">
                {generateProjectLinks()}
              </div>
              <Spacer marginTop={20} />
            </div>
        </>
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
            <PatternInstance opacity={0.2} top={0} left={-100} variation={6} animation="g3" />
            <PatternInstance opacity={0.2} top={50} left={-400} variation={3} animation="g5" />
            <PatternInstance opacity={0.2} top={0} right={-400} variation={2} animation="g6" />
            <PatternInstance opacity={0.2} bottom={-10} right={-130} variation={7} animation="g2" />
            <PatternInstance opacity={0.2} bottom={-540} right={-200} variation={4} animation="g-main" />
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
    <Layout>
        <SEO title="Projects" />
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