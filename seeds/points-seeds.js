const { Points } = require('../models');

const pointsData = [
  {
    point_value: 5000,
  },
  {
    point_value: 6000,
  },
  {
    point_value: 7000,
  },
  {
    point_value: 8000,
  },
  {
    point_value: 9000,
  },
];

const seedPoints = () => Points.bulkCreate(pointsData);

module.exports = seedPoints;