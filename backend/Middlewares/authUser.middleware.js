import jsonwebtoken, { decode } from "jsonwebtoken";
import { User } from "../Models/user.model.js";
const jwt = jsonwebtoken;

const authenticatedUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log("Token: ", token);

    if (!token) {
      return res.status(401).json({
        error: "Unauthorized - No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    if (!decoded) {
      return res.status(401).json({
        error: "Unauthorized - Invalid Token",
      });
    }
    console.log("Decoded", decoded);

    const user = await User.findOne({ _id: decoded.userId }).select(
      "-password"
    );
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in AuthenicateUser middleware  : ", error);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
export { authenticatedUser };
