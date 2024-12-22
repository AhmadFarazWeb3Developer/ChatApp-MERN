import cloudinary from "../../lib/cloudinary.lib.js";
import messageModel from "../../models/message.model.js";

const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageUrl;

    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new messageModel({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    // todo: realtime  functionality goes here => socket.io

    res.status(201).json(newMessage);
  } catch (error) {
    req.status(500).json({ message: "Internal Server Error" });
  }
};
export default sendMessage;
