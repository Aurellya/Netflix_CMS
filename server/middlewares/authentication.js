const { User } = require("../models");
const { verify } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  try {
    // cek access token availability
    const { access_token } = req.headers;
    if (!access_token) throw { name: "InvalidToken" };

    // validasi access token
    const payload = verify(access_token);
    if (!payload) throw { name: "InvalidToken" };

    // cek user di db
    const user = await User.findByPk(payload.id);
    if (!user) throw { name: "InvalidAccount" };

    req.user = {
      id: user.id,
      role: user.role,
      email: user.email,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
