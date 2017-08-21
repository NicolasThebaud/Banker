import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

const Icon = ({ icon, tooltip, action }) => {
  const renderTooltip = (info) => (
    <Tooltip id="tooltip">{info}</Tooltip>
  )

  return (
    <OverlayTrigger placement="right" overlay={ renderTooltip(tooltip) }>
      <i
        className={`fa fa-${icon}`}
        aria-hidden="true"
        onClick={action}
      />
    </OverlayTrigger>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}

export default Icon
