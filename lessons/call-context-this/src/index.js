// 1) Обычная функция: this = window, если есть use strict - undefined
function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }

  console.log(sum());
}
showThis(4, 5);

// 2) Контекст у методов объекта - сам объект
const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
  }
}

// 3) this в конструкторах и классах - это новый экземпляр объекта
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log("Hello! " + this.name);
  };
}
let ivan = new User('Ivan', 23);

// 4) Ручная привязка this: call, apply, bind
function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const myUser = {
  name: 'John'
};

sayName.call(myUser, 'Smith');
sayName.apply(myUser, ['Smith']);

function count(num) {
  return this*num;
}

const double = count.bind(2);
console.log(double(3));

// У стрелочной функции нет своего контекста вызова, он берется от родителя.
// В обработчиках событий используем event.target вместо this
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'red';
});
