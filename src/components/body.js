import PropTypes from "prop-types"
import React, { useState, setState } from "react"

const Body = ({ children }) => {
  Body.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return <>{children}</>
}

export default Body