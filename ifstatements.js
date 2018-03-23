var temp = 30;
var rain = true;

if (temp > 20 && (!rain)) {
    console.log('Perfect weather for shorts and sunglasses.');
    } else if (rain) {
  console.log('You will need an umbrella.');
    } else if (10 < temp < 20) {
  console.log('Put some pants on.');
    } else {
  console.log('Put a winter jacket on, it is freezing outside.');
    }