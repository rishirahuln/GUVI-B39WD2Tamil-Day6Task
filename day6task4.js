// 4. Write a class to calculate the uber price.

class Uber{
    constructor(distance, rate, waitingPeriod){
        this.distance=distance;
        this.rate=rate;
        this.waitingPeriod=waitingPeriod;
    }
    setUpdatedDistance(dist){
        this.distance=dist;
    }
    getPrice(){
        let totalRate=(this.distance*this.rate)+(this.waitingPeriod*1.5);
        return(`Rs. ${totalRate} is the price for your journey of distance ${this.distance} KM at a rate of Rs.${this.rate}/KM with a waiting period of ${this.waitingPeriod} minutes`);
    }
}

let customer1 = new Uber(20,30,10);
let customer2 = new Uber(50,25,30); customer2.setUpdatedDistance(75);
let customer3 = new Uber(100,20,60); customer3.setUpdatedDistance(150);

console.log(customer3.getPrice());