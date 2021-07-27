export default class SemPage extends HTMLElement {
    connectedCallback() {
      cid = this.id;
        
        this.innerHTML = `
          <ion-header translucent>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-back-button default-href="/" id="back"></ion-back-button>
              </ion-buttons>
              <ion-title>EL Semester 1</ion-title>
            </ion-toolbar>
          </ion-header>
              
          <ion-content fullscreen>
          <form name="semCGPA" onsubmit="return calculateSemCGPA(event);">
            <ion-list>
              ${
              EL.S2.map((subject) => { return `
                <ion-item>
                  <ion-label>
                    <h2>${subject.code}</h2>
                    <p>${subject.subject}</p>
                  </ion-label>
                  <ion-select placeholder="Select One" formControlName="${subject.code}">
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
            
            <ion-button type="submit" color="primary" id="btn-submit" expand="block">CALCULATE</ion-button>
		      </form>
            <ion-card>
                <ion-card-content>
                    <ion-grid>
                        <ion-row>
                            <ion-col class="ion-text-center">
                                <ion-text color="secondary">
                                    <p>CGPA</p>
                                    <h1 id="cgpa-output">10</h1>
                                </ion-text>
                            </ion-col>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-card-content>
            </ion-card>
      
          </ion-content>
          `;
        
    }
}

customElements.define("sem-page", SemPage);