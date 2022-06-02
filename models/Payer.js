//insert payer schema
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Payer extends Model {}

//will need to reference points schema
Payer.init (
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    payer_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'payer',
    
  }
);
    
module.exports = Payer;