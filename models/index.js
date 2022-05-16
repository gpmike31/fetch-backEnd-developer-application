const Payer = require('./Payer');
const Points = require('./Points');


//Points belongsTo Payer
Points.belongsTo(Payer, {
    foreignKey: 'payer_id',
    onDelete: 'SET NULL'
})

module.exports = {
    Payer,
    Points,
};