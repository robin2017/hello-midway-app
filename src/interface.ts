/**
 * @description User-Service response
 */
export interface IUser {
  id: number;
  username: string;
  phone: string;
  email?: string;
}

/**
 * @description User-Service abstractions
 */
export interface IUserService {
  getUser(id: number): Promise<IUser>;
}
