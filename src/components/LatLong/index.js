import React from 'react'
import Link from 'gatsby-link'

// TODO: Format in 2 number chunks
const LatLong = ({lat, long, eastWest}) => (
  <div className="latlong">{lat} {long} {eastWest}</div>
)

export default LatLong
