import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?:
    | {
        id: string;
      }
    | JwtPayload;
}

const secret = process.env.JWT_SEC || " ";

const auth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"] || "";
  console.log(authHeader);
  const token = authHeader.split(" ")[1];
  console.log(token);

  if (authHeader) {
    jwt.verify(token, secret, (err, decoded) => {
      console.log(token);
      if (err) {
        throw new Error("Token is not valid!");
      } else {
        if (typeof decoded === "string") {
          req.user = { id: decoded }; // Assigning user ID directly to req.user
        } else {
          req.user = decoded as JwtPayload; // Assigning JwtPayload to req.user
        }
        next();
      }
    });
  } else {
    throw new Error("You are not authenticated!");
  }
};

export default auth;
