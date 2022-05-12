//insert global payer api routes
const router = require("express").Router()
const Payer = require("../../models/Payer")
const Points = require("../../models/Points")

//get all payers name from model schema
router.get("/",async (req,res)=>{
    try {
        var AllPayers= await User.find({})
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
        User.create(body).then(dbpayer=>res.status(200).json(dbpayer))
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

module.exports=router
