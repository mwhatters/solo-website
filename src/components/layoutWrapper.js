import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/navbar"

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className="layout__wrapper_main">
        {children}
      </div>
      <Navbar />
    </>
  )
}

LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWrapper