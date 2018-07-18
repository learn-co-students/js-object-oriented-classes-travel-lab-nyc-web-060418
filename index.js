
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endYear){
    const startYear = this.startDate.getFullYear()
    return endYear - startYear
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled(){
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const beginningHorizontalNumber = eastWest.indexOf(this.beginningLocation.horizontal) + 1
    const endingHorizontalNumber = eastWest.indexOf(this.endingLocation.horizontal) + 1
    const horizontalDistance = Math.abs(beginningHorizontalNumber - endingHorizontalNumber)
    const verticalDistance = Math.abs(Number(this.beginningLocation.vertical) - Number(this.endingLocation.vertical))
    return horizontalDistance + verticalDistance
  }
  estimatedTime(peakHours){
    if (peakHours){
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
