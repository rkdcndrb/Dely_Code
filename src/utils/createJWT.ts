import jwt from "jsonwebtoken";

export const createJWT = (userId: number): string => {
  const token = jwt.sign(
    {
      id: userId
    },
    "MTFCfM5wmTMbrCveV3PVJfKWZVKgfS6F2ZTAw2GY6a6cFZQUYDG"
  );
  return token;
};
