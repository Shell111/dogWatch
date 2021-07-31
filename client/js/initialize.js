const state = {
  // these coordinates are of Melb from Google Maps
  userPosition: { lat: -37.81365865839769, lng: 144.96164907786564 },
  // note: not best practice to expose API key here (just .env file)
  bingMapsApiKey: ''
}

// make request to get key and then add it to state object
// ONLY then run the park_map.js
