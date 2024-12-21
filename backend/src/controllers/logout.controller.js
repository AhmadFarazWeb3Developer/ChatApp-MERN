const logout = (req, res) => {
  res.status(201).json({ message: "User Logged out" });
};

export default logout;
