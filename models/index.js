const Payer = require('./Payer');
const Points = require('./Points');


//Points belongsTo Payer
Points.belongsTo(Payer, {
    foreignKey: 'point_value',
})


module.exports = {
    Payer,
    Points,
};