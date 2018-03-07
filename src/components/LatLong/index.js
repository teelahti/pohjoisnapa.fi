import React from 'react'

// TODO: Format in 2 number chunks
const LatLong = ({lat, long, eastWest}) => (
  <div className="latlong">{lat} {long} {eastWest}</div>
)

export default LatLong
