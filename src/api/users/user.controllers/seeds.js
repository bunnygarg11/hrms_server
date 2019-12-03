const Admin=require('../user.model')
const Department=require('../../department/department.model')
const Designation=require('../../designation/designation.model')
const Kra=require('../../k.r.a_attributes/k.r.a.attr.model')

const seeds =async(req,res)=>{
    try {
        let reportingManager=await Admin.find({name:"Manager"}).select("-__v")
        if(!reportingManager){
            reportingManager=[]
        }
        const department=await Department.find().select("-__v")
        
        

        const designation=await Designation.find().select("-__v")
        
        console.log("Designation",designation);
        const kraAttributes=await Kra.find().select("-__v")
        // kraAttributes=[...kraAttributes]
        console.log("kraAttributes",kraAttributes);
        console.log("admin",reportingManager);
        res.json({reportingManager,department,designation,kraAttributes})
        
    } catch (err) {
        console.log(err.message)
        res.status(500).send("server error")
        
    }

}
module.exports={seeds}