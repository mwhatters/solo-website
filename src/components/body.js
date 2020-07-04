import PropTypes from "prop-types"
import React from "react"

const Body = ({ children }) => {
  Body.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <div className="body__main_content">
      {children}
    </div>
  )
}

export default Body