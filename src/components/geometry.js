import React from "react"
import TitleImage from "../components/titleImage"
import "./geometry.css"

const Geometry = ({ children, alignment }) => {



  return (
    <div className="geometry__container">
      <div className="geometry__container__relative">
        <div style={{position: 'absolute', bottom: 0}}>
          <TitleImage visible={true} ordnum={6} />
        </div>
      </div>
    </div>
  )
}

export default Geometry
