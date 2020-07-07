import React from "react"
import PropTypes from "prop-types"

const Spacer = ({ marginTop, marginBottom, marginLeft, marginRight, flex }) => {
  return (
    <div 
      style={{
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        display: 'block',
        flex,
      }}
    />
  )
}

Spacer.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  flex: PropTypes.number,
}

Spacer.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  flex: 1,
}

export default Spacer