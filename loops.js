var i = 0

while (i < 5) {
    console.log('This counter has run ' + (i + 1) + ' times.');
    i++;
}

var counter = 5

do {
    console.log('Loop ran even with false expression.');
    counter++;
} while (counter < 5);

var battingAverage = [33, 327, 267, 294, 303, 310, 255, 242, 217];

for (i = 0; i < battingAverage.length; i ++) {
    if (battingAverage[i] > 300) {
        console.log('Here is a million dollar bonus.');
    } else if (battingAverage[i] > 280) {
        console.log('Here is a half million dollar bonus');
    } else if (battingAverage[i] > 250) {
        console.log('Try harder');
    } else {
        console.log('You\'re cut');
    }
}
