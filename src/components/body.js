import PropTypes from "prop-types"
import React, { useState, setState } from "react"

const Body = ({ children }) => {
  Body.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <div>
      <div className="layout__main_content">
        {children}
      </div>
    </div>
  )
}

export default Body