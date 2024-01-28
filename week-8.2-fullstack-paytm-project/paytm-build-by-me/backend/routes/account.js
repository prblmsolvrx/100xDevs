const express=require('express');
const {authMiddleware}=require('../middleware');
const {Account}=require('../db');

const router=express.Router();

/*1. An endpoint for user to get their balance.
Method: GET*/
router.get("/balance",authMiddleware,async(req,res)=>{
    const account=await Account.findOne({
        userId:req.userId
    });
    res.json({
        balance: account.balance
    })
});

/*An endpoint for user to transfer money to another account
Method: POST
Route: /api/v1/account/transfer */

router.post("/transfer",authMiddleware,async(req,res)=>{
    
    //starting transfer session in db
    const session=await mongoose.startSession();
    
    session.startTransaction();
    const {amount,to}=req.body;

    //fetching account within transaction
   const account=await Account.findOne({userId: req.userId}).session(session);

   if(!accpount || account.balance < amount){
    await session.abortTransaction();//means rollback it converts the state of the database into such as if that the transaction has nver been started
    return res.status(400).json({
        message:"Insuffient balance"
    });
   }

   const toaccount=await Account.findOne({userId: req.userId}).session(session);
  
   if(!toAccount){
    await abortTransaction();
    return res.status(400).json({
        message:"Invalid account"
    });
   }

   //perform the transfer
   await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session);
   await Account.updateOne({userId: to},{$inc:{balance:amount}}).session(session);

   //commit the transaction
   await session.commitTransaction();

   res.json({
    message:"Transfer Successful"
   });

});

module.exports=router;