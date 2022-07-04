// Ex.1 Rewrite function with Class syntax
function createCar(brand, model, speed) {
	let car = {
		// properties
        brand,
        model, // We use the function parameter
		speed,
		// methods:
		accelerate: function(amount) {
			this.speed += amount;
		},

		brake: function(amount) {
			this.speed -= amount;
		},

		status: function() {
			return this.brand + this.model + " running at " + this.speed + " km/h";
		}
	};
	return car;
}

// Create a Car object using the class syntax
class Car {
    constructor(brand, model, speed){
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    accelerate (amount) {
        this.amount = amount;
        this.speed += amount; 
        return `New speed ${this.speed}`
        }
    brake (amount) {
        this.amount = amount;
        this.speed -= amount;
        return `New speed ${this.speed}`
        }
    status() {
        return this.brand + this.model + " running at " + this.speed + " km/h";
        }
    static parentStatic() {
            return Car;
        }
}

const car = new Car("Renault", "Scenic", 60); // should dispay new object

console.log(car.accelerate(123));
console.log(car.brake(173));
console.log(car); // Should return new object
console.log(car.status()); // Renault Scenic running at 60 km/h 

// Ex.2 Create additinal class CarColor, exteds it from the Car class and add new method carColor() into this class
// Then return brand model and car color

class CarColor extends Car{
    constructor(brand, model, color){
        super(brand, model);
        this.model = model; // Питання - чомусь у мене в console.log(carColor) - brand підтягується без 'this.brand = brand' в 'constructor' а якщо прибрати this.model = model - то модель передає 'undefined'. Чому так?
        this.color = color; // https://www.screencast.com/t/g7YOGpqvp 
    }
    carColor(){
        return this.brand + ' ' + this.color;
    }
}

const carColor = new CarColor("Renault", "Scenic", "Red");

console.log(carColor); // should display new object
console.log(carColor.carColor()); // Should display string "Renault Scenic has Red color"

// 2) Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.


// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

class Ball{
    constructor(ballType){
        this.ballType = ballType || this.ballType; 
    }
    ballType = "regular"

    static ballType() {
        return ballType;
    }
}

ball1 = new Ball();
ball2 = new Ball("super");
console.log(ball1.ballType);
console.log(ball2.ballType);

// 3) Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// ПОЧИТАЙТЕ ПРО ГЕТТЕРЫ и СЕТЕРЫ!!!

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info(){
        return this.name + 's age is ' + this.age
    }
}
const john = new Person('john', 34)
// john.info = 'johns age is 34'
console.log(john.info);

// 4) Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.
// If the user tries to guess more than the limit, the function should throw an error.
// If the user guess is right it should return true.
// If the user guess is wrong it should return false and lose a life.
// Can you finish the game so all the rules are met?

class Guesser {
    constructor(number, lives){
        this.number = number;
        this.lives = lives;
    }
    guess(n) {
        this.n = n
        if (n == this.number){
            return true + ' lives are saved'
        } else {
            this.lives -= 1
            if (this.lives > 0){
                return false + ' minus one life'
            } else {
                throw new Error('You are dead!');
            }
        }
    }
}
const guesser = new Guesser(10, 2);

console.log(guesser.guess(10));
console.log(guesser.guess(10));
console.log(guesser.guess(9));
console.log(guesser.guess(1));

// 5) Let's code constructor: In one case taking an integer and in the other handling no given arguments!
// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!
// The constructor taking no arguments should assign 0 to Cube's Side property.

// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args

// function Cube(n) {
//   var side = 0;
  
//   this.getSide = function() { return side; };
//   this.setSide = function(n) {
//     side = n; //this should be corrected
//     return side;
//   };
// };

// не зовсім зрозумів, що має робити оригінальна функція

class Cube{
    constructor(n){
        this.n = n
    }
    side = 0;
    setSide(side){
        this.side = side;
        if (side < 0) {
            this.side *= -1;
        }
        return this.side;
    }
    getSide(){
        return this.side;
    }
}

const c = new Cube(10);
console.log(c.getSide());
console.log(c.setSide(-2));
console.log(c.setSide(7));
console.log(c.setSide(-7));
console.log(c.getSide()); 

