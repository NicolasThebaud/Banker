import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import history from 'routes/history'
import parseCsv from 'services'

import Overview from 'components/Overview'
import Sidebar from 'components/Sidebar'

import {
  getFileData
} from 'containers/AppContainer/selectors'

class OverviewContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { parsedData: null }
  }

  componentWillMount() {
    const { fileData } = this.props

    if (!fileData) history.push('/')
    else this.setState({ parsedData: parseCsv(fileData) })
  }

  render() {
    const { parsedData } = this.state

    return (
      <section className="overview-container">
        <Sidebar />

        <Row>
          <Col xs={12}>
            <p className="section-title">Data preview</p>
            <section className="overview">
              <Overview data={parsedData} />
            </section>
          </Col>
        </Row>
      </section>
    )
  }
}

OverviewContainer.propTypes = {
  rawData: PropTypes.string
}

OverviewContainer.defaultProps = {
  rawData: null
}

const mapStateToProps = state => ({
  fileData: getFileData(state)
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewContainer)
