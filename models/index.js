const Payer = require('./Payer');
const Points = require('./Points');


//Points belongsTo Payer
Points.belongsTo(Payer, {
    foreignKey: 'payers_id',
    onDelete: 'SET NULL'
})

Payer.hasMany(Points, {
    foreignKey: 'payers_id',
    onUpdate: 'SET NULL'
})

Points.belongsToMany(Payer, {
    through: Payer,
    foreignKey: 'payers_id',
    onUpdate: 'SET NULL'

})

module.exports = {
    Payer,
    Points,
};