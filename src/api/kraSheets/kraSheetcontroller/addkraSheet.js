const User=require("../../users/user.model")
const KraSheetModel=require("../krasheetmodel")
const Addkra=async(req,res)=>{
    console.log("addkra");
    
    try{

    let kra=await KraSheetModel.findOne({userId:req.user._id})
    if(!kra){
        kra=await new KraSheetModel({
            userId:req.user._id,
            reportingManagerId:req.user.reportingManager,
            kraSheet:[{kraAttributes:req.body.kraAttributes}]
        })
        await kra.save()
       return res.send(kra)

    }

    kra.kraSheet.unshift({kraAttributes:req.body.kraAttributes})
    await kra.save()
    res.json(kra)
    
}catch(err){
    console.log(err.message);
    res.status(500).send("ha")
    
}
    
}

module.exports={ Addkra }