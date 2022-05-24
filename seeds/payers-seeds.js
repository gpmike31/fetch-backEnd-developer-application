const { Payer } = require('../models');

const payerData = [
  {
    payer_name: 'Gerald',
  },
  {
    payer_name: 'Tracie',
  },
  {
    payer_name: 'Stacy',
  },
  {
    payer_name: 'Brad',
  },
  {
    payer_name: 'Michael',
  },
];

const seedPayers = () => Payer.bulkCreate(payerData);

module.exports = seedPayers;