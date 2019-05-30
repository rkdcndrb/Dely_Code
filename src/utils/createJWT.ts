import jwt from "jsonwebtoken";

export const createJWT = (userId: number): string => {
  const token = jwt.sign(
    {
      id: userId
    },
    process.env.JWT_TOKEN || ""
  );
  return token;
};
