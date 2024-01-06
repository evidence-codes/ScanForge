import User, { IUser } from "../models/user.model";
import bcrypt from "bcrypt";

class Users {
  async getUser(id: String) {
    try {
      const user = await User.findById(id);
      if (!user) throw new Error("User does not exist");
      return user;
    } catch (err) {
      throw new Error("Failed to get user");
    }
  }

  async forgotPassword(data: IUser) {
    try {
      const { email, secret, password } = data;
      const user = await User.findOne({ email });
      if (!user) throw new Error("User does not exist");
      if (user.secret != secret) throw new Error("Wrong/Invalid Secret");

      const incomingPassword: string = password.toString();
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(incomingPassword, salt);

      user.password = hash;
      await user.save();
      return "Password changed successfully...";
    } catch (err: any) {
      throw new Error(err?.message || "An Error Occured");
    }
  }

  async changePassword(data: any) {
    try {
      const { old, password, id } = data;
      const user = await User.findById(id);
      if (!user) {
        throw new Error("User not found");
      }
      const oldPassword: string = user["password"].toString();
      const compare = await bcrypt.compare(old, oldPassword);

      if (!compare) throw new Error("Old password is not correct..");

      const newPassword: string = password.toString();
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(newPassword, salt);

      user.password = hash;
      await user.save();
      return "Password changed successfully...";
    } catch (err: any) {
      throw new Error(err?.message || "An Error Occured");
    }
  }

  async deleteUser(id: String) {
    try {
      const user = await User.findById(id);
      if (!user) throw new Error("User does not exist");
      await user.deleteOne();
      return "User deleted successfully...";
    } catch (err: any) {
      throw new Error(err?.message || "An Error Occured");
    }
  }
}

export default Users;
