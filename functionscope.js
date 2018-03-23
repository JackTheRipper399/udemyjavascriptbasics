function roadTrip() {
    var gallons = 12;
    var mpg = 34;
  return gallons * mpg;
}

//put variables on global scale
var gallons = 12
var mpg = 34;
function roadTrip() {
  return gallons * mpg;
}

//nested functions
var height = 10;
function volume() {
    var width =10;
    var length = 10;
    var volumeOfObject = function () {
        return length * width * height;
    }
    return volumeOfObject()
    }