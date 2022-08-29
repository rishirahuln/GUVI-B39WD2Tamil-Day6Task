// 2. Convert the UML diagram to Typescript class

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    setRadius(rad){
        this.radius=rad;
    }
    getRadius(){
        return (`The radius of the circle is ${this.radius} cm`);
    }
    setColor(col){
        this.color=col;
    }
    getColor(){
        return(`The color of the circle is ${this.color}`);
    }
    getArea(){
        let area = 3.14*this.radius*this.radius;
        return(`The area of the circle is ${area} sq.cm`);
    }
    getCircumference(){
        let circumference = 2*3.14*this.radius;
        return(`The circumference of the circle is ${Math.round(circumference*10)/10} cm`);
    }
}

let circle1 = new Circle(5,"red");

console.log(circle1.getRadius());
console.log(circle1.getColor());
console.log(circle1.getArea());
console.log(circle1.getCircumference());

circle1.setRadius(10);
console.log(circle1.getRadius());
circle1.setColor("yellow");
console.log(circle1.getColor());
console.log(circle1.getArea());
console.log(circle1.getCircumference());