import React from "react"
import ProjectImage from "../components/projectImage"
import PropTypes from "prop-types"
import Panel from "../components/panel"


const ProjectProfile = ({ project, highlighted, onBack }) => {
  const fetchProjectImageContent = () => {
    if (project.imageContent) {
      return project.imageContent
    }

    return (
      <ProjectImage
        projectKey={project.imageKey}
        parentStyle={{
          width: `270px`,
          height: `270px`,
        }}
      />
    )
  }

  const generateProjectProfile = () => {
    if (!project) {
      return (<div/>)
    }

    if (highlighted) {
      return (
        <div>
          <Panel
            header={project.name}
            imageContent={fetchProjectImageContent()}
            content={project.writtenContent}
            backButton={(
              <div className="project__profile__back" onClick={onBack}>
                Return to Grid
              </div>
            )}
          />
        </div>
      )
    }

    return (
      <div className="project__profile_item">
        <ProjectImage projectKey={project.imageKey} />
      </div>
    )
  }

  return generateProjectProfile()
}

ProjectProfile.propTypes = {
  project: PropTypes.object,
  highlighted: PropTypes.bool,
  onBack: PropTypes.func,
}

export default ProjectProfile
