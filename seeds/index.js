const seedPayers = require('./payers-seeds');
const seedPoints = require('./points-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedPayers();
  console.log('\n----- PAYERS SEEDED -----\n');

  await seedPoints();
  console.log('\n----- POINTS SEEDED -----\n');

  process.exit(0);
};

seedAll();