import jwt from "jsonwebtoken";
import User from "../entities/User";

const getUserFromToken = async (token: string): Promise<User | undefined> => {
  try {
    const decoded: any = await jwt.verify(token, process.env.JWT_TOKEN || "");
    const decodedUser = await User.findOne(decoded.id);
    return decodedUser;
  } catch (err) {
    return err;
  }
};

export default getUserFromToken;
