import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import history from 'routes/history'
import { Row, Col } from 'react-bootstrap'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

class GraphContainer extends Component {
  render() {
    /**************************/
    const max_pos = 1000
    const max_neg = 1000
    let value = -400
    const neg = value<0
    value = Math.sqrt(value*value)
    const pad = value>0 ? (max_pos-value) : (max_neg-value)
    console.log(value, pad)
    /*************************/

    const data = [{name: 'Group A', value}, {name: 'Group B', value: pad}];
    const COLORS = ['#d32f2f', '#ccc']
    
    const data2 = [{name: 'Group A', value: 800}, {name: 'Group B', value: 200}];
    const COLORS2 = ['#2e7d32', '#ccc']

    return (
      <section className="graph-container">
        <Row>
          <Col xs={12} sm={6} md={4}>
            <section className="g-container">
              <p className="g-title">Balance</p>
              <p className="g-label">-400€</p>
              <ResponsiveContainer height={200} width="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    startAngle={90}
                    endAngle={neg ? 180 : 0}
                    innerRadius={60}
                    outerRadius={80}
                  >
                    { data.map((entry, index) => <Cell key={`cell${index}`} fill={COLORS[index % COLORS.length]}/>) }
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </section>
          </Col>


          <Col xs={12} sm={6} md={4}>
            <section className="g-container">
              <p className="g-title">Balance 2</p>
              <p className="g-label">800€</p>
              <ResponsiveContainer height={200} width="100%">
                <PieChart>
                  <Pie
                    data={data2}
                    dataKey="value"
                    startAngle={90}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                  >
                    { data.map((entry, index) => <Cell key={`cell${index}`} fill={COLORS2[index % COLORS.length]}/>) }
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </section>
          </Col>
        </Row>
      </section>
    )
  }
}

GraphContainer.propTypes = {
}

GraphContainer.defaultProps = {
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphContainer)
