//insert points schema, will require mongoose
const {Schema, model}= require("mongoose")
const PayerSchema=require("./Payer")

//points schema will show the amount of points as a string whether adding or subtracting
//and will show the current date and time for each transaction.
//This schema below will reference the payers module inside of an array and use a virtual
//to return the payers in a string
const PointsSchema=new Schema(
    {
        pointText:{
            type:Number,
            trim:true,
            required:"Current Point Total"
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        payers:['${PayerSchema}']
    }
)

PointsSchema.virtual("payersCount").get(function(){
    console.log(this.payers);
    return this.payers.String
})

//May add this later:need to put function to display timestamp ...
//...when points are used

//will need to reference payer schema
const Points = model("Points", PointsSchema)
module.exports=Points















//virtual to grab date and time stamp, console log and return as a string