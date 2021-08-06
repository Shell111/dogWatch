
function renderSelectPark() {
  document.querySelector('#select-park-drop-down').innerHTML = `
    <section class="select-park">
      <form id='park-selection' class="park-selection" action='/' method='POST'>
        <!-- <label for="parks">Category:</label> -->
        <select name="park" id="parks" required>
          <option value="">--Choose a park:--</option>
          <option value="1">Shore Reserve</option>
          <option value="2">Jacobs Reserve</option>
          <option value="3">Dunstan Reserve</option>
        </select>
     </form>
    </section>
  `
}


renderSelectPark()



const parkSelection = document.querySelector('#park-selection')

parkSelection.addEventListener('change', event => {
  console.log(event)
  event.preventDefault()

  const data = Object.fromEntries(new FormData(parkSelection));
  // console.log(typeof data.park)
  const parkId = Number(data.park)
  // console.log(parkId)

  axios.post('/api/users/select-park', { parkId })
    .then(() => {
      document.getElementById('parks').setAttribute('disabled', 'disabled')
    })
    // .then(successResponse => window.location = '/selected-park.html')
  // .catch(errorResponse =>{
  //     // console.log(errorResponse);
  //     document.querySelector('#errors')
  //         .innerHTML = errorResponse.response.data.message;
})