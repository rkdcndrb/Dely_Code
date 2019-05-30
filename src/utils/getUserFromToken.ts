import jwt from "jsonwebtoken";
import User from "../entities/User";

const getUserFromToken = async (token: string): Promise<User | undefined> => {
  try {
    const decoded: any = await jwt.verify(
      token,
      "MTFCfM5wmTMbrCveV3PVJfKWZVKgfS6F2ZTAw2GY6a6cFZQUYDG"
    );
    const decodedUser = await User.findOne(decoded.id);
    return decodedUser;
  } catch (err) {
    return err;
  }
};

export default getUserFromToken;
