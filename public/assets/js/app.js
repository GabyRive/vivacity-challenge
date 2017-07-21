mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FieXJpdmUiLCJhIjoiY2o1NWZxbDJ5MGRyZzJ5bGl1NTR0ZmhwZyJ9.D_aDcoOJNaSnA33urPQurQ';

var map = new mapboxgl.Map({
  style: 'mapbox://styles/gabyrive/cj57cxgaz3y2w2spfr2c01vrb',
  container: 'map',
  center: [-96, 37.8],
  zoom: 8,
  // pitch: 45,
  // bearing: -17.6
});

map.on('load', function() {

  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": geoData
    }
  });
});






// the 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
// map.on('load', function() {
//   map.addSource("states", {
//     "type": "geojson",
//     "data": "/assets/js/escuela-derecho.geojson"
//   });
//
//   map.addLayer({
//     'id': '3d-buildings',
//     'source': 'composite',
//     'source-layer': 'building',
//     'filter': ['==', 'extrude', 'true'],
//     'type': 'fill-extrusion',
//     'minzoom': 15,
//     'paint': {
//       'fill-extrusion-color': '#c399bb',
//       'fill-extrusion-height': {
//         'type': 'identity',
//         'property': 'height'
//       },
//       'fill-extrusion-base': {
//         'type': 'identity',
//         'property': 'min_height'
//       },
//       'fill-extrusion-opacity': .6
//     }
//   });


// map.addLayer({
//   'id': 'building',
//   'type': 'symbol',
//   'souce': {
//     'type': 'geojson',
//     'data': {
//       'type': 'FeatureCollection',
//       'features': [{
//         'type': 'Feature',
//         'properties': {
//           'description': '<strong>Escuela de Derecho, Recinto de Rio Piedras</strong><p>The University of Puerto Rico School of Law is a law school in Puerto Rico. It is one of the professional graduate schools of University of Puerto Rico, Río Piedras Campus and the only law school in the University of Puerto Rico System.</p>',
//           'icon': 'marker'
//         },
//         'geometry': {
//           'type': 'Point',
//           'coordinates': [-66.048109, 18.406673]
//         }
//       }]
//     }
//   }
// });



// var popup = new mapboxgl.Popup({
//   closeButton: false,
//   closeOnClick: false
// });
//
// map.on('mouseenter', 'building', function(e) {
//   map.getCanvas().style.cursor = 'pointer';
//   popup.setLngLat(e.features[0].geometry.coordinates)
//     .setHTML(e.features[0].properties.description)
//     .addTo(map);
// });
//
// map.on('mouseleave', 'building', function() {
//   map.getCanvas().style.cursor = '';
//   popup.remove();
// });



// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/light-v9',
//   pitch: 45,
//   bearing: -17.6,
//   center: [ -66.047739, 18.407143],
//   zoom: 17
//
// });
//
//
//   map.addLayer({
//     id: 'building-3d',
//     source: 'escuelaDerecho',
//     type: 'fill-extrusion',
//     paint: {
//       'fill-extrusion-base': {
//         'property': 'min_height',
//         'type': 'identity'
//       },
//       'fill-extrusion-height': {
//         'property': 'height',
//         'type': 'identity'
//       },
//       'fill-extrusion-color': 'rgb(204, 157, 201)'
//     }
//   });
// });
