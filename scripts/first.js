
const sizes = {
   small:{
      price: 50,
      calories: 20,
   },
   middle:{
      price: 75,
      calories: 30,
   },
   big:{
      price: 100,
      calories: 40,
   },
};

const toppings = {
   cheese:{
      price: 10,
      calories: 20,
   },
   salade:{
      price: 20,
      calories: 5,
   },
   potato:{
      price: 15,
      calories: 10,
   },
   condiment:{
      price: 15,
      calories: 0,
   },
   mayonnaise:{
      price: 20,
      calories: 5,
   },
};

function CreateHamburger(size){
   this.size=size;
   this.topings= [];
}
// Создание
CreateHamburger.prototype.addToping = function (toping) {
   this.topings.push(toping);
}
// Цена
CreateHamburger.prototype.getPrice = function () {
   return this.topings.reduce((a,e) => a+=e.price, this.size.price)
}
// Калории
CreateHamburger.prototype.getCalories = function () {
   return this.topings.reduce((a,e) => a+=e.calories, this.size.calories)
}






// Средний гамбургер
const middleHamburger = new CreateHamburger(sizes.middle);
// Добавляем Топинги
middleHamburger.addToping(toppings.mayonnaise);
middleHamburger.addToping(toppings.salade);
middleHamburger.addToping(toppings.potato);
middleHamburger.addToping(toppings.cheese);


const totalPrice = middleHamburger.getPrice();
const totalCal = middleHamburger.getCalories();
console.log('Price', totalPrice);
console.log('Calories', totalCal);
