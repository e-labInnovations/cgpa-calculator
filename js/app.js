import HomePage from "./pages/Home.js"
import AboutPage from './pages/About.js'
import SemPage from './pages/Sem.js'
import DipartmentPage from './pages/Dipartment.js'


const Router = document.querySelector('ion-router');

Router.addEventListener('ionRouteDidChange', (e) => {
    let routeTo = e.detail.to;
    let routerFrom = e.detail.from;
    
    //presentToast(routerFrom + ' -> ' + routeTo);
})

if (localStorage.getItem('enableDarkMode') == null) {
  // Check to see if Media-Queries are supported
  if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Dark
      localStorage.setItem('enableDarkMode', true);
    } else {
      // Light
      localStorage.setItem('enableDarkMode', false);
    }
  } else {
    // Default (when Media-Queries are not supported)
    localStorage.setItem('enableDarkMode', false);
  }
}

let enableDarkMode = localStorage.getItem('enableDarkMode')==="true"?true:false;
if (enableDarkMode) {
  document.querySelector('body').classList.add('dark')
}