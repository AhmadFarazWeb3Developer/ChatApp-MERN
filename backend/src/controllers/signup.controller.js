import userModel from "../models/user.model.js";

const signup = async (req, res) => {
  const { email, fullName, password } = req.body;

  if (!email || !fullName || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await userModel.findOne({ email });
  if (user) {
    return res.status(401).json({ message: "User already exists" });
  }

  const newUser = await userModel.create({
    email,
    fullName,
    password,
  });
  res.status(201).json({ message: "User Signed Up", newUser });
};

export default signup;
