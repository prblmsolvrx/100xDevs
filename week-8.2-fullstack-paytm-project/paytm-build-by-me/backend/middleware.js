// Importing the JWT_SECRET from a config file (Assuming it's an environment variable or a configuration file)
const {JWT_SECRET}=require("./config");
// Importing the 'jsonwebtoken' library
const jwt=require("jsonwebtoken");

//// Middleware function for handling authentication
const authMiddleware=(req,res,next)=>{
    // Extracting the 'Authorization' header from the incoming request
    const authHeader=req.headers.authorization;
     // Checking if the 'Authorization' header is missing or doesn't start with 'Bearer '
    if(!authHeader||!authHeader.startsWith('Bearer')){
        return res.status(403).json({});
    }

}

module.exports={
    authMiddleware
}