import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, Table } from 'react-bootstrap'

import parseCsv from 'services'

class DataOverview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parsedHeader: null,
      parsedBody: null
    }
  }

  componentWillMount() {
    const { rawData } = this.props
    const table = parseCsv(rawData)
    debugger
    this.setState({
      parsedHeader: table[0],
      parsedBody: table.slice(1)
    })
  }

  render() {
    const {
      parsedHeader,
      parsedBody
    } = this.state

    return (
      <Row>
        <Col xs={12}>
          <section className="overview">
          <p className="section-title">Data preview</p>
            <Table condensed responsive>
              <thead>
                <tr>
                  { parsedHeader && parsedHeader.map((cell, i) => (
                    <th key={`th_${i}`}>
                      { cell }
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                { parsedBody && parsedBody.map((entry, i) => (
                  <tr key={`tr_${i}`}>
                    { entry.map((cell, i) => (
                      <td key={`td_${i}`}>
                        { cell }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </section>
        </Col>
      </Row>
    )
  }
}

DataOverview.propTypes = {
  rawData: PropTypes.string.isRequired
}

export default DataOverview