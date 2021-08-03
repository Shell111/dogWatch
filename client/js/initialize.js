const state = {
  userId: null,
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

// Retrieve session information from the server
axios.get('/api/sessions')
    .then(sessionInfo => {
        if (sessionInfo.data.userId) {
            state.userId = sessionInfo.data.userId;
            // Logged in
            document.querySelector('#header')
                .innerHTML = 'Logged in ' + sessionInfo.data.userId + '<button id="logout">Logout</button';

            // Make Logout button do a delete request to sessions api
            // document.querySelector('#logout').addEventListener('click', event => {
            //     axios.delete('/api/sessions').then(() => {
            //         window.location.reload();
            //     });
            // })
        } else {
            // Not logged in
            document.querySelector('#header')
                .innerHTML = 'Not logged in <a href="/login.html">Login</a>';
            // Do whatever you want
        }
    })//.catch(error=>{
        // You might return a 401 error response instead,
        // if the user must be logged in for this page
        // You can handle it here and redirect the user to the
        // login page
    //})

