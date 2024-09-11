const sendMessage = async (req, res) => {
  //   return res.status(201).json({ message: "Message sent" });
  console.log("Message sent at ", req.params.id);
};
export { sendMessage };
