// import important parts of sequelize library
const { Model, DataTypes, Sequelize } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Points model (table) by extending off Sequelize's Model class
class Points extends Model {}

//set up fields and rules for Points model
Points.init(
    {
        //define colums
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        payers_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'payer',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'points',
    }
);

module.exports = Points;















//virtual to grab date and time stamp, console log and return as a string