var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var colors2 = ['purple', 'black', 'white', 'magenta', 'brown',]

var allColors = colors.concat(colors2);

var colors3 = ['grey', 'cyan', 'turquoise']

var moreAllColors = colors.concat(colors2, colors3);

var reverseColors = allColors.reverse();

var alphabetColors = allColors.sort();


var weather = ['rainy', 'cold', 'chilly', 'snowy', 'cloudy', 'hot', 'warm', 'humid'];

var winter = weather.slice(0, 5);

var winter = weather.slice(-8, -3);

var summer = weather.slice(5);

var summer = weather.slice(-3);