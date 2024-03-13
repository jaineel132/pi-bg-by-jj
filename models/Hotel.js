const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
    country_id: {type: String, require: true},
    title: {type: String, require: true},
    description: {type: String, require: true},
    availability: {
        start:{type:Date},
        end:{type:Date},

    },
    imageUrl: {type: String, require: true},
    location: {type: String, require: true},
    contact: {type: String, require: true},
    rating: {type: Number, require: true},
    review: {type: String, require: true},
    coordinates:{
        latitude: {type: Number, require: true},
        longitude: {type: Number, require: true},
    },
    price:{type:Number,require:true},
    facilities:[
        {
            wifi:{ type:Boolean,default:true}
        },
        {
            parking:{ type:Boolean,default:true}
        },
        {
            ac:{ type:Boolean,default:true}
        },
        {
            service:{ type:Boolean,default:true}
        },
        {
            bathroom:{ type:Boolean,default:true}
        },   
    ]
    

}, {timestamps: false});

module.exports = mongoose.model("Hotel", HotelSchema);