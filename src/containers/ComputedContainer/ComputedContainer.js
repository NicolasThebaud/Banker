import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, FormControl } from 'react-bootstrap'
import history from 'routes/history'
import evalOperation from 'services/evaluator'

import {
  updateComputedValue,
  delComputedValue
} from './actions'

import { getComputedValues } from './selectors'
import { getParsedData } from 'containers/AppContainer/selectors'

class ComputedContainer extends Component {
  constructor(props) {
    super(props)

    this.computeValue = this.computeValue.bind(this)
  }

  computeValue(index, title, val) {
    try {
      const value = evalOperation(val, this.props.parsedData)
      this.props.updateComputedValue(index, { title, value })
    } catch(e) { console.log(e) }
  }

  render() {
    const { values, delComputedValue } = this.props

    const emptyValue = (index) => {
      let { title, value } = {}

      return (
        <div className="c-value">
          <FormControl
            type="text"
            placeholder="name"
            onBlur={ (e) => { if (e.target.value.length > 0) title = e.target.value } }
          />
          <FormControl
            type="text"
            placeholder="operation ex: [1;1] + [1;2]"
            onBlur={ (e) => { if (e.target.value.length > 0) value = e.target.value } }
          />
          <div className="icons">
            <i className="fa fa-check" aria-hidden="true" onClick={() => (this.computeValue(index, title, value))} />
            <i className="fa fa-times" aria-hidden="true" onClick={() => (delComputedValue(index))} />
          </div>
        </div>
      )
    }

    const computedValue = (index, value) => (
      <div className="c-value">
        <p className="c-title">
          {value.title || 'unnamed' }
          <i className="fa fa-times c-delete" aria-hidden="true" onClick={() => (delComputedValue(index))} /> 
        </p>
        <p className={`c-result ${value.value > 0 ? 'c-green' : 'c-red'}`}>{value.value}</p>
      </div>
    )

    return (
      <section className="computed-container">
        <Row>
          { values && values.map((value, i) => (
            <Col xs={12} sm={6} md={4} key={`c${i}`}>
              { value.value 
                ? computedValue(i, value)
                : emptyValue(i)
              }
            </Col>
          ))}
        </Row>
      </section>
    )
  }
}

ComputedContainer.propTypes = {
  values: PropTypes.instanceOf(Array),
  updateComputedValue: PropTypes.func.isRequired,
  delComputedValue: PropTypes.func.isRequired
}

ComputedContainer.defaultProps = {
  values: []
}

const mapStateToProps = state => ({
  values: getComputedValues(state),
  parsedData: getParsedData(state)
})

const mapDispatchToProps = {
  updateComputedValue,
  delComputedValue
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComputedContainer)
