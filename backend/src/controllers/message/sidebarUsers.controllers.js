import userModel from "../../models/user.model.js";

const sidebarUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const allUsers = await userModel
      .find({ _id: { $ne: loggedInUserId } })
      .select("-password");
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default sidebarUsers;
