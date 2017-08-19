import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap'
import history from 'routes/history'

import {
  resetUpload
} from 'containers/AppContainer/actions'

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.renderTooltip = this.renderTooltip.bind(this)
    this.resetFile = this.resetFile.bind(this)
  }

  renderTooltip(info) {
    return (<Tooltip id="tooltip">{info}</Tooltip> )
  }

  resetFile() {
    this.props.resetUpload()
    history.push('/')
  }

  render() {
    return (
      <section className="sb-container">
        <OverlayTrigger placement="right" overlay={ this.renderTooltip('Upload a new file') }>
          <span onClick={this.resetFile}>
            <Glyphicon glyph="upload" />
          </span>
        </OverlayTrigger>
      </section>
    )
  }
}

Sidebar.propTypes = {
  resetUpload: PropTypes.func.isRequired
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  resetUpload
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
