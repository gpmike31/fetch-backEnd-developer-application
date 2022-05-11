//insert payer schema, will require mongoose
const {Schema,model} = require('mongoose');

//will need to reference points schema
const PayerSchema= new Schema({
    //create a new object ID to display payer when schema is ran
    payer:{
        type:Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    payerName:{
        type:String,
        trim:true,
        required:'PayerName is required',
        unique:true,
        max:280
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
});

const Payer=model("Payer", PayerSchema)
module.exports=Payer