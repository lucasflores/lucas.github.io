import React from 'react';
import { InfoWindow, MarkerWithLabel, withScriptjs, withGoogleMap, GoogleMap, Marker, Circle} from 'react-google-maps';

class SFMap extends React.Component {
  render = () => {
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 37.784298, lng: -122.423073 }}
        >
        <Marker 
          position={{ lat: 37.784298, lng: -122.423073 }}
        >
        </Marker>
      </GoogleMap>
    )
  }
}

const MapComponent = withScriptjs(withGoogleMap(SFMap))

export default () => (
  <MapComponent
  googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCWyx2MYBOK6_hn6mKBQEMFKu2aqRTqbQI&libraries=geometry,drawing,places'
  isMarkerShown
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={ <div style={{ height: '450px', width: '100%' }} /> }
  mapElement={<div style={{ height: `100%` }} />}
  />
)
