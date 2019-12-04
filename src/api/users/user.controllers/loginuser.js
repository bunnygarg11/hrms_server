const User = require('../user.model')

const login = async (req, res,next) => {
    try {
        console.log("in login");

       let user = await User.findByCredentials(req.body.email, req.body.password)
       
        const token = await user.generateAuthToken()
        user=await User.findById(user._id).select("-password -__v").populate("kraAttributes designation_id department_id reportingManager",["name"])
        console.log(user);
        
        res.json( user )

    } catch (e) {
        console.log(e.message);
        return res.status(500).send("server error")
    }
}


module.exports = { login }