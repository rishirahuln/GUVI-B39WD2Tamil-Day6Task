// 3. Write a “person” class to hold all the details.

class Person{
    constructor(firstName, lastName, age, place){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.place=place;
    }
    getDetails(){
        return (`The person ${this.firstName} ${this.lastName} of age ${this.age} is residing at ${this.place}`);
    }
}

let person1 = new Person("Rishi","Rahul",25,"Bangalore");
let person2 = new Person("Karthi","Keyan",27,"Chennai");
let person3 = new Person("Partha","Sarathy",22,"Coimbatore");

console.log(person1.getDetails());