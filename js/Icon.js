import React, { PropTypes } from 'react'
import { ICONS } from './constants'

const Icon = (props) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: props.color
    }
  }
  return (
    <svg
      className='align-self-center'
      width={`${props.width}em`}
      height={`${props.width / ICONS.ratio[props.icon]}em`}
      viewBox={ICONS.viewBox[props.icon]}
    >
      <path
        style={styles.path}
        d={ICONS.path[props.icon]} />
    </svg>)
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  color: PropTypes.string
}

Icon.defaultProps = {
  width: 2,
  color: 'antiquewhite'
}

export default Icon
