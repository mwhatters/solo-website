import React from "react"
import ProjectImage from "../components/projectImage"
import PropTypes from "prop-types"
import Panel from "../components/panel"


const ProjectProfile = ({ project, highlighted, onBack }) => {
  const goBack = () => {
    onBack()
  }

  const generateProfileImage = () => {
    if (!project) {
      return (
        <div />
      )
    }

    let projectImage;
    if (project.imageContent) {
      projectImage = project.imageContent
    } else {
      projectImage = (
        <ProjectImage
          projectKey={project.imageKey}
          parentStyle={{
            width: `270px`,
            height: `270px`,
          }}
        />
      )
    }

    if (highlighted) {
      return (
        <div>
          <Panel
            header={project.name}
            imageContent={projectImage}
            content={project.writtenContent}
          />
          <div
            className="project__profile__back"
            onClick={goBack}
          >
            ↓
            <span style={{ position: 'relative', top: '2px', marginLeft: '4px', zIndex: 5 }}>
              Back to Grid
            </span>
          </div>
        </div>
      )
    }

    return (
      <div className="project__profile_item">
        <ProjectImage projectKey={project.imageKey} />
      </div>
    )
  }

  return generateProfileImage()
}

ProjectProfile.propTypes = {
  project: PropTypes.object,
  highlighted: PropTypes.bool,
  onBack: PropTypes.func,
}

export default ProjectProfile
