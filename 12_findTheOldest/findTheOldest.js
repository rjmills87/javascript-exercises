const findTheOldest = function (people) {
  const date = new Date();
  const year = date.getFullYear();

  people.forEach((person) => {
    const isDead = person.hasOwnProperty("yearOfDeath");
    if (isDead) {
      person.age = person.yearOfDeath - person.yearOfBirth;
    } else {
      person.age = year - person.yearOfBirth;
    }
  });
  people.sort((a, b) => a.age - b.age);
  const theOldest = people[2];
  return theOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
