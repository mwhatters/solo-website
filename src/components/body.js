import PropTypes from "prop-types"
import React, { useState, setState } from "react"

const Body = ({ children }) => {
  Body.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <div>
      <div className="body__main-content">
        {children}
      </div>
    </div>
  )
}

export default Body