//insert points schema, will require mongoose
//const { text } = require("express");
//const {Schema, model}= require("mongoose");
//const { validate } = require("./Payer");
//const PayerSchema=require("./Payer")

const { Model, Datatypes, Sequelize } = require('sequelize');

const sequelize = require('../contollers/connection');

class Points extends Model {}

//points schema will show the amount of points as a string whether adding or subtracting
//and will show the current date and time for each transaction.
//This schema below will reference the payers module inside of an array and use a virtual
//to return the payers in a string
Points.init(
    {
        id: {
            type:Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        payers_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'Payer',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Points',
    }
);

//May add this later:need to put function to display timestamp ...
//...when points are used

//will need to reference payer schema

module.exports=Points;















//virtual to grab date and time stamp, console log and return as a string