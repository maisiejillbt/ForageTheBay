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
        info.innerText = `${displayTags[i]} ${parkInfo[i]}`;
        info.classList.add('info-item');
        parkDiv.appendChild(info);
      }
    }
    parkSidebar.appendChild(parkDiv);
  }
}

export {Park};