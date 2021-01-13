function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);
var obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
};
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log("Hello! " + this.name);
    };
}
var ivan = new User('Ivan', 23);
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
var myUser = {
    name: 'John'
};
sayName.call(myUser, 'Smith');
sayName.apply(myUser, ['Smith']);
function count(num) {
    return this * num;
}
var double = count.bind(2);
console.log(double(3));
var btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
    e.target.style.backgroundColor = 'red';
});
