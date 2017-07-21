mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FieXJpdmUiLCJhIjoiY2o1NWZxbDJ5MGRyZzJ5bGl1NTR0ZmhwZyJ9.D_aDcoOJNaSnA33urPQurQ';

var map = new mapboxgl.Map({
  style: 'mapbox://styles/gabyrive/cj57cxgaz3y2w2spfr2c01vrb',
  container: 'map',
  center: [-96.28, 37.8],
  zoom: 13,
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

  map.addLayer({
    'id': '3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
      'fill-extrusion-color': '#c399bb',
      'fill-extrusion-height': {
        'type': 'identity',
        'property': 'height'
      },
      'fill-extrusion-base': {
        'type': 'identity',
        'property': 'min_height'
      },
      'fill-extrusion-opacity': .6
    }
  });




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
