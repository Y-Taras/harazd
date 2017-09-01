import React, { PropTypes } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

export default function Map (props) {
  const mapContainer = <div style={{ height: '460px', width: '100%' }} />
  return (
    <section>
      <GoogleMapLoader
        containerElement={mapContainer}
        googleMapElement={
          <GoogleMap ref={map => console.log(map)} defaultZoom={props.zoom} defaultCenter={props.center}>
            <Marker {...props.marker} />
          </GoogleMap>
        }
      />
    </section>
  )
}

Map.propTypes = {
  marker: PropTypes.object,
  zoom: PropTypes.number,
  center: PropTypes.object
}
