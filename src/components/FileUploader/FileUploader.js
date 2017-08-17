import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'

import {
  handleFile
} from 'containers/AppContainer/actions'

class FileUploader extends Component {
  constructor(props) {
    super(props)

    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(files) {
    const reader = new FileReader()
    reader.onload = (e) => {
      this.props.handleFile(reader.result)
    }
    reader.readAsText(files[0])
  }

  render() {
    return (
      <section className="dropzone">
        <Dropzone onDrop={this.onDrop}>
          <p>drop a .csv file here to begin</p>
        </Dropzone>
      </section>
    )
  }
}

FileUploader.propTypes = {
  handleFile: PropTypes.func.isRequired
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  handleFile
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploader)