import { provide } from "midway";
import { IUserService, IUser } from "../interface";

//1、midway中@provide类似与spring中的@Component
@provide()
export class UserService implements IUserService {
  async getUser(id: number): Promise<IUser> {
    return {
      id,
      username: "mockedName",
      phone: "12345678901",
      email: "xxx.xxx@xxx.com",
    };
  }
}
