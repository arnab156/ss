import React from "react";
import "./Map.css";
// import { compose, withProps } from "recompose";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBpdFyaRVrfekFaRwoEGRXdHAtS0diaTns&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && 
//     <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />
//     && 
//     <Marker position={{ lat: -45.397, lng: 153.644 }} onClick={props.onMarkerClick} />
//     }
//   </GoogleMap>
// )

// export default class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }


// const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {withScriptjs, withGoogleMap,GoogleMap,} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBpdFyaRVrfekFaRwoEGRXdHAtS0diaTns&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 41.8781, lng: -87.6298 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <MarkerWithLabel
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
          labelAnchor={(1, 0)}
          labelStyle={{backgroundColor: "rgb(255,212,1)",opacity:"0.8", color:"rgb(0,38,75)", fontSize: "8px", padding: "1px"}}
        >
        <div>
            {marker.name}<br/>
            {marker.address}<br/>
            {marker.website}<br/>
            {marker.phone}<br/>
        </div>
        </MarkerWithLabel>
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

export default class DemoApp extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    // const url = [
    //   // Length issue
    //   `https://gist.githubusercontent.com`,
    //   `/farrrr/dfda7dd7fccfec5474d3`,
    //   `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    // ].join("")

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ markers: data.photos });
    //   });
    this.setState({ markers: [
        { "photo_id": 1, "longitude": -87.661313,"latitude": 41.925331,"name":"Lakeshore Sport & Fitness", "address":"1320 W Fullerton Ave, Chicago, IL 60614","website":"http://www.lakeshoresf.com/", "phone":"773-477-9888"},
        { "photo_id": 2, "longitude": -87.679369,"latitude": 41.925809,"name":"Midtown Athletic Club", "address":"2444 N Elston Ave, Chicago, IL 60647","website":"http://www.lakeshoresf.com/", "phone":"773-235-2300"},
        { "photo_id": 3, "longitude": -87.639410,"latitude": 41.890730,"name":"East Bank Club", "address":"500 N Kingsbury St, Chicago, IL 60654","website":"http://www.eastbankclub.com/", "phone":"312-527-5800"},
        { "photo_id": 4, "longitude": -87.697990,"latitude": 41.950940,"name":"McFetridge Sports Center", "address":"3843 N California Ave, Chicago, IL 60618","website":"http://www.mcfetridgesportscenter.com", "phone":"773-478-2609"},
        { "photo_id": 5, "longitude": -87.791820,"latitude": 42.020580,"name":"TAM Tennis & Fitness", "address":"7686 N Caldwell Ave, Niles, IL 60714","website":"http://www.niles-parks.org", "phone":"847-967-6633"},
        { "photo_id": 6, "longitude": -87.680370,"latitude": 42.070030,"name":"Northwestern University Courts", "address":"2300 Sheridan Rd, Evanston, IL 60201","website":"", "phone":""},
        { "photo_id": 7, "longitude": -87.831210,"latitude": 41.864514,"name":"UIC Flames Tennis Facility", "address":"901 Roosevelt Rd, Chicago, IL 60608","website":"uicflames.com", "phone":""},
        { "photo_id": 8, "longitude": -87.716108,"latitude": 41.976636,"name":"NorthEastern University Courts", "address":"5250 N St Louis Ave, Chicago, IL 60625","website":"", "phone":""},
      ]
        
    });
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} />
    )
  }
}
