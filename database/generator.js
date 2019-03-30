const faker = require('faker');

// Currently only has country names and not flags, below package has flags
// https://github.com/lipis/flag-icon-css

const countryPicker = () => {
  const stayingCountries = [];

  for (let i = 0; i < 5; i += 1) {
    stayingCountries.push(faker.address.country());
  }
  stayingCountries.push('Other');
  return stayingCountries;
};

const residentNumber = () => {
  const stayingResidents = [];

  for (let i = 0; i < 5; i += 1) {
    stayingResidents.push(faker.random.number(29) + 1);
  }
  stayingResidents.sort((a, b) => b - a);
  stayingResidents.push(faker.random.number(24) + 1);
  return stayingResidents;
};

/*
Create an algorithm that pseudorandomly generates booked dates calendar will look through db
and if there is a date that exists in the dates object, then that day will be unbookable.
Need to create some sort of cut off where all dates become unavailable if it is too far into
the future just like the website.
*/

// Need to research peak traveling times/months and make it so that certain times are more
// likely to be booked and other times less likely.

// can check in up to 10 months in advance, every other date past that is unavailable
// can check out a maximum of 14 days later

// basic rng for now
const bookedDates = () => {
  const bookings = [];
  for (let i = 0; i < faker.random.number({ min: 20, max: 60 }); i += 1) {
    bookings.push(faker.date.future(0, new Date()));
  }
  return bookings;
};

/*
Possible list of other generators needed:
idk i'll figure something out
*/


module.exports = {
  countryPicker,
  residentNumber,
  bookedDates,
};
