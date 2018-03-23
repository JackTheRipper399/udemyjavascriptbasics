function Dog(name, breed, foodType) {
    this.breed = breed;
    this.name = name;
    this.foodType = foodType;
}

Dog.prototype = {
    bark: function() {
        alert('woof woof');
    },
    greeting: function() {
        alert(this.name + ' ,good boy!');
    },
    introduction: function() {
        alert("My dog's name is " + this.name + ' and his breed is ' + this.breed);
    }
}

var dog1 = new Dog('Rex', 'German Sheperd', 'omnivore');
var dog2 = new Dog('Muffin', 'Beagle', 'omnivore');
var dog3 = new Dog('Mugman', 'Bulldog', 'omnivore');
var dog4 = new Dog('Doge', 'Shiba Inu', 'omnivore')
var dog5 = new Dog('Fluff', 'Poodle', 'omnivore')

var speak = dog4.bark();
dog4.praise();
dog5.introduction();
