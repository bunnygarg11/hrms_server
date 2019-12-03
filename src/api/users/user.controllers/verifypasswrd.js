const jwt = require("jwt-simple");

const verify=async(req,res,next)=>{
    try{
    const decodedtoken = jwt.decode(req.params.token,"secretKey");
    const { userEmail } = decodedtoken;
    console.log(decodedtoken)
    // req.email=userEmail
    res.redirect('http://localhost:3000/changepassword')

    next()
}catch{
    res.send("wrong token catch")
}
}
module.exports = { verify }