import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint'

const ScrollifyList = ({ data, pageSize, render }) => {
  const [visibleData, setVisibleData] = useState(data.slice(0, pageSize))

  const handleWaypointEnter = () =>
    setVisibleData(data.slice(0, visibleData.length + pageSize))

  return visibleData.reduce((acc, object, index) => {
    if (index === visibleData.length - 1) {
      acc.push(
        <Waypoint
          key={`${visibleData.length}-waypoint`}
          onEnter={handleWaypointEnter}
        />,
      )
    }
    acc.push(render(object, index))
    return acc
  }, [])
}

ScrollifyList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  pageSize: PropTypes.number,
  render: PropTypes.func.isRequired,
}

ScrollifyList.defaultProps = {
  data: [],
  pageSize: 15,
}

export default ScrollifyList
