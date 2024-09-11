import { User } from "../../Models/user.model.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedinUser = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedinUser } }).select(
      "-password"
    );
    // const allUsers = await User.find(); // for all users along with yourself

    return res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error in userSideBar controller : ", error);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
export { getUsersForSidebar };
