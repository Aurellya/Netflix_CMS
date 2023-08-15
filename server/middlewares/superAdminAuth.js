const superAdminAuthorization = async (req, res, next) => {
  try {
    const { role } = req.user;
    console.log(role, 3213);
    if (role !== "super-admin") throw { name: "NotAuthorized" };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = superAdminAuthorization;
