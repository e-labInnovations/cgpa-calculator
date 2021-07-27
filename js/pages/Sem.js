export default class SemPage extends HTMLElement {
    connectedCallback() {
      const dipartment = this.dipartment;
      const sem = this.sem;
      console.log(dipartment, sem);
        
        this.innerHTML = `
          <ion-header translucent>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-back-button default-href="/" id="back"></ion-back-button>
              </ion-buttons>
              <ion-title>${dipartment} - ${sem}</ion-title>
            </ion-toolbar>
          </ion-header>
              
          <ion-content fullscreen>
          <form name="semCGPA" id="sem-form">
            <ion-list>
              ${
              CGPA_Data[dipartment][sem].map((subject) => { return `
                <ion-item>
                  <ion-label>
                    <h2>${subject.code}</h2>
                    <p>${subject.subject}</p>
                  </ion-label>
                  <ion-select placeholder="Select One" name="${subject.code}">
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
                                    <h1 id="cgpa-output"></h1>
                                </ion-text>
                            </ion-col>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-card-content>
            </ion-card>
      
          </ion-content>
          `;
      
      const semForm = document.getElementById("sem-form");
      
      semForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        var elements = e.target.elements;
        
        var totalGradePoint = 0;
        var totalMark = 0;
        
        for (var i = 0, element; element = elements[i++];) {
          if (element.type == 'submit') {
            continue;
          }
          if (!element.value) {
            presentToast("Error: " + element.name + " is empty")
            return;
          }
          
          const subject = CGPA_Data[dipartment][sem].find(sub => sub.code == element.name);
          totalGradePoint += subject.credit * 10;
          totalMark += subject.credit * parseInt(element.value);
        }
        
        const cgpa = (totalMark/totalGradePoint)*10;
        document.getElementById("cgpa-output").innerText = cgpa.toFixed(3);
      });
    }
}

customElements.define("sem-page", SemPage);