import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, OverlayTrigger, Popover } from 'react-bootstrap'

class Overview extends Component {
  constructor(props) {
    super(props)

    this.state = { activeCells: {} }

    this.renderPopover = this.renderPopover.bind(this)
    this.toggleCell = this.toggleCell.bind(this)
  }

  renderPopover(i, j) {
    return (
      <Popover id="popover-positioned-bottom">
        {`[${j};${i}]`}
      </Popover>
    )
  }

  toggleCell(i, j) {
    const key = `${i};${j}`
    const cells = this.state.activeCells
    cells[key] = !cells[key]
    this.setState({ activeCells: cells })
  }

  render() {
    const { data } = this.props

    return (
      <Table condensed responsive>
        <tbody>
          { data && data.map((entry, i) => (
            <tr key={`tr_${i}`}>
              { entry.map((cell, j) => (
                <OverlayTrigger trigger="click" placement="bottom" overlay={this.renderPopover(i,j)} key={`td_${j}`}>
                  <td
                    className={this.state.activeCells[`${i};${j}`] ? 'active' : ''}
                    onClick={() => (this.toggleCell(i, j)) }
                  >
                    { cell }
                  </td>
                </OverlayTrigger>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}

Overview.propTypes = {
  data: PropTypes.instanceOf(Array)
}

Overview.defaultProps = {
  data: null
}

export default Overview