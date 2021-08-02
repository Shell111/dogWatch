// Gets called by Bing Maps script in index.html
async function initializeParkMap() {
  axios.get('/api/bing')
    .then(response => {
      state.bingMapsApiKey = response.data
      // collecting all the data made by the users and put it into the array of treasures so that the data can be used in code - CLIENT SIDE (frontend)
      // now we need to go back to the controller and write a backend route to receive this data
      // only want to call the Microsoft map once the API Key is called
      const center = state.userPosition
      state.map = new Microsoft.Maps.Map('#parks-map', {
        credentials: state.bingMapsApiKey,
        center: new Microsoft.Maps.Location(center.lat, center.lng)
      })
      axios.get('/api/parks')
        .then(park => {
          park.data.forEach(p => addParkPin(p))
          // park.data.forEach(p => state.parks.push(p))
          // console.log(state.parks)

        })
    })
}



  //Center the map on the user's location.
  // map.setView({ center: loc, zoom: 15 });

function addParkPin(park) {
  const { name, address, lat, lng } = park
  //Create BingMaps pin and add it to park object 
  park.pin = new Microsoft.Maps.Pushpin(
    new Microsoft.Maps.Location(lat, lng),
    {
      title: name,
      subTitle: address,
      text: name[0]
    }
  )
  //Add the pushpin to the map
  state.map.entities.push(park.pin)
}