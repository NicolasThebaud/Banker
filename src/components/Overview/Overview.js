import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

const Overview = ({ data }) => (
  <Table condensed responsive>
    <tbody>
      { data && data.map((entry, i) => (
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
)

Overview.propTypes = {
  data: PropTypes.instanceOf(Array)
}

Overview.defaultProps = {
  data: null
}

export default Overview