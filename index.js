const prompt = require('prompt-sync')();

let nameList = [];

let addMoreNames = true;

while (addMoreNames) {

    const name = prompt('Por favor ingresa un nombre (escribe "fin" para terminar):');

    if(name.toLowerCase() === 'fin') {
        addMoreNames = false;
    } else {
        nameList.push(name);
    }
}

const countRepeatdNames = (names) => {
    let countMap = {};

    names.forEach(name => {
        if (countMap[name]) {
            countMap[name]++;
        } else {
            countMap[name] = 1;
        }
    });

    let repeatedNames = {};

    Object.keys(countMap).forEach(name => {
        if (countMap[name] > 1) {
            repeatedNames[name] = countMap[name];
        }
    });

    return repeatedNames;
}

const findLongestName = (names) => {
    let longestName = '';
    names.forEach(name => {
        if (name.length > longestName.length) {
            longestName = name;
        }
    });
    return longestName
};

const findShortesName = (names) => {
    let shortesName = names[0] || '';
    names.forEach(name => {
        if (name.length < shortesName.length) {
            shortesName = name;
        }
    });
    return shortesName;
};

let repeatedNames = countRepeatdNames(nameList)

console.log(`ingresaste ${nameList.length} nombres a la lista`);

console.log(`Nombres repetidos y sus frecuencias:`);
console.log(repeatedNames);

console.log(`El nombre más largo es: ${findLongestName(nameList)}`);

console.log(`El nombre más corto es: ${findShortesName(nameList)}`);

