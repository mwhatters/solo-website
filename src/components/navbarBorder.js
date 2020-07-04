import React from "react"
import "../css/components/navbar.css"
import PropTypes from "prop-types"

const NavbarBorder = ({ children, width, offset }) => {
  return (
    <div style={{width: '100%'}}>
      <div
        id="navbar__border"
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
  width: PropTypes.number,
  offset: PropTypes.number,
}

export default NavbarBorder