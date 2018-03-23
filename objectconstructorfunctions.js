function Home(rooms, apartment, color, swimmingPool, state, city) {
    this.rooms = rooms;
    this.apartment = apartment;
    this.color = color;
    this.swimmingPool = swimmingPool;
    this.state = state;
    this.city = city;
}

var home1 = new Home(5, false, 'green', true, 'California', 'Los Angeles')
var home2 = new Home(7, false, 'red', false, 'California', 'San Francisco')
var home3 = new Home(2, true, 'white', false, 'California' 'San Diego')

function Book(title, author, yearOfPublication) {
    this.title = title;
    this.author = author;
    this.yearOfPublication = yearOfPublication;
}

var book1 = new Book('Honour Imperials', 'Brian Craig', 2014)
var book2 = new Book('The Punisher', 'Garth Ennis', 2003)
var book3 = new Book('The Hunger Games', 'Suzanne Collins', 2008)
var book4 = new Book('The Maze Runner', 'James Dashner', 2009)
var book5 = new Book('Department 19', 'Will Hill', 2011)