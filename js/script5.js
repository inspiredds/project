//callback функции-------------------------------------------------

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log("Я прошёл это урок.");
});

//Объекты---------------------------------------------------------------------------

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'blue'
    },
    makeTest: function() {
        console.log("test");
    }
};

console.log(typeof(options.makeTest) === 'function');

options.makeTest();

console.log(Object.keys(options));

console.log(Object.keys(options).length);

delete options.width;

console.log(options);

// const {border, bg} = options.colors; //Деструктуризация объекта

// console.log(options);
// console.log(border);

for (const key in options) {
    if (typeof(options[key]) === 'object') {
        for (const key2 in options[key]) {
            console.log(`Свойство ${key2} имеет значение ${options[key][key2]}`);
            }
        }
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}

//Массивы--------------------------------------------------------------------------------------------

const arr = [1, 12, 23, 6, 18];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

//arr.pop();
//arr.push(10);

//console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (const value of arr) {
    console.log(value);
}

const str = prompt('', '');
const products = str.split(", ");
products.sort();
console.log(products.join('; '));

//ссылки и зачения----------------------------------------------------------------------------------

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    i: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdf';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};