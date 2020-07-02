import PropTypes from "prop-types"
import React, { useState, setState } from "react"
import Spacer from "../components/util/spacer"
import "../css/components/panel.css"
import withSizes from 'react-sizes'

const Panel = ({ imageContent, content, header, backButton, isMobile }) => {

  const mobileDisplay = (
    <div className="panel__mobile__wrapper">
      <div className="panel__mobile__content">
        {header && <h1>{header}</h1>}
        {imageContent && <>{imageContent}</>}
        {backButton && <>{backButton}</>}
        <Spacer marginTop={40} />
        {content}
        <Spacer marginTop={10} />
        {backButton && <>{backButton}</>}
      </div>
    </div>
  )
  
  const desktopDisplay = (
    <div className="panel__main__wrapper">
      <Spacer marginTop={100} />
      <div className="panel__profile__wrapper">
        {imageContent && 
          <>
            {imageContent}
            <Spacer marginLeft={80} />
          </>
        }
        <div className="panel__profile__info_wrapper">
          <div className="panel__profile__info">
            {header ? <h1>{header}</h1> : null}
            {content}
            <Spacer marginBottom={20} />
          </div>
        </div>
      </div>
      {backButton && <>{backButton}</>}
    </div>
  )

  const display = () => {
    if (isMobile) { return mobileDisplay }
    return desktopDisplay
  }

  return (
    display()
  )
}

Panel.propTypes = {
  imageContent: PropTypes.element,
  content: PropTypes.element,
  header: PropTypes.string,
  backButton: PropTypes.element,
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 705,
})

export default withSizes(mapSizesToProps)(Panel)