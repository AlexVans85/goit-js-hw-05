// const Hotel = function (name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//     this.x
// }

// const hotel1 = new Hotel ('Hotel1 name', 5, 1500)
// const hotel2 = new Hotel ('Hotel2 name', 4, 1200)
// const hotel3 = new Hotel ('Hotel3 name', 3, 1100)
// const hotel4 = new Hotel ('Hotel4 name', 2, 900)
// const hotel5 = new Hotel ('Hotel5 name', 1, 500)

// console.log(hotel1)
// console.log(hotel2)
// console.log(hotel3)
// console.log(hotel4)
// console.log(hotel5)


// Hotel.prototype.x = function(nameg){
// console.log(`Hello ${nameg}, welcome ${this.name}`)
// }

// hotel1.x('Oleg')




// const animal = {eats: true}
// const dog = Object.create(animal);

// dog.barks = true

// for (const key in dog) {
//     if (!dog.hasOwnProperty(key)) continue
//     console.log(key)
// }


// const Guest = function(name, room) {
//     this.name = name;
//     this.room = room;
//   };
  
//   const mango = new Guest('Mango', 28);
  
//   console.log(mango);
  

class Guest {
    // Собственные свойства класса размещаем в конструкторе
    constructor(name, roomNumber) {
      this.name = name;
      this.roomNumber = roomNumber;
    }
  
    // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
    get name() {
      return this.name;
    }
  
    set name(value) {
      this.name = value;
    }
  }
  
  const mango = new Guest('Mango', 26);
  
  // обращение к get и set не требует вызова - т.е. без ()
  console.log(mango.name); // Mango
  
  mango.name = 'Mango the Fluffy';
  console.log(mango.name); // Mango the Fluffy
  