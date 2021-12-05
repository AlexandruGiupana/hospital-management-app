import config from "config";
import jsonWebToken from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ msg: "Authorization is denied (no token)" });
  }

  try {
    const decoded = jsonWebToken.verify(token, config.get("jwtSecret"));
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(400).json({ msg: "Token is not valid" });
  }
};
