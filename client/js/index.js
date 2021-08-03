console.log('hello')

function renderParksList() {
  document.querySelector('#park-news-feed').innerHTML = `
      <section class='parks-info'>
        ${parks()}
      </section>
    `
}

function parks() {
  return state.parks.map(park =>
    `<div class="park-info" data-id=${park.id}> 
        <div><span class="material-icons park">
          park
          </span></div>
          <div class="park-details">
            <h2>${park.name}</h2>
            <p>${users(park.id)} dogs checked in</p>
          </div>
          <div>
            <a href="/get_started.html"><span class="material-icons navigate_next">navigate_next</span></a>
          </div>
      </div>`
      ).join('')
}

function users(park_id) {
  for(let i=0; i<state.users.length; i++){
    console.log(state.users)
    console.log(state.parks)
    
    if(state.users.length < state.parks.length) {
      var parksId = state.parks.map(e => e.id)
      var usersId = state.users.map(f => f.id)
      var absent = parksId.filter(e => 
        !usersId.includes(e)
      )
      console.log(typeof absent[0])
      state.users.push({park_id: absent[0], count: "0", id: absent[0]})
      console.log(state.users)
    } 
    if(state.users[i].park_id === park_id) {
      return state.users[i].count
    } 
  }
}

