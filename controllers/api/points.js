//insert points api routes
const router = require("express").Router()
const Points = require("../../models/Points")
const Payer = require("../../models/Payer")
const req = require("express/lib/request")
const res = require("express/lib/response")

//spend points: return integer, reference: payer, reference timestamp for each transaction
//timestampp should return integer

//get all point values from model schema
router.get("/", async (req, res)=>{
    try{
        var AllPoints = await Points.find({})
        res.status(200).json(AllPoints)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
router.get("/:id", async(req,res)=>{
    try {
        var singlePointValue = await Points.findById(
            {_id:req.params.id}
        )
        res.status(200).json(singlePointValue)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
router.post("/", async({body},res)=>{
    try {
        Points.create(body).then(async(dbpoints)=>{
            console.log(dbpoints._id);
            var UpdatedPayer=await Payer.updateOne(
                {payerName:body.payerName},
                {$addToSet:{points:dbpoints._id}})
            res.status(200).json(UpdatedPayer)
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
router.delete("/all", async(req,res)=>{
    try{
        var emptydoc = await Points.deleteMany({})
        res.status(200).json(emptydoc)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
router.put("/:id", async({params,body},res)=>{
    try {
        var UpdatedPoints=await Points.findByIdAndUpdate(
            {_id:params.id},
            body,
            {new:true}
        )
        res.status(200).json(UpdatedPoints)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
router.delete("/:id",async({params},res)=>{
    try {
        var DeletedPoints = await Points.findByIdAndDelete({_id:params.id})
        res.status(200),json(DeletedPoints)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

//get all point values by single id

//post all point values

//delete point values