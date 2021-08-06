function renderGetStarted() {
  document.querySelector('#get-started').innerHTML = `
    <p>Let’s get you started and check out all the parks?</p>

    <button id="get-started-btn" class="get-started-btn"><a href="/get_started.html">Get Started</a></button>
    `
}

renderGetStarted()