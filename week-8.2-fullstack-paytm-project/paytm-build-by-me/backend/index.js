const rootRouter=require("./routes/index");
const express = require("express");
const cors=require('cors');//used because frontend and backend are in different urls

const app=express();

app.use(cors());//cors middleware
app.use(express.json());
//used instead of app.use(bodyparser.json());
//as the version of express is 4.16+ or else we had to use app.use(bodyparser.json());

app.use("/api/v1",rootRouter);//for better structuring of express apps we use 2 things in the middleware

const port=3000;

app.listen(port);//Express Server running and listening at port ${port}











//routers we will be needing

/*
/api/v1/user/signup
/api/v1/user/login
/api/v1/user/logout
/api/v1/user/changePassword


/api/v1/account.transfermoney
/api/v1/account/deposit
/api/v1/account/withdraw
/api/v1/account/balance
*/

/*Typical use cases for CORS include
loading resources from content delivery
networks (CDNs), requesting APIs across
multiple domains, and facilitating third-party
integration. However, improperly implementing CORS
may result in your application poses security risks.*/