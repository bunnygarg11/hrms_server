const User = require("../../users/user.model");
const showEmploye = async (req, res) => {
  const user = await User.find({ name: { $nin: "Admin" } })
    .select("name jobStatus")
    .populate("designation_id department_id ", [
      "name"
    ]);
  console.log(user);
  res.send(user);
};
module.exports = { showEmploye };
