const { Hostel } = require('./index.js');
const { bookedDates, countryPicker, residentNumber } = require('./generator.js');

const sampleData = [];

for (let i = 1; i < 101; i += 1) {
  const sampleDataGenerator = {
    hostelId: i,
    bookedDates: bookedDates(),
    countries: countryPicker(),
    residents: residentNumber(),
  };
  sampleData.push(sampleDataGenerator);
};

const createSampleData = () => {
  Hostel.create(sampleData);
};

createSampleData();
