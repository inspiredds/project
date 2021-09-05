//Функции

/* function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello World!");

console.log(calc(4, 3));

function calc(a, b) {
    return (a + b);
}

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//Функция создаётся только когда до нее доходит очередь
const logger = function() {
    console.log("Hello");
};

logger();

const calc2 = (a, b) => a + b; */

// Методы и св-ва

const str = "teSt";
const arr = [1, 2, 4];

// console.log(str.length);
// console.log(arr.length);
// console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6, 10));

console.log(logg.substring(6, 10));

console.log(logg.substr(6, 4));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));