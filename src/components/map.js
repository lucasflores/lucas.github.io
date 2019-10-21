import React, { Component } from 'react';
import { InfoWindow, MarkerWithLabel, withScriptjs, withGoogleMap, GoogleMap, Marker, Circle, DrawingManager} from 'react-google-maps';

class Map extends Component {
   render() {
   const GoogleMapExample = withScriptjs(withGoogleMap((props) => (
      <GoogleMap
        //defaultCenter = { { lat: 46.220557, lng: 6.102477} }
        defaultCenter = {new google.maps.LatLng(46.220557, 6.102477)}
        defaultZoom = { 12 }
      >
        {props.isMarkerShown && 
          <Marker 
            position = {{ lat: 46.229939, lng: 6.051965 }} 
            options = {{ animation: google.maps.Animation.DROP }}
          />
        }
        <Circle  
          center = {{ lat: 46.272948, lng: 6.064695 }} 
          radius = {4249.43698}  
          options = {{ 
           fillOpacity: 0.0, 
           strokeColor: '#0b80c3',
           strokeWeight: 1
            }}
         />
      </GoogleMap>
   )));
   return(
      <div>
        <GoogleMapExample
          googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCWyx2MYBOK6_hn6mKBQEMFKu2aqRTqbQI'
          isMarkerShown
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: '450px', width: '100%' }} /> }
          mapElement={ <div style={{ height: '100%' }} /> }
        />
      </div>
   );
   }
};

export default Map;
