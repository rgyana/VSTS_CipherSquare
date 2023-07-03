import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserStatus } from '../core/enums/user-status.enum';
import { UserListData } from '../core/interfaces/user-list-data';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  // user list table details
  private AllUserDetails$: Observable<UserListData[]> = of([
    {
      id: 70,
      firstname: 'Juned',
      lastname: 'Sayed',
      email: 'juned.sayed@rnfiservice.com',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.APPROVED,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
    {
      id: 69,
      firstname: 'Rajat',
      lastname: 'Biala',
      email: 'rajat.biala@ciphersquare.in',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.INCOMPLETE,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
    {
      id: 3,
      firstname: 'Mohammad',
      lastname: 'Haroon',
      email: 'mohammad.haroon@reliconnect.com',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.INCOMPLETE,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
    {
      id: 4,
      firstname: 'Rajat',
      lastname: 'Baila',
      email: 'rajat.baila@rnfiservice.com',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.APPROVED,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
    {
      id: 5,
      firstname: 'Juned',
      lastname: 'Sayed',
      email: 'juned.sayed@rnfiservice.com',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.PREAPPROVED,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
    {
      id: 6,
      firstname: 'Juned',
      lastname: 'Sayed',
      email: 'juned.sayed@rnfiservice.com',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.APPROVED,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
    {
      id: 6,
      firstname: 'Juned',
      lastname: 'Sayed',
      email: 'juned.sayed@rnfiservice.com',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.INCOMPLETE,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
    {
      id: 6,
      firstname: 'Juned',
      lastname: 'Sayed',
      email: 'juned.sayed@rnfiservice.com',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.PREAPPROVED,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
    {
      id: 6,
      firstname: 'Juned',
      lastname: 'Sayed',
      email: 'juned.sayed@rnfiservice.com',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.PREAPPROVED,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
    {
      id: 6,
      firstname: 'Juned',
      lastname: 'Sayed',
      email: 'juned.sayed@rnfiservice.com',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.PREAPPROVED,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
    {
      id: 6,
      firstname: 'Juned',
      lastname: 'Sayed',
      email: 'juned.sayed@rnfiservice.com',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.PREAPPROVED,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
    {
      id: 6,
      firstname: 'Juned',
      lastname: 'Sayed',
      email: 'juned.sayed@rnfiservice.com',
      phone: 7683876626,
      role: 'Sub Admin',
      status: UserStatus.PREAPPROVED,
      created: new Date('2022-12-16'),
      action: 'Some Action',
      password: 'password@12',
    },
  ]);
  // user list table details ends

  // funtion for getting user list table details
  getAllUserDetails = () => {
    return this.AllUserDetails$;
  };
  // funtion for getting user list table details ends
}
