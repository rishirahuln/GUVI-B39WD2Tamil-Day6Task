// 1. Class - Movie
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
// a String representing the studio, and a String representing the rating as its arguments,
// and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies 
// in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(data){
        return data.filter((element)=>{
            return element.rating==="PG";
        })
    }
}
let movie1 = new Movie("Casino Royale","Eon Productions","PG13");
console.log(movie1);

let movie2 = new Movie("Vikram","Raj Kamal Films International");
console.log(movie2);

let movie3 = new Movie("KGF","Yash Productions","R");
console.log(movie3);

let movie4 = new Movie("Master","LYCA");
console.log(movie4);

let arrMov = [];
arrMov.push(movie1,movie2,movie3,movie4);
console.log(arrMov);

console.log(movie1.getPG(arrMov));