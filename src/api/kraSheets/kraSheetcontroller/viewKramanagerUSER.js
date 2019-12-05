const KraSheetModel=require("../krasheetmodel")
const viewKramanagerUser=async(req,res)=>{
    console.log("in viewkramanager");
    
    try{
        const {
            userId,
            krasheetId,
        }=req.body

        const kra=await KraSheetModel.findOne({"userId":userId,"kraSheet._id":krasheetId},{"kraSheet.$":1})
    if(!kra){
       return res.status(400).send("No Kra found")

    }
    res.json({kra})
    
}catch(err){
    console.log(err.message);
    res.status(500).send("server error")
    
}
}
module.exports={ viewKramanagerUser}