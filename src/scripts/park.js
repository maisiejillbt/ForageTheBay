class Park { // add in park website ?

  constructor (parkName, address, hours, description,restrictions,bagLimits) { 
    this.parkName = parkName;
    this.address = address;
    this.hours = hours;
    this.description = description;
    this.restrictions = restrictions; 
    this.bagLimits = bagLimits;
  }

  generateParkDiv() {

    const parkInfo = [this.address, this.hours, this.restrictions, this.bagLimits];
    const displayTags = ['Address:', 'Hours:', 'Restrictions', 'Bag Limits:'];

    const parkSidebar = document.querySelector('.park-sidebar');
    const parkDiv = document.createElement('div');
    parkDiv.classList.add('park-info');

    for (let i = 0; i < parkInfo.length; i++) {
      let info = document.createElement('p');
      info.innerText = `${displayTags[i]} ${parkInfo[i]}`;
      info.classList.append('info-item');
      parkDiv.appendChild(info);
    }

    const parkDesc = document.createElement('p');
    parkDesc.innerText = `${this.description}`;
    parkDesc.classList.add('description');

    parkDiv.appendChild(parkDesc);
    parkSidebar.appendChild(parkDiv);

  }
}

export {Park};