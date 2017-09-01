import React, {PropTypes} from 'react'

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

NoMatch.propTypes = {
  location: PropTypes.object
}
export default NoMatch
