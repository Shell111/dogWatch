function renderGetStarted() {
  document.querySelector('#get-started').innerHTML = `
    <p>Let’s get you started and check out all the parks?</p>
    <a href="/get_started.html"><button id="get-started-btn" class="get-started-btn">Get Started</button></a>
    `
}

renderGetStarted()