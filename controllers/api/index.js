const router= require("express").Router()
const payer=require("./payer")
const points= require("./points")
router.use("/payer",payer)
router.use("/points",points)
module.exports=router