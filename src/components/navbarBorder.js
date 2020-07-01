import React from "react"
import "../css/components/navbar.css"
import PropTypes from "prop-types"

// Unused at this time

const NavbarBorder = ({ children, width, offset }) => {
  return (
    <div style={{width: '100%'}}>
      <div
        className="navbar__links__bottom_border"
        style={{
          width: width,
          left: offset,
        }}
      />
    </div>
  )
}

NavbarBorder.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  offset: PropTypes.string,
}

export default NavbarBorder