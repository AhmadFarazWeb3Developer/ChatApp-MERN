const checkAuth = (req, res) => {
  try {
    console.log(req.user);
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller".error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default checkAuth;
