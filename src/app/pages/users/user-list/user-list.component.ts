import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserListData } from 'src/app/core/interfaces/user-list-data';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userDetailsArray: Observable<UserListData[]>;

  constructor(private userService: UsersService) {
    this.userDetailsArray = this.userService.getAllUserDetails();
  }

  ngOnInit(): void {}

  // getting all user observables
  getUserDetailsObs() {
    return this.userDetailsArray;
  }
}
