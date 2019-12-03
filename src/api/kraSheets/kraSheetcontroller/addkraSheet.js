const User=require("../../users/user.model")
const KraSheetModel=require("../krasheetmodel")
const Addkra=async(req,res)=>{
    console.log("addkra");
    
    try{

    let kra=await KraSheetModel.findOne({userId:req.user._id})
    if(!kra){
        kra=new KraSheetModel({
            userId:req.user._id,
            reportingManager:req.user.reportingManager,
            kraSheet:[{kraAttributes:req.body.kraAttributes}]
        })
    }
    res.send(kra)
}catch(err){
    console.log(err.message);
    res.status(500).send("ha")
    
}
    
}

module.exports={ Addkra }