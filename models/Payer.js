//insert payer schema, will require mongoose
const {Schema,model} = require("mongoose");

//will need to reference points schema
const PayerSchema= new Schema({
    //create a new object ID to display payer when schema is ran
    payerName:{
        type:String,
        trim:true,
        required:"PayerName is required",
        unique:true,
    },
    createdAt: {
        type:Date,
        default:Date.now
    },
    points:[
        {
            type:Schema.Types.ObjectId,
            ref:"points",
            type:String
        }
    ]
})
PayerSchema.virtual("pointCount").get(function(){
    console.log(this.points);
    return this.points.length
})

const Payer=model("Payer", PayerSchema)
module.exports=Payer