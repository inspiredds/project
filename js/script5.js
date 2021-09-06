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

//Объекты

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

/* const {border, bg} = options.colors; //Деструктуризация объекта

console.log(options);
console.log(border); */

for (const key in options) {
    if (typeof(options[key]) === 'object') {
        for (const key2 in options[key]) {
            console.log(`Свойство ${key2} имеет значение ${options[key][key2]}`);
            }
        }
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}