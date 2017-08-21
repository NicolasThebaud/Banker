import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import history from 'routes/history'
import parseCsv from 'services/parser'

import ComputedContainer from 'containers/ComputedContainer'
import GraphContainer from 'containers/GraphContainer'

import Overview from 'components/Overview'
import Sidebar from 'components/Sidebar'

import { setParsedData } from 'containers/AppContainer/actions'
import {
  getFileData,
  getParsedData
} from 'containers/AppContainer/selectors'

class OverviewContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { fileData, setParsedData } = this.props

    if (!fileData) history.push('/')
    else setParsedData(parseCsv(fileData))
  }

  render() {
    const { parsedData } = this.props

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

          <Col xs={12} md={6}><ComputedContainer /></Col>
          <Col xs={12} md={6}><GraphContainer /></Col>
        </Row>
      </section>
    )
  }
}

OverviewContainer.propTypes = {
  rawData: PropTypes.string,
  setParsedData: PropTypes.func.isRequired
}

OverviewContainer.defaultProps = {
  rawData: null
}

const mapStateToProps = state => ({
  fileData: getFileData(state),
  parsedData: getParsedData(state)
})

const mapDispatchToProps = {
  setParsedData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewContainer)
