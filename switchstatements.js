var dice = 6

switch(dice) {
    case 1 :
        alert('Terrible roll');
        break;
    case 2 :
        alert('Not the worst');
        break;
    case 3 :
        alert('Halfway too being decent');
        break;
    case 4 :
        alert('Not bad');
        break;
    case 5 :
        alert('Close to the best')
        break;
    case 6 :
        alert('Are u a wizard?')
        break;
    default:
        alert('Roll the dice')
        break;
}
//Random number
switch(Math.floor(Math.random() * 7)) {
    case 1 :
        alert('Terrible roll');
        break;
    case 2 :
        alert('Not the worst');
        break;
    case 3 :
        alert('Halfway too being decent');
        break;
    case 4 :
        alert('Not bad');
        break;
    case 5 :
        alert('Close to the best')
        break;
    case 6 :
        alert('Are u a wizard?')
        break;
    default:
        alert('Roll the dice')
        break;
}