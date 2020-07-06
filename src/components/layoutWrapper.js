import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/navbar"

const LayoutWrapper = ({ children }) => {
  return (
    <>
        {children}
    </>
  )
}

LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWrapper