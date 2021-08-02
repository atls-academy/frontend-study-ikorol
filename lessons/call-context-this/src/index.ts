/* eslint-disable no-console */

/** Normal function: this = window, if 'use strict': this = undefined. */
function showThis(argumentOne: number, argumentTwo: number) {
  console.log(this)
  function sum(): number {
    console.log(this)
    return argumentOne + argumentTwo
  }

  console.log(sum())
}
showThis(4, 5)

/** The context of object methods is the object itself. */
const obj: { argumentOne: number; argumentTwo: number; sum: () => void } = {
  argumentOne: 20,
  argumentTwo: 15,
  sum() {
    console.log(this)
    console.log(obj)
  },
}

/** 'this' in constructors and classes is a new instance of an object. */
function User(name: string, id: number) {
  this.name = name
  this.id = id
  this.human = true
  this.hello = () => {
    console.log(`Hello! ${this.name}`)
  }
}
const ivan = new User('Ivan', 23)
console.log(ivan)

/** Manual binding 'this': call, apply, bind. */
function sayName(surname: string) {
  console.log(this)
  console.log(this.name + surname)
}

const myUser: { name: string } = {
  name: 'John',
}

sayName.call(myUser, 'Smith')
sayName.apply(myUser, ['Smith'])

function count(num: number): number {
  return this * num
}

const double = count.bind(2)
console.log(double(3))

/**
 * The arrow function does not have its own call context, it is taken from the parent.
 * In event handlers, use 'event.target' instead of 'this'.
 */
const btn: any = document.querySelector('button')
btn.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'red'
})
