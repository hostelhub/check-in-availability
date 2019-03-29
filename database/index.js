const mongoose = require('mongoose');

const db = mongoose.connect(
  'mongodb://localhost/HostelHub',
  { useNewUrlParser: true },
);

const hostelSchema = mongoose.Schema({
  hostelId: { type: Number, unique: true },
  bookedDates: Array,
  countries: Array,
  residents: Array,
});

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = {
  Hostel,
  db,
};
