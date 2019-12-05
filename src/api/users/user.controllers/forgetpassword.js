const User = require('../user.model')
const mailer=require('../../../../utils/mailer')
const jwt = require("jwt-simple");

const forget=async(req,res,next)=>{
    console.log("forget",req.body);
    
    // const user = await User.findByCredentials(req.body.email)
    try{  
        const user=await User.findOne({email:req.body.email})
        console.log(user);
        
        if(!user){
            return res.status(400).send("Email not exist")
        }
        const userEmail=user.email
        console.log(userEmail);

        let date=new Date();
        let time=date.getTime();
        token = jwt.encode({userEmail, time }, "secretKey");
        console.log(token,"mail vala token");
        const verify=`http://localhost:5050/verify/${token}`
        await mailer(userEmail,verify)
  
        console.log("in forget");
        res.send(verify)
        next()
}catch(err){
    console.log(err.message)
    res.send("catch error")
}
}

//verify the token and save user details in db
// router.get('/verify/:token',async(req,res)=>{
//     try{
    
//     const decodedtoken = jwt.decode(req.params.token,process.env.SECRET_KEY );
//     const { name, email, password } = decodedtoken;
//     console.log(userdetail.email)
   
//     if(userdetail.email==email){
//     await User.insertMany({ name, email, password });
    
//     // res.send("email verified successfully");
//     res.redirect('http://localhost:3000');
//     }else{
//         res.send("wrong token");
//     }
// }catch{
//     res.send("wrong token catch")
// }

module.exports = { forget }
