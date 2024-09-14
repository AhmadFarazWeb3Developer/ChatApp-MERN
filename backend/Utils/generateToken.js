import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const jwt = jsonwebtoken;
const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, JWT_TOKEN_SECRET, {
    expiresIn: "15d",
  });
  console.log("Generated Token:", token); // Log the token for debugging

  res.cookie("jwt", token, {
    path: "/",
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    // sameSite: "lax",
    // secure: process.env.NODE_ENV !== "development",

    sameSite: "None", // Required for cross-origin cookies
    secure: false,
  });
  console.log("Cookie Set: jwt =", token); // Log cookie setting action
};

export { generateTokenAndSetCookie };
