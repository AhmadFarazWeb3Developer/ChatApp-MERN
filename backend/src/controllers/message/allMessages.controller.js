import messageModel from "../../models/message.model.js";

const allMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;

    const myId = req.user._id;

    const messages = await messageModel.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in messages conroller : ", error.message);
    req.status(500).json({ message: "Internal Server Error" });
  }
};
export default allMessages;
