import ItemCard from "./components/ItemCard.js";
import { menuController } from 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/index.esm.js';

export default class HomePage extends HTMLElement {
    connectedCallback() {
      cid = this.id;
        
        this.innerHTML = `
          <ion-menu side="start" content-id="main-content">
              <ion-header>
                <ion-toolbar translucent>
                  <ion-title>Menu</ion-title>
                </ion-toolbar>
              </ion-header>
      
              <ion-content>
                <ion-list>
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
                
                  <ion-list>
                    <ion-list-header>
                      <ion-label>
                        Data
                      </ion-label>
                    </ion-list-header>
                    <div id='dataList'></div>
                  </ion-list>
                </div>
                
                <!-- Skeleton screen -->
                <div id="skeleton">
                
                  <ion-list>
                    <ion-list-header>
                      <ion-label><h1>EL Semester 1</h2></ion-label>
                    </ion-list-header>
                    
                    ${
                    EL[1].map((subject) => { return `
                      <ion-item>
                        <ion-label>
                          <h2>${subject.code}</h2>
                          <p>${subject.subject}</p>
                        </ion-label>
                        <ion-select placeholder="Select One">
                          <ion-select-option value="10">S</ion-select-option>
                          <ion-select-option value="9">A</ion-select-option>
                          <ion-select-option value="8">B</ion-select-option>
                          <ion-select-option value="7">C</ion-select-option>
                          <ion-select-option value="6">D</ion-select-option>
                          <ion-select-option value="5">E</ion-select-option>
                          <ion-select-option value="4">F</ion-select-option>
                        </ion-select>
                      </ion-item>
                    `}).join("")
                    }
                      
                  </ion-list>
                </div>
                
                <ion-button color="primary" id="btn-submit" expand="block">CALCULATE</ion-button>
				
                <ion-card>
                    <ion-card-content>
                        <ion-grid>
                            <ion-row>
                                <ion-col class="ion-text-center">
                                    <ion-text color="secondary">
                                        <p>CGPA</p>
                                        <h1>10</h1>
                                    </ion-text>
                                </ion-col>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-card-content>
                </ion-card>
          
              </ion-content>
            </div>
          `;
            
        let router = document.querySelector('ion-router');
        
        router.addEventListener("ionRouteWillChange", () => {
          if (menuController.isOpen()) {
            menuController.close();
          }
        })
    }
}

customElements.define("home-page", HomePage);