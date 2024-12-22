import generateJsonWebToken from "../../lib/generateJsonWebToken.js";
import userModel from "../../models/user.model.js";
import bcrypt from "bcryptjs";

const signup = async (req, res) => {
  try {
    const { email, fullName, password } = req.body;

    // Validate input fields
    if (!email || !fullName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Validate password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password minimum be 6 characters long" });
    }

    // Check if the user already exists
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(401).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("hashed Password :", hashedPassword);

    // Create a new user
    const newUser = await userModel.create({
      email,
      fullName,
      password: hashedPassword,
    });

    if (newUser) {
      const userId = newUser._id;

      // Generate a JWT and set it as a cookie
      const token = await generateJsonWebToken({ userId, res });
      if (token) {
        req.user = newUser;
        return res.status(201).json({ message: "User Signed Up" });
      } else {
        return res.status(500).json({ message: "Token generation failed" });
      }
    }
  } catch (error) {
    console.error("Error during signup:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default signup;
