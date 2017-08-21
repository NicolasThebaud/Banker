import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import history from 'routes/history'

import Icon from './Icon'

import { resetUpload } from 'containers/AppContainer/actions'
import { addComputedValue } from 'containers/ComputedContainer/actions'

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.resetFile = this.resetFile.bind(this)
  }

  resetFile() {
    this.props.resetUpload()
    history.push('/')
  }

  render() {
    return (
      <section className="sb-container">
        <Icon icon="upload" tooltip={'Upload a new file'} action={this.resetFile} />
        <Icon icon="gears" tooltip={'Compute value'} action={this.props.addComputedValue} />
        <Icon icon="tachometer" tooltip={'Generate graph'} action={() => {}} />
      </section>
    )
  }
}

Sidebar.propTypes = {
  resetUpload: PropTypes.func.isRequired,
  addComputedValue: PropTypes.func.isRequired
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  resetUpload,
  addComputedValue
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
