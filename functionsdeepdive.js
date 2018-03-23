function knockKnock(){
    return 'Who\'s there?';
}

//anonymous function
var knockKnock = function () {
    return 'Who\s there?';
}

//IIFE
var dogWalker = (function(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}('Paul', 'Charlie'));