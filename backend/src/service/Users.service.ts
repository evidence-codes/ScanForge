import User from "../classes/User";

class UserService {
  private readonly user: User;

  constructor() {
    this.user = new User();
  }

  get(data: any) {
    return this.user.getUser(data);
  }

  forgot(data: any) {
    return this.user.forgotPassword(data);
  }
  password(data: any) {
    return this.user.changePassword(data);
  }

  delete(data: any) {
    return this.user.deleteUser(data);
  }
}

export default new UserService();
