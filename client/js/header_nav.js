// header_nav component
function renderHeaderNav() {
  document.querySelector('#logo-and-nav').innerHTML = `
  <a href="./index.html"><h1><span class="dog-text">DOG</span> WATCH</h1></a>
    <header id="header-nav" class="header-nav">
      <nav>
        <ul>
          <li class="aboutlink" onClick="render('about')">About</li>
          <li><a id="header" class="header" href="/get_started.html">Log In</li>
        </ul>
      </nav>
    </header>
  `
}

// render header nav on page load
renderHeaderNav()

function render(component){
  if (component === 'about') {
    renderAbout()
    document.querySelector('#parks-map').style.display = "none"
    document.querySelector('#select-park-drop-down').style.display = "none"
    document.querySelector('#about-page').style.display = "block"
  } 
}
