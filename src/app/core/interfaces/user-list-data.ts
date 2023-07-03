import { UserStatus } from '../enums/user-status.enum';

export interface UserListData {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  role: string;
  status: UserStatus;
  created: Date;
  action: string;
  password: string;
}
