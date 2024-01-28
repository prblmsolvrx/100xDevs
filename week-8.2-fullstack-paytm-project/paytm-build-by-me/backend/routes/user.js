const express=require('express');
const app=express();
const router=express.Router();

const zod=require('zod');
const {User}=require("../db");
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require("../config");

//zod validation
const signupBody=zod.object({
    username:zod.string().min(3).max(30),
    email:zod.string().email(),
    password:zod.string().min(6),
    firstname:zod.string().min(3).max(30),
    lastname:zod.string().min(3).max(30)
});

router.post("/signup",async (req,res)=>{
     const {success}=signupBody.safeParse(req.body);//The purpose of safeParse is to parse
                                                 //and possibly validate the data in req.body.*/ 
     if(!success){
       return res.status(411).json({
           message:"Email already taken / incorrect inputs"
       });
     }

   // Asynchronously query the database to find a user with a specific username
   const existingUser = await User.findOne({
    // Specify the search criteria: username should match the value in the request body
       username: req.body.username
     });
  // The 'existingUser' variable now contains the result of the findOne operation.
  // If a user with the specified username is found, 'existingUser' will hold that user's data.
  // If no matching user is found, 'existingUser' will be 'null'.

  if(existingUser){
    return res.status(411).json({
        message:"Email already taken / incorrect inputs"
    });
  }

  // Asynchronously create a new user in the database
      const user = await User.create({
    // Set the user's properties based on values from the request body
       username: req.body.username,    // Extract username from the request body
       email: req.body.email,          // Extract email from the request body
       password: req.body.password,    // Extract password from the request body
       firstname: req.body.firstname,  // Extract firstname from the request body
       lastname: req.body.lastname     // Extract lastname from the request body
  });

   // Extract the unique identifier (_id) of the newly created user
   const userId = user._id; // 'user' is the object representing the newly created user

// The 'userId' variable now holds the unique identifier of the created user.
// This identifier can be used for various purposes, such as referencing the user in the application,
// associating data with this specific user, or performing further operations involving this user.

await Account.create({
    userId,
    balance:1+Math.random()*10000
})

// Generate a JWT token for the newly created user
    const token = jwt.sign({userId}, JWT_SECRET, {expiresIn: '1h'});

   res.json({
       message:"User created successfully",
       token:token
   })


});
////expiresIn is used to provide an extra layer of security

const signinBody=zod.object({
    username:zod.string().min(3).max(30),
    email:zod.string().email(),
    password:zod.string().min(6),
})


router.post("/signin",async (req,res)=>{
    const {success}=signinBody.safeParse(req.body);
    if(!success){
      return res.status(411).json({
          message:"incorrect inputs"
      })
    }

    // Asynchronously query the database to find a user with a specific username
    const existingUser = await User.findOne({
     // Specify the search criteria: username should match the value in the request body
        username: req.body.username,
        password: req.body.username
      });

      if(user){
        const token=jwt.sign({userId:user._id,},JWT_SECRET);
        res.json({token:token});
        return;
      }

      res.status(411).json({
        message:"Error while logging in"
      })
});


//1. Route to update user information

const  { authMiddleware } = require("../middleware");

// other auth routes
const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})
//put means update
router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    await User.updateOne(req.body, {
        _id: req.userId
    })
    res.json({
        message: "Updated successfully"
    })
})

//Route to get users from the backend, filterable via firstName/lastName
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
      $or: [{
          firstName: {
              "$regex": filter
          }
      }, {
          lastName: {
              "$regex": filter
          }
      }]
  })

  //don't show password to the user
  res.json({
      user: users.map(user => ({
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          _id: user._id
      }))
  })
})
module.exports=router;