import React, { Component } from 'react'
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap'
import history from 'routes/history'

const Sidebar = () => {
  const renderTooltip = (info) => (
    <Tooltip id="tooltip">{info}</Tooltip> 
  )

  return (
    <section className="sb-container">
      <OverlayTrigger placement="right" overlay={ renderTooltip('Upload a new file') }>
        <span onClick={ () => (history.push('/')) }>
          <Glyphicon glyph="upload" />
        </span>
      </OverlayTrigger>
    </section>
  )
}

export default Sidebar
