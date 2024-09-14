import { User } from "../../Models/user.model.js";

const getUsersForSidebar = async (req, res) => {
  try {
    // ---- THESE STEPS ARE FOR ONLY AUTHENTICATED USER CAN ACCESS THE CONVERSATION
    // const loggedinUser = req.user._id;
    // const allUsers = await User.find({ _id: { $ne: loggedinUser } }).select("-password");

    const allUsers = await User.find().select("-password");

    return res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error in userSideBar controller : ", error);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
export { getUsersForSidebar };
