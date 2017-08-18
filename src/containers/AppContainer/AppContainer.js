import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import history from 'routes/history'

import FileUploader from 'components/FileUploader'
import DataOverview from 'components/DataOverview'

import {
  getFileData
} from './selectors'

class AppContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      fileData
    } = this.props
    console.log(fileData)

    return (
      <main>
        { (!fileData)
          ? (<FileUploader />)
          : (<DataOverview rawData={fileData} />)
        }
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
