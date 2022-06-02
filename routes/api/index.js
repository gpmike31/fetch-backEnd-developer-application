const router= require('express').Router();
const payersRoutes=require('./payers-routes');
const pointsRoutes=require('./points-routes');

router.use('/payers', payersRoutes);
router.use('/points', pointsRoutes);

module.exports=router;