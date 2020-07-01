import PropTypes from "prop-types"
import React, { useState, setState } from "react"
import Spacer from "../components/util/spacer"
import "../css/components/panel.css"

const Panel = ({ imageContent, content, header }) => {
  return (
    <div className="about__main__wrapper">
      <Spacer marginTop={130} />
      <div className="about__profile__wrapper">
        {imageContent}
        <Spacer marginLeft={80} />
        <div className="about__profile__info_wrapper">
          <div className="about__profile__info">
            {header ? <h1>{header}</h1> : null}
            {content}
            <Spacer marginBottom={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

Panel.propTypes = {
  imageContent: PropTypes.element,
  content: PropTypes.element,
  header: PropTypes.string,
}

export default Panel