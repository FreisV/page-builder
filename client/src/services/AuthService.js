import api from "../http";

export default class AuthService {
  static async registration(username, email, password) {
    return api.post("/registration", { username, email, password });
  }

  static async login(username, password) {
    console.log(username);
    return api.post("/login", { username, password });
  }

  static async logout() {
    return api.post("/logout");
  }
}
