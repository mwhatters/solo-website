import React from "react"
import "./navbar.css"
import PropTypes from "prop-types"

export default class NavbarBorder extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    width: PropTypes.string.isRequired,
    offset: PropTypes.string.isRequired,
  }

  static defaultProps = {
    width: `40px`,
    offset: `40px`,
  }

  render() {
    return (
      <div 
        className="navbar__links__bottom_border"
        style={{
          width: this.props.width,
          left: this.props.offset,
        }}
      />
    )
  }
}
