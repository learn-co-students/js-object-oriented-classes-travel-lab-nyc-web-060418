class Driver {
    constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    };
    yearsExperienceFromBeginningOf(endDate){
        let startYear = this.startDate.getFullYear()
        return endDate - startYear;
    }
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    };
    avenueAsInteger(avenue){
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
        return eastWest.indexOf(avenue);
    };

    blocksTravelled(){
        let horiz = this.avenueAsInteger(this.endingLocation.horizontal) - this.avenueAsInteger(this.beginningLocation.horizontal)
        let vert = this.endingLocation.vertical - this.beginningLocation.vertical
        return Math.abs(horiz)+Math.abs(vert)
    };

    estimatedTime(peak){
        if (peak){
            return this.blocksTravelled()/2;
        }
        else {
            return this.blocksTravelled()/3
        };
    };
}