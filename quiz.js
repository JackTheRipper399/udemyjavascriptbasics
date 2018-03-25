const people = [
  {
    name: 'John Wayne',
    birthYear: 1907,
    deathYear: 1979,
  },
  {
    name: 'Cao Cao Mengde',
    birthYear: 155,
    deathYear: 220,
  },
  {
    name: 'Shigeru Miyamoto',
    birthYear: 1952,
  },
];

for (i = 0; i < people.length; i++) {
 getAgeOfDeath(people[i]);
}

function getAgeOfDeath(people) {
  if (people.deathYear > 0) {
    return console.log(people.name + ' died at ' + (people.deathYear - people.birthYear) + ' years old.')
  } else {
    return console.log('Hey, ' + people.name + ' is not dead.')
  }
}
