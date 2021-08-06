const state = {
  userId: null,
  userNames: [],
  parks: [],
  users: [],
  // these coordinates are of Melb from Google Maps
  userPosition: { lat: -37.81365865839769, lng: 144.96164907786564 },
  // note: not best practice to expose API key here (just .env file)
  bingMapsApiKey: ''
}

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

axios.get('/api/users/get-names')
  .then(names => {
    names.data.forEach(n => state.userNames.push(n))
    // console.log(state.userNames)
  })

// Retrieve session information from the server
axios.get('/api/sessions')
    .then(sessionInfo => {
      console.log(state.userNames)
        if (sessionInfo.data.userId) {
          state.userId = sessionInfo.data.userId
          // Logged in
          // for(let i=0; i<state.userNames.length; i++) {
          //   // console.log(state.userNames[i].id)
          //   if(state.userNames[i].id == sessionInfo.data.userId) {
          //     document.querySelector('#header')
          //       .innerHTML = state.userNames[i].name + ' has logged in' + '<button id="logout">Logout</button'
          //   }
          // }
          
          document.querySelector('#header')
          .innerHTML = 'You have logged in' + '<button id="logout">Logout</button'

          // When a user logs in we need to hide the get-started
          document.querySelector('#get-started').style.display = "none"

          // When a user logs in we need to show the select-park-drop-down
          document.querySelector('#select-park-drop-down').style.display = "block"
          

          // Make Logout button do a delete request to sessions api
          const logoutId= document.querySelector('#logout')
          
          logoutId.addEventListener('click', event => {
            event.preventDefault();

          const userId = sessionInfo.data.userId
          // console.log(userId)

          axios.delete('/api/sessions', { userId })
            .then(() => {window.location = '/'})
          })
        } //.catch(error=>{
        // You might return a 401 error response instead,
        // if the user must be logged in for this page
        // You can handle it here and redirect the user to the
        // login page
    })

