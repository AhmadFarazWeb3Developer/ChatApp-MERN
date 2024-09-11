import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const jwt = jsonwebtoken;
const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, JWT_TOKEN_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //Milisecond
    httpOnly: true, // prevent XSS Attack [Cross-Site Scripting Attak] means cannot be accesable via javascript
    sameSite: "strict", // prevent CSRF Attack  [Cross-site SScrpting Request Frogery] Attack
    secure: process.env.NODE_ENV !== "development",
  });
};

export { generateTokenAndSetCookie };
