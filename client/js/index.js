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
            
            
          </div>
          <div>
            <a href="/get_started.html"><span class="material-icons navigate_next">navigate_next</span></a>
          </div>
      </div>`).join('')
}
