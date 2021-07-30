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

let enableDarkMode = localStorage.getItem('enableDarkMode')==="true"?true:false;
if (enableDarkMode) {
  document.querySelector('body').classList.add('dark')
}