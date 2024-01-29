// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:3000/paytm")

//defining schema for users collection
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength: 6
    },
    firstname:{
        type:String,
        required:true,
        trim: true,
        maxLength: 50
    },
    lastname:{
        type:String,
        required:true,
        trim: true,
        maxLength: 50
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,//reference to user model
        ref:'User',//ref makes the db strict which is neccessary for a bank or finnace related apps 
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
});


//Creating a mongoose model using the schema
const User=mongoose.model('User',userSchema);
const Account=mongoose.model('Account',accountSchema);

module.exports={
    User,
    Account,
};