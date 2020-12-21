// Напиши класс Car с указанными свойствами и методами


class Car {

    constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
        this.speed = speed;
    }

    get price() {
        return this._price;
       }

    set price(value) {
       this. _price = value;
    }

    static getSpecs(car) {
        return console.log(car);
    }

    turnOn() {
        this.isOn = true
        return console.log(this.isOn);
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;
        return console.log(this.isOn);
    }

    accelerate(value) {
        let x = this.speed + value
        if ( x < this.maxSpeed  ) {
            this.speed = x;
            return console.log(this.speed);
        } else {
            console.log('Такого не може бути!!!!!');
        }
    }

    decelerate(value) {
        if ( this.speed > value) {
            this.speed = this.speed - value;
            return console.log(this.speed);
        } else {
            console.log('Такого не може бути взагалі!!!!!');
        }
    }

    drive(hours) {
      if ( this.isOn = true)
    { this.distance = hours * this.speed
        return this.distance
    }
  }
    
        
   
}

 const mustang = new Car({ maxSpeed: 200, price: 2000 });


 
 mustang.turnOn();
 mustang.accelerate(50);
 mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

 mustang.decelerate(20);
 mustang.drive(1);
 mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

 console.log(mustang.price); // 2000
 mustang.price = 4000;
 console.log(mustang.price); // 4000