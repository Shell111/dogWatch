


const state = {
  parks: [],
  // these coordinates are of Melb from Google Maps
  userPosition: { lat: -37.81365865839769, lng: 144.96164907786564 },
  // note: not best practice to expose API key here (just .env file)
  bingMapsApiKey: ''
}

// function getParks() {
axios.get('/api/parks')
  .then(parks => {
    parks.data.forEach(p => state.parks.push(p))
    // axios.get('/api/users')
      // .then(dogs => {
      //   dogs.data.forEach(c => )
        renderParksList()
      // })
    // console.log(state.parks)

  })
// }

// getParks()

