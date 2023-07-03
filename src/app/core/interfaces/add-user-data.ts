import { UserRole } from '../enums/user-role.emun';

export interface AddUserData {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
  role: UserRole;
}
