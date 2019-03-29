const { Hostel } = require('./index.js');
const { hostelId, bookedDates, countryPicker, residentNumber } = require('./generator.js');

const sampleData = [];

for (let i = 0; i < 100; i += 1) {
  const sampleDataGenerator = {
    hostelId: hostelId(),
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
