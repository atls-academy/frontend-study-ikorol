/** Normal function: this = window, if 'use strict': this = undefined. */
function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }

  console.log(sum());
}
showThis(4, 5);

/** The context of object methods is the object itself. */
const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
  }
}

/** 'this' in constructors and classes is a new instance of an object. */
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log("Hello! " + this.name);
  };
}
let ivan = new User('Ivan', 23);

/** Manual binding 'this': call, apply, bind. */
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

/**
 * The arrow function does not have its own call context, it is taken from the parent.
 * In event handlers, use 'event.target' instead of 'this'.
 */
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'red';
});
