const adminAuthorization = async (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "admin" && role !== "super-admin")
      throw { name: "NotAuthorized" };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminAuthorization;
