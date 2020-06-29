import React from "react"
import PropTypes from "prop-types"

const Spacer = ({ marginTop, marginBottom, marginLeft, marginRight }) => {
  return (
    <div 
      style={{
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        display: 'block',
        flex: 1,
      }}
    />
  )
}

Spacer.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
}

Spacer.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
}

export default Spacer