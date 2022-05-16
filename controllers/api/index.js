const router= require("express").Router()
const payers=require("./payers-routes")
const points= require("./points-routes")
router.use("/payers",payers)
router.use("/points",points)
module.exports=router