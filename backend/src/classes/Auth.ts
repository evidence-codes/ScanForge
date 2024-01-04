import User, { IUser } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_SEC || "";

class Auth {
  async saveToDatabase(user: any) {
    try {
      await user.save();
      console.log("User saved to database");
    } catch (err) {
      throw new Error("Failed to save user to database");
    }
  }

  async register(data: IUser) {
    try {
      const { name, email, password } = data;
      const user = await User.findOne({ email });
      if (user) throw new Error("User already exists");
      const incoming: string = password.toString();
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(incoming, salt);
      const newUser = new User({ name, email, password: hash });
      await this.saveToDatabase(newUser);
      return newUser;
    } catch (err) {
      throw new Error("Failed to register user");
    }
  }

  async login(data: IUser) {
    try {
      let user: any;
      const { email: IncomingEmail, password: IncomingPassword } = data;
      user = await User.findOne({ email: IncomingEmail });

      if (!user) throw new Error("Invalid Email/Password ");

      const { password } = user;
      const incomingPassword: string = IncomingPassword.toString();
      const compare = await bcrypt.compare(incomingPassword, password);

      if (!compare) throw new Error("Invalid Email/Password");

      const payload = {
        id: user._id,
      };
      const token = jwt.sign(payload, secret);
      return { user, token };
    } catch (err) {
      throw new Error("Failed to login user");
    }
  }
}

export default Auth;
