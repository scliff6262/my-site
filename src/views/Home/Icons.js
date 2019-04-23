import React from 'react'
import { Face, Group, Code, DesktopMac } from '@material-ui/icons'

const Icons = () => {
  return(
    <div id="icon-container">
      <h2 className="section-title">ABOUT</h2>
      <div className="trait-container">
        <Code />
        <p><b>Code</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel elementum nibh. </p>
      </div>
      <div className="trait-container">
        <Group />
        <p><b>Teamwork</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel elementum nibh. </p>
      </div>
      <div className="trait-container">
        <Face />
        <p><b>Leadership</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel elementum nibh. </p>
      </div>
      <div className="trait-container">
        <DesktopMac />
        <p><b>Computers</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel elementum nibh. </p>
      </div>
    </div>
  )
}

export default Icons
