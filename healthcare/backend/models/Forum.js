const mongoose = require('mongoose');

const ForumSchema = new mongoose.Schema({
    by:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    a_name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    PositiveSentimentScore:{
        type:Number
    },
    NegativeSentimentScore:{
        type:Number
    }
})