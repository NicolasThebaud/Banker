import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

const Overview = ({ header, body }) => (
  <Table condensed responsive>
    <thead>
      <tr>
        { header && header.map((cell, i) => (
          <th key={`th_${i}`}>
            { cell }
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      { body && body.map((entry, i) => (
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
  header: PropTypes.instanceOf(Array),
  body: PropTypes.instanceOf(Array)
}

Overview.defaultProps = {
  header: null,
  body: null
}

export default Overview