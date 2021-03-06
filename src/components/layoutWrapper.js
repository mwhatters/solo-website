import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/navbar"

const LayoutWrapper = ({ children }) => {
  if (typeof window === `undefined`) {
    return (<></>);
  }

  return (
    <>
      {children}
      <Navbar />
    </>
  )
}

LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWrapper