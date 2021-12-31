
class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    };
    isMale() {
        if (this.gender) {
            return true;
        } else {
            return false;
        }
    };
    setGender(gender) {
        this.gender = gender;
    };
    checkApple(Apple) {
        if (Apple.weight > 0) {
            return true;
        }
    };
    eat(apple) {
        apple.decrease();
        this.weight += 1;
    };
    say(speak) {
        console.log(speak);
    };
    getName() {
        return this.name;
    };
    setName(name) {
        this.name = name
    };
    getWeight() {
        return this.weight;
    };
    setWeight() {
        this.weight = weight;
    }
};
class Apple {
    constructor(weight) {
        this.weight = weight;
    };
    decrease() {
        this.weight -= 1;
    };
    isEmpty() {
        if (this.weight > 0) {
            return false;
        } else {
            return true;
        }
    };
    getWeight() {
        return this.weight;
    };
}


// let apple = new Apple(10)
// let Adam = new Human("Adam", true, 60);
// let Eva = new Human("Eva", false, 50);
// Adam.say("Hello Word");
// while (!apple.isEmpty()) {
//     console.log("Adam eat 1");
//     Adam.eat(apple);
//     console.log("The apple's weight is " + apple.getWeight());
//     console.log("Eva eat 1");
//     Eva.eat(apple);
//     console.log("The apple's weight is " + apple.getWeight());
// }
// console.log("The apple is gone now!")

let Adam = new Human("Adam",true,60);
let Eva = new Human("Eva",false, 50);
let apple = new Apple(10);
Adam.say("Hello World");
while (!apple.isEmpty()) {
  console.log("Adam eat 1");
  Adam.eat(apple);
  console.log("The apple's weight is "+ apple.getWeight());
  console.log("Eva eat 1");
  Eva.eat(apple);
  console.log("The apple's weight is "+ apple.getWeight());
}
console.log("The apple is gone now!")