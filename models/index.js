const Payer = require('./Payer');
const Points = require('./Points');


//Points belongsTo Payer
Points.belongsTo(Payer, {
    foreignKey: 'payers_id',
    onUpdate: 'SET NULL'
})

Payer.hasMany(Points, {
    foreignKey: 'payers_id',
    onUpdate: 'SET NULL'
})

module.exports = {
    Payer,
    Points,
};