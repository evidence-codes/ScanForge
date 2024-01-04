import Auth from "../classes/Auth";

class AuthService {
  private readonly auth: Auth;

  constructor() {
    this.auth = new Auth();
  }

  register(data: any) {
    return this.auth.register(data);
  }

  login(data: any) {
    return this.auth.login(data);
  }
}

export default new AuthService();
