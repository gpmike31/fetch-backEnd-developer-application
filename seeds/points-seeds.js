const { Points } = require('../models');

const pointsData = [
  {
    pointValue: 5000,
    payers_id: 1,
  },
  {
    pointValue: 6000,
    payers_id: 2,
  },
  {
    pointValue: 7000,
    payers_id: 3,
  },
  {
    pointValue: 8000,
    payers_id: 4,
  },
  {
    pointValue: 9000,
    payers_id: 5,
  },
];

const seedPoints = () => Points.bulkCreate(pointsData);

module.exports = seedPoints;