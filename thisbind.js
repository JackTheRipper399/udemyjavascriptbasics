let person1 = {
    name: 'Alex'
};

let person2 = {
    name: 'Alexis'
};

function namer() {
    return this.name;
}

namer.bind(person1)();

namer.bind(person2)();

let number = {
    x: 24,
    y: 22
};

let count = function() {
    console.log(this.x + this.y);
}

let boundFunc = count.bind(number);