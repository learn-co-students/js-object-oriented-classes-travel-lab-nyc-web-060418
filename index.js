class Driver {

  constructor(name, startDateString) {
    this.name = name;
    this.startDate = new Date(startDateString);
  }

  yearsExperienceFromBeginningOf(year) {return year - this.startDate.getFullYear()}

}

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalDistance = 0;
    let horizontalDistance = 0;
    verticalDistance = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))
    let startAveIndex = eastWest.indexOf(this.beginningLocation.horizontal)
    let endAveIndex = eastWest.indexOf(this.endingLocation.horizontal)
    horizontalDistance = Math.abs(startAveIndex - endAveIndex)
    return verticalDistance + horizontalDistance
  }

  estimatedTime(peakHoursBool) {
    if (peakHoursBool) {
      return  (this.blocksTravelled() / 2)
    }
    else {
      return (this.blocksTravelled() / 3)
    }
  }

}
