import React from "react"
import ProjectImage from "../components/projectImage"
import PropTypes from "prop-types"


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
    if (this.props.highlighted) {
      return (
        <div>
          <ProjectImage projectKey={this.props.project.imageKey} />
          <div onClick={this.onBack}>GO BACK</div>
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
