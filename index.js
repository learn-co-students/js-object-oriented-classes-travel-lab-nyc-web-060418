class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(Date.parse(startDate));
  }

  yearsExperienceFromBeginningOf(year){
    const newYear = new Date(year, 0, 1)
    return newYear.getFullYear() - this.startDate.getFullYear()
  }

}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    const endHorIndex = eastWest.indexOf(this.endingLocation.horizontal)
    const startHorIndex = eastWest.indexOf(this.beginningLocation.horizontal)

    const endVertNum = parseInt(this.beginningLocation.vertical, 10)
    const startVertNum = parseInt(this.endingLocation.vertical, 10)


    const horDist = endHorIndex - startHorIndex

    const vertDist = startVertNum - endVertNum


    return horDist + vertDist;

  };

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled() / 2
    }
    else {
      return this.blocksTravelled() / 3
    }

  }
}
