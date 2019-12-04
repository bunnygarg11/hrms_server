const jwt = require("jsonwebtoken");
const User = require("../users/user.model");
const Designation=require("../designation/designation.model")
const managerauth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretKey");
    const user = await User.findOne({ _id: decoded._id, token: token });

    const designation = await Designation.findById(user.designation_id);
    console.log(designation);
    if (designation.name !== "Manager") {
    return res.status(400).send("Not a manager")
  }

    req.token = token;
    req.user = user;
    req._id=decoded._id
    
    next();
  } catch (e) {
    console.log(e.message)
    res.status(500).send({ error: "Please authenticate"});
  }
};
module.exports = managerauth;
