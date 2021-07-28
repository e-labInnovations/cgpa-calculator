import ItemCard from "./components/ItemCard.js";
import { menuController } from 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/index.esm.js';

export default class HomePage extends HTMLElement {
    connectedCallback() {
      let enableDarkMode = localStorage.getItem('enableDarkMode')==="true"?true:false;
        
        this.innerHTML = `
          <ion-menu side="start" content-id="main-content">
              <ion-header>
                <ion-toolbar translucent>
                  <ion-title>Menu</ion-title>
                </ion-toolbar>
              </ion-header>
      
              <ion-content>
                <ion-list class="theme-list" lines="full">
                  <ion-item>
                    <ion-icon slot="start" icon="moon" class="component-icon component-icon-dark"></ion-icon>
                    <ion-label>
                      Dark Mode
                    </ion-label>
                    <ion-toggle slot="end" value="dark-mode" id="dark-mode-enable" checked=${enableDarkMode}></ion-toggle>
                  </ion-item>
                </ion-list>

                <ion-list class="home-list">
                  <ion-item href="/settings">
                    <ion-icon name="settings-outline" slot="start"></ion-icon>
                    <ion-label>Settings</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-icon name="star-outline" slot="start"></ion-icon>
                    <ion-label>Rate Us</ion-label>
                  </ion-item>
                  <ion-item href="/about">
                    <ion-icon name="information-circle-outline" slot="start"></ion-icon>
                    <ion-label>About</ion-label>
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-menu>

            <div class="ion-page" id="main-content">
              <ion-header>
                <ion-toolbar>
                  <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                  </ion-buttons>
                  <ion-title>CGPA CALCULATOR</ion-title>
                </ion-toolbar>
              </ion-header>
              
              <ion-content>
        
                <ion-card>
                    <ion-card-content>
                        <ion-item>
                          <ion-label>Dipartment</ion-label>
                          <ion-select value="${Object.keys(CGPA_Data)[0]}" placeholder="Select One" name="Dipartment" id="dipartment">
                            ${
                              Object.keys(CGPA_Data).map((dipartment) => { return `
                                <ion-select-option value="${dipartment}">${dipartment}</ion-select-option>
                              ` }).join("")
                            }
                          </ion-select>
                        </ion-item>
                        
                        <ion-item>
                          <ion-label>Semester</ion-label>
                          <ion-select value="S1" placeholder="Select One" name="Semester" id="semester">
                            <ion-select-option value="S1">S1</ion-select-option>
                            <ion-select-option value="S2">S2</ion-select-option>
                            <ion-select-option value="S3">S3</ion-select-option>
                            <ion-select-option value="S4">S4</ion-select-option>
                            <ion-select-option value="S5">S5</ion-select-option>
                            <ion-select-option value="S6">S6</ion-select-option>
                          </ion-select>
                        </ion-item>
                        
                        <ion-button color="primary" expand="block" id="proceedBtn">PROCEED</ion-button>
		  
                    </ion-card-content>
                </ion-card>
          
              </ion-content>
            </div>
          `;
            
        let router = document.querySelector('ion-router');
        
        const darkModeEnable = document.getElementById('dark-mode-enable');
        const proceedBtn = document.getElementById('proceedBtn');
        
        router.addEventListener("ionRouteWillChange", () => {
          if (menuController.isOpen()) {
            menuController.close();
          }
        })
        
        darkModeEnable.addEventListener('ionChange', e => {
          enableDarkMode = e.detail.checked;
          const body = document.querySelector('body');
          localStorage.setItem('enableDarkMode', enableDarkMode);
        
          if (enableDarkMode) {
            body.classList.add('dark');
          } else {
            body.classList.remove('dark');
          }
        })
        
        proceedBtn.addEventListener('click', () => {
          const dipartment = document.getElementById("dipartment").value;
          const semester = document.getElementById("semester").value;
          
          router.push("/"+dipartment+"/"+semester);
        })
    }
}

customElements.define("home-page", HomePage);