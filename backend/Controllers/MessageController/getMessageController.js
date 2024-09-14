import { Conversation } from "../../Models/conversation.model.js";

const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params; // The user to chat with
    const senderId = req.user._id; // The sender's user ID

    // Find the conversation involving both users
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    console.log(conversation);

    if (!conversation) {
      return res.status(404).json({
        error: "Conversation not found",
      });
    }
    const messages = conversation.messages;
    return res.status(200).json(messages);
  } catch (error) {
    console.log("Error in Get Message controller : ", error);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export { getMessage };
