import React from 'react';
import { InfoWindow, MarkerWithLabel, withScriptjs, withGoogleMap, GoogleMap, Marker, Circle, Polyline, DrawingManager} from 'react-google-maps';

class Map extends React.Component {
  state = {
    progress: [],
    progress2: [],
    ATLAS: null,
    CMS: null,
    blah: null,
  }
  revs=20
  steps_per_rev = 60
  step = (2*Math.PI)/this.steps_per_rev
  iters=this.revs*this.steps_per_rev  
  LATcenter = 46.272948 
  LNGcenter =  6.064695 
  radius = 0.03825
  count = 0
  shift = 1.6*this.step

  pathFunc = () => {
    let path_list = []
    for (let i = 0; i < this.iters; i++) {
      path_list.push({ lat: (this.LATcenter - this.radius*Math.cos(i*this.step - this.shift)), lng: (this.LNGcenter + this.radius*(1.44)*Math.sin(i*this.step - this.shift) ) });
    }
    return path_list
  }
  path = this.pathFunc()

  pathFunc2 = () => {
    let path_list = []
    for (let i = 0; i < this.iters; i++) {
      path_list.push({ lat: (this.LATcenter + this.radius*Math.cos(i*this.step + Math.PI + this.shift)), lng: (this.LNGcenter + this.radius*(1.44)*Math.sin(i*this.step + Math.PI + this.shift)) });
    }
    return path_list
  }
  path2 = this.pathFunc2()

  componentDidMount = () => {
    this.interval = window.setInterval(this.moveObject, 50)
  }

  componentWillUnmount = () => {
    window.clearInterval(this.interval)
  }

  moveObject = () => {

    if (this.count == this.path.length) {this.count=0}
    let progress = this.path.slice(0, this.count)
    let progress2 = this.path2.slice(0, this.count)
    const { lat: lat1, lng: lng1 } = this.path[this.count]
    const pos_ATLAS = new window.google.maps.LatLng(46.235280, 6.055462)
    const pos_CMS = new window.google.maps.LatLng(46.310080, 6.071962)
    const pos_particle = new window.google.maps.LatLng(lat1, lng1)
    const distance_ATLAS = window.google.maps.geometry.spherical.computeDistanceBetween(pos_ATLAS,pos_particle)
    const distance_CMS = window.google.maps.geometry.spherical.computeDistanceBetween(pos_CMS,pos_particle)
    if (distance_ATLAS < 100) {
      this.setState({ATLAS: Map})
      setTimeout(() => {
        this.setState({ ATLAS: null})
      }, 400)
    }
    if (distance_CMS < 250) {
      this.setState({CMS: Map})
      setTimeout(() => {
        this.setState({ CMS: null})
      }, 400)
    }
    if (this.count <= this.iters) {this.count++}
        //<Marker 
        //  position = {{ lat: 46.229939, lng: 6.051965 }} 
        ///>

    this.setState({ progress })
    this.setState({ progress2 })
  }

  render = () => {
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 46.224690, lng: 6.110898 }}
        >
        <Circle  
          center = {{ lat: 46.272948, lng: 6.064695 }} 
          radius = {4249.43698}  
          options = {{ 
           fillOpacity: 0.0, 
           strokeColor: '#0b80c3',
           strokeWeight: 2,
            }}
        />

        <Marker 
          position = {{ lat: 46.229939, lng: 6.051965 }} 
        >
        </Marker>

        {this.state.ATLAS && (
          <>
            <Marker position = {{ lat: 46.235280, lng: 6.055462 }} 
              map = {this.state.ATLAS}  
              /*icon = {{url: "/cern_lhc_icon_ATLAS.svg", scaledSize: new google.maps.Size(100,100), anchor: new google.maps.Point(45, 49)}}*/
            />
          </>
        )}
        {this.state.CMS && (
          <>
            <Marker position = {{ lat: 46.310180, lng: 6.076762 }} 
              map = {this.state.CMS}  
              /*icon = {{url: "/cern_lhc_icon_CMS.svg", scaledSize: new google.maps.Size(100,100), anchor: new google.maps.Point(45, 49)}}*/
            />
          </>
        )}

        { this.state.progress && (
          <>
            <Marker 
              position = {this.state.progress[this.state.progress.length - 1]} 
              /*icon = {{ path: google.maps.SymbolPath.CIRCLE, scale: 2, strokeColor: '#FF0000' }}*/
            />
          </>
        )}
        { this.state.progress2 && (
          <>
            <Marker 
              position = {this.state.progress2[this.state.progress2.length - 1]} 
              /*icon = {{ path: google.maps.SymbolPath.CIRCLE, scale: 2, strokeColor: '#FF0000' }}*/
            />
          </>
        )}
      </GoogleMap>
    )
  }
}

const MapComponent = withScriptjs(withGoogleMap(Map))

export default () => (
  <MapComponent
  googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCWyx2MYBOK6_hn6mKBQEMFKu2aqRTqbQI&libraries=geometry,drawing,places'
  isMarkerShown
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={ <div style={{ height: '450px', width: '100%' }} /> }
  mapElement={<div style={{ height: `100%` }} />}
  />
)
