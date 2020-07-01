import PropTypes from "prop-types"
import React, { useState, setState } from "react"
import Spacer from "../components/util/spacer"
import "../css/components/panel.css"
import withSizes from 'react-sizes'

const Panel = ({ imageContent, content, header, isMobile }) => {

  const mobileDisplay = (
    <div className="panel__mobile__wrapper">
      {header ? <h1>{header}</h1> : null}
      {imageContent &&
        <>
          {imageContent}
          <Spacer marginTop={60} />
        </>
      }
      {content}
      <Spacer marginTop={60} />
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
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 705,
})

export default withSizes(mapSizesToProps)(Panel)