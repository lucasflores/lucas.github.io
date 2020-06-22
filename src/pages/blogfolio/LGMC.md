---
title:  "The Large Google Maps Collider"
date: "2020-02-12"
tags: ["Google Maps", "LHC", "CERN", "particle physics"]
image: './images/LGMC/thumb_LGMC.png'
---

<style>
.image-right{
  float: right;
  width: 54%;
  padding-left:25px;
}
.image-left{
  float: left;
  width: 54%;
  padding-right:25px;
}
.page-image{
  position: relative;
}
.image-credit {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  padding: 10px 15px;
  background-color: rgba(0,0,0,.5);
  color: #ffffff;
  text-align: right;
  z-index: 10;
  font-size:small;
  a {
    color: #ffffff;
    text-decoration: none;
  }
}
.fig-spacing{
  font-size:small;
  padding: 8px 15px 15px ;
}
</style>


<div class="page-image">
  <img src="./images/LGMC/LGMC.png" class="page-feature-image" alt="The Large Google Maps Collider" itemprop="image">
  <div class="image-credit">image credit: <a href="" itemprop="citation">REUTERS/Denis Balibouse</a></div><!-- /.image-credit -->
</div><!-- /.page-image -->

> ###Google maps, the most ubiquitous mapping software  . And being based at CERN the CERN campus and area was a scene that I would look at multiple times a day, often just to see when the nexttram was leaving. And well I always thought it would be cool to be able to see where the LHC was underground on google maps. This mapping software is so ubiquitous and familiar to people that havig this small feature might really drive home the scale and complexity of this experiment.

# Introduction

Google Maps, everybody knows it, most people look at it daily for one reason or another. 
Me being one of those people.
And often when I was using Google Maps to get the tram times on my daily commute back home from work, work being at CERN, the nuclear accelerator laborotory based near Geneva, Switzerland and home to the Large Hadron Collider, I was wanting to see something that would be unmissable from your standard Google Maps ariel view if it weren't 100 meters underground, the Large Hadron Collider. 

Now this may seem like a silly thing to want to see, but what you have to understand is the LHC is a gargantuan experiment

# Setting Up The Google Maps API 
So this seemed like a simple enough task, "Draw a big circle on a map."
To do this Google Makes it relatievely easy with the Google Maps API, and you can actually choose a couple of laguages to use the API, which is nice. 
And there is really good documentaiton as well.
Good job Google.
So first you will have too get an API key, which is fairly straight forward and you can follow Google's direction here. 

# Drawing the Big Circle 


# Re-writing (almost) Everything

```javascript
import React from 'react';
import { InfoWindow, MarkerWithLabel, withScriptjs, withGoogleMap, GoogleMap, Marker, Circle, Polyline, DrawingManager} from 'react-google-maps';
```

```javascript
  state = {
    progress: [],
    progress2: [],
    ATLAS: null,
    CMS: null,
    blah: null,
```

```javascript
  pathFunc = () => {
    let path_list = []
    for (let i = 0; i < this.iters; i++) {
      path_list.push({ lat: (this.LATcenter - this.radius*Math.cos(i*this.step - this.shift)), lng: (this.LNGcenter + this.radius*(1.44)*Math.sin(i*this.step - this.shift) ) });
    }
    return path_list
  }
  path = this.pathFunc()
```

```javascript
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
```

```javascript
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
```

