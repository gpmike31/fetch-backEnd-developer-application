const router= require('express').Router();
const payers=require('./payers-routes');
const points= require('./points-routes');

router.use('/payers', payersRoutes);
router.use('/points', pointsRoutes);

module.exports=router;