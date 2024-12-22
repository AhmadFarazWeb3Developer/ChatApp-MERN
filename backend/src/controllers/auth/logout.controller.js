const logout = (req, res) => {
  try {
    // Clear the authentication token by setting it to an empty string and expiring it immediately
    res.cookie("token", "", {
      httpOnly: true, // Prevent client-side access
      sameSite: "Strict", // Mitigate CSRF attacks
      expires: new Date(0), // Expire the cookie immediately
    });

    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error("Error during logout:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default logout;
