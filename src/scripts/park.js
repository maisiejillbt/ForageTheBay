class Park { // I want to add in park website 

  constructor (parkId,parkName, address, hours, parkDescription,restrictions,bagLimits,fees) { 
    this.parkId = parkId;
    this.parkName = parkName;
    this.address = address;
    this.hours = hours;
    this.parkDescription = parkDescription;
    this.restrictions = restrictions; 
    this.bagLimits = bagLimits;
    this.fees = fees;
  }

  generateParkDiv() {
    const parkSidebar = document.querySelector('.park-sidebar');

    const parkInfo = [this.address, this.hours, this.restrictions, this.bagLimits, this.fees];
    const displayTags = ['Address:', 'Hours:', 'Restrictions:', 'Bag Limits:', 'Fees:'];

    const parkDiv = document.createElement('div');
    parkDiv.classList.add('park-info')
    ;
    const parkName = document.createElement('h2');
    parkName.innerText =`${this.parkName}`
    parkDiv.appendChild(parkName)
    
    for (let i = 0; i < parkInfo.length; i++) {
      if (parkInfo[i]){
        let info = document.createElement('p');
        let display = document.createElement('p');
        let container = document.createElement('div');
        
        container.classList.add('info-item-container');

        display.innerText = `${displayTags[i]}`;
        info.innerText = `${parkInfo[i]}`;
        info.classList.add('info-item');
        display.classList.add('info-item-display');
        container.appendChild(display);
        container.appendChild(info);
        parkDiv.appendChild(container);
      }
    }
    parkSidebar.appendChild(parkDiv);
  }
}

export default Park;