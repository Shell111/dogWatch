const state = {
  parks: [],
  users: [],
  // these coordinates are of Melb from Google Maps
  userPosition: { lat: -37.81365865839769, lng: 144.96164907786564 },
  // note: not best practice to expose API key here (just .env file)
  bingMapsApiKey: ''
}

// function getParks() {
axios.get('/api/parks')
  .then(parks => {
    parks.data.forEach(p => state.parks.push(p))
    axios.get('/api/users')
      .then(users => {
        users.data.forEach(u => state.users.push(u))
        renderParksList()
        // console.log(users.data)
      })
    // console.log(state.parks)
  })
// }

// getParks()

