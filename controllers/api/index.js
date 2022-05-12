const router= require("express").Router()
const payers=require("./payers")
const points= require("./points")
router.use("/payers",payers)
router.use("/points",points)
module.exports=router