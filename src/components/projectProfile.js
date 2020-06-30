import React from "react"
import ProjectImage from "../components/projectImage"
import PropTypes from "prop-types"
import Panel from "../components/panel"
import Spacer from "../components/util/spacer"
import { Link } from "gatsby"

export default class ProjectProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static propTypes = {
    project: PropTypes.object.isRequired,
    highlighted: PropTypes.bool,
    onBack: PropTypes.func,
  }

  onBack = () => {
    this.props.onBack()
  }

  render() {
    let projectImage;
    if (this.props.project.imageContent) {
      projectImage = this.props.project.imageContent
    } else {
      projectImage = (
          <ProjectImage
            projectKey={this.props.project.imageKey}
            parentStyle={{
              width: `270px`,
              height: `270px`,
            }}
          />
      )
    }

    let projectContent = (
      this.props.project.writtenContent
    )

    if (this.props.highlighted) {
      return (
        <div>
          <Panel
            header={this.props.project.name}
            imageContent={projectImage}
            content={projectContent}
          />
          <div>
            <div 
              className="project__profile__back"
              onClick={this.onBack}
            >
              ↓
              <span style={{ position: 'relative', top: '2px', marginLeft: '4px', zIndex: 5}}>
                Back to Grid
              </span>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="project__profile_item">
        <ProjectImage projectKey={this.props.project.imageKey} />
      </div>
    )
  }
}
