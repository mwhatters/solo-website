import PropTypes from "prop-types"
import React, { useState, setState } from "react"
import Spacer from "../components/util/spacer"
import "../css/components/panel.css"


const Panel = ({ children, imageContent, content, header }) => {
  Panel.propTypes = {
    children: PropTypes.node,
    imageContent: PropTypes.element,
    content: PropTypes.element,
    header: PropTypes.string,
  }

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

export default Panel