// 6) Создайте обьект bus через функцию-констурктор Car который будет иметь свойства canRide, wheels && model;
// В нем переопределите метод toString() который будет при его вызове выводить:
// "Это объект bus! Он может ехать? 'тут значение свойства canRide' У него 'тут значение свойства wheels' колеса и у него модель 'тут значение cвойства model'";
// Создайте несколько экземпляров-объектов функции Car и выведите результат метода toString() для каждого из них!

class Car{
    constructor(canRide, wheels, model){
        this.canRide = canRide;
        this.wheels = wheels;
        this.model = model
    }
    toString(){
        return `Это объект ${this.constructor.name}! Он может ехать? ${this.canRide} У него ${this.wheels} колеса и у него модель ${this.model}`
    } // питання - чи можна якось витягнути назву об'єкту, по типу "const ferrari = new Car(...)" => 'ferrari' намагався - але зміг тыльки через class - extends?
}
const bus = new Car(true, 8, 'Богдан');
console.log(bus.toString())
const ferrari = new Car(true, 4, 'Ferrari');
console.log(ferrari.toString())
const BMP = new Car(true, 4, 'BMP-4');
console.log(BMP.toString())

// 7) Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").
// Объекты-хомяки должны иметь массив food для хранения еды и метод found, который добавляет к нему.
// Ниже — его решение. При создании двух хомяков, если поел один — почему-то сытым становится и второй тоже.
// В чём дело? Как поправить?

class Hamster{
    food = [];
    found(something) { 
    this.food.push(something); 
    }
}

speedy = new Hamster(); 
lazy = new Hamster(); 

speedy.found("яблоко"); 
speedy.found("орех");
 
console.log(speedy.food.length);
console.log(speedy.food);
console.log(lazy.food.length);
console.log(lazy.food);
//  Почему поменялось для двоих обьектов? - тому що speedy та lazy зверталися до одного і того самого Hamster.prototype.food, через класс працює нормально

// 8) Есть объект ladder

// const ladder = {
// step: 0,
// up: function() { // вверх по лестнице
// this.step++;
// },
// down: function() { // вниз по лестнице
// this.step--;
// },
// showStep: function() { // вывести текущую ступеньку
// return ( this.step );
// }
// };

// Сейчас, для последовательного вызова нескольких методов объекта, нужно делать так сделать так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// console.log(ladder.showStep())
// Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой:

const ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this; // added return this because after function finished - we need to return object ladder in order to start next function
    },
    down: function() {
        this.step--;
        return this; // added return this
    },
    showStep: function() {
        return ( this.step );
    }
};

console.log(ladder.up().up().down().up().down().showStep())

// Такой подход называется «чейнинг» (chaining)

// 9) Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
// Эта задача состоит из двух частей, которые можно решать одна за другой.
// Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным 
// форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -. Пример использования:

class Calculator{
    operators = ['+', '-']; // base of initial operator names
    functions = [function(a, b) {return a + b;}, function(a, b) {return a - b;}] // base of initial operators

    addMethod(name, func){
        this.name = name;
        this.func = func;
        this.operators.push(name); // add operator name to array of operators
        this.functions.push(func); // add operator functions to array of operators
    }

    calculate(str){

        this.str = str;
        str = str.split(' ') // get elements from string
        this.a = parseFloat(str[0]);
        this.b = parseFloat(str[2]);
        this.oper = (str[1]);

        if ((!this.a && this.a != 0) || (!this.b && this.b != 0)){
            throw new Error('A or B are not number');
        }

        this.oper = this.operators.findIndex(op => op == this.oper); // search array of operator names to get index

        if (this.oper == -1){
            throw new Error('Unknown operator'); // if we haven't find index - throw error
        }
        return this.functions[this.oper](this.a, this.b) // get and execute function by index
    }
}

const powerCalc = new Calculator;

powerCalc.addMethod('*', function(a, b) {
    return a * b;
    });

powerCalc.addMethod('/', function(a, b) {
    return a / b;
    });

powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
    });

console.log( powerCalc.calculate('-1.5 / 6') );

// Второй шаг — добавить калькулятору метод addMethod(name, func), который учит калькулятор 
// новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая 
// должна её реализовывать. Например, добавим операции умножить , поделить / и возвести в степень *:

const result = powerCalc.calculate('2 ** 3');
console.log( result ); // 8
