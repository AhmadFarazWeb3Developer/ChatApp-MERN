import { User } from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../Utils/generateToken.js";

const LoginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isCorrectPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isCorrectPassword) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller : ", error);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export { LoginUser };
