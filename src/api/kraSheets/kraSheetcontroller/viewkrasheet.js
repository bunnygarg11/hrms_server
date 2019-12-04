const User=require("../../users/user.model")
const KraSheetModel=require("../krasheetmodel")
const Viewkra=async(req,res)=>{
    console.log("in viewkra");
    
    try{

    let kra=await KraSheetModel.findOne({userId:req._id}).select("-_id")
    if(!kra){
       return res.status(400).send("No Kra found")

    }
    // const currentYear=kra.kraSheet[0].date.getFullYear()
    // const currentMonth=kra.kraSheet[0].date.getMonth()
    
    // if(currentMonth==new Date().getMonth() && currentYear==new Date().getFullYear()){
    //     return res.status(404).send({errmsg:"kra already done"})
    // }

    // kra.kraSheet.unshift({kraAttributes:req.body.kraAttributes})
    // await kra.save()
    // console.log("hu");
    
    res.json(kra)
    
}catch(err){
    console.log(err.message);
    res.status(500).send("server")
    
}
    
}

module.exports={ Viewkra }