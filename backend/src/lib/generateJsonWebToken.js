import jwt from "jsonwebtoken";

const generateJsonWebToken = async ({ userId, res }) => {
  try {
    // Generate the JWT with a 7-day expiration

    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time in milliseconds
      httpOnly: true, // Makes the cookie inaccessible to client-side JavaScript
      sameSite: "strict", // Restricts cookie access to the same site
      secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    });

    return token;
  } catch (error) {
    console.error("Error generating JWT:", error);
    throw new Error("Failed to generate JWT");
  }
};

export default generateJsonWebToken;
