//insert global payer api routes
const router = require("express").Router()
const Payer = require("../../models/Payer")
const Points = require("../../models/Points")

//get all payers name from model schema
router.get("/",async (req,res)=>{
    try {
        var AllPayers= await Payer.find({})
        res.status(200).json(AllPayers)
    } catch (error) {
        res.status(500).json(error)
    }
})
//get a single payers name by id
router.get("/:id", async(req,res)=>{
    try {
        var PayerFound=await Payer.findById({_id:req.params.id})
        res.status(200).json(PayerFound)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

//create/post a new payer to the body object when request is sent
router.post("/",async({body},res)=>{
    try {
        console.log(body);
        Payer.create(body).then(dbpayer=>res.status(200).json(dbpayer))
    } catch (error) {
        res.status(500).json(error)
    }
})

//update payer information by id value
router.put("/:id",async({params,body},res)=>{
    try {
        var UpdatedPayer=await Payer.findByIdAndUpdate(
            {_id:params.id},
            body,
            {new:true}
        )
        res.status(200).json(UpdatedPayer)
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete a payer by id value
router.delete("/:id",async(req,res)=>{
    try {
        var deleted = await Payer.findByIdAndDelete({_id:req.params.id})
        // var deletedThoughts= await Thought.deleteMany()
        res.status(200).json(deleted)
    } catch (error) {
        res.status(500).json(error)
    }
})

//post a point id to associated payer
router.post("/:id/points/:pointsid",async({params},res)=>{
    try {
        var UpdatedUser=await Payer.updateOne(
            {_id:params.id},
            {$addToSet:{points:params.pointsid}})
        res.status(200).json(UpdatedPayer)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

//delete points id associated with payer
router.delete("/:id/points/:pointsid",async({params},res)=>{
    try {
        var UpdatedPayer = await Payer.updateOne(
            {_id:params.id},
            {$pull:{points:params.pointsid}}
        )
        res.status(200).json(UpdatedPayer)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

module.exports=router
