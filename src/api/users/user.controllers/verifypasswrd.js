const jwt = require("jwt-simple");
const User=require("../user.model")
const verify=async(req,res,next)=>{
    try{
    const decodedtoken = jwt.decode(req.params.token,"secretKey");
    const { userEmail } = decodedtoken;
    console.log(userEmail)
    const user=await User.findOne({email:userEmail})
    console.log(user);
    
    res.send(user)
    // req.email=userEmail
    // req.method="post"
    // res.redirect("http://localhost:5050/changepassword")
console.log("yyuyy");

    // next()
}catch{
    res.send("wrong token catch")
}
}
module.exports = { verify }