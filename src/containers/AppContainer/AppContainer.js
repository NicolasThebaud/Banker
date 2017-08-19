import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import history from 'routes/history'

import FileUploader from 'components/FileUploader'

import {
  getFileData
} from './selectors'

class AppContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps({ fileData }) {
    if (fileData) history.push('/overview')
  }

  render() {
    const { fileData } = this.props

    return (
      <main>
        <FileUploader />
      </main>
    )
  }
}

AppContainer.propTypes = {
  fileData: PropTypes.string
}

AppContainer.defaultProps = {
  fileData: null
}

const mapStateToProps = state => ({
  fileData: getFileData(state)
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
