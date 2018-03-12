import React from 'react'

const LatLong = ({lat, long, eastWest}) => {
  if (!lat) {
    return false;
  }

  // Convert to string:
  lat = "" + lat;
  long = "" + long;

  return (
    <div className="latlong">{lat.slice(0,2)} {lat.slice(2, 4)} {lat.slice(4)} <span style={{display: "inline-block", marginRight: "20px"}}>N</span>  {long.slice(0,2)} {long.slice(2,4)} {long.slice(4)} {eastWest}</div>
)};

export default LatLong
