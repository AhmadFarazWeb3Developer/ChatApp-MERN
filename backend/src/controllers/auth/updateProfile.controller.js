import cloudinary from "../../lib/cloudinary.lib.js";
import userModel from "../../models/user.model.js";

const updateProfile = async (res, req) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;

    if (!profilePic) {
      return res.status(400).json({ message: "Profile pic is required" });
    }
    const uploadResponse = await cloudinary.uploader.upload(profilePic);

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      {
        profilePic: uploadResponse.secure_url,
      },
      { new: true }
    );
    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

export default updateProfile;
