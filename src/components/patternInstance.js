import React from "react"
import TitleImage from "./titleImage"
import PropTypes from "prop-types"
import "./geometry.css"


const PatternInstance = ({ variation, left, right, top, bottom, position, opacity, animation }) => {
  
  function clean(obj) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }

    return obj
  }

  const styles = {
    left,
    right,
    top,
    bottom,
  }

  return (
    <div
      className={animation}
      style={{
        position,
        ...clean(styles)
      }}
    >
      <TitleImage opacity={opacity} ordnum={variation} />
    </div>
  )
}

PatternInstance.propTypes = {
  variation: PropTypes.number.isRequired,
  animation: PropTypes.string,
  position: PropTypes.string,
}

PatternInstance.defaultProps = {
  left: null,
  right: null,
  top: null,
  bottom: null,
  animation: null,
  position: 'absolute',
  opacity: 1,
}

export default PatternInstance
