const isAdmin = (req, res, next) => {
  if (req.userAuth && req.userAuth.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { isAdmin };
