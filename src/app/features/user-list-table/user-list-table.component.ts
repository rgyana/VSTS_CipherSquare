import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { UserStatus } from 'src/app/core/enums/user-status.enum';
import { UserListData } from 'src/app/core/interfaces/user-list-data';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.css'],
})
export class UserListTableComponent implements OnInit {
  @Input()
  userDetailsArray$: Observable<UserListData[]> = of([]);

  readonly userStatus = UserStatus;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  // open edit modal with existing data to update
  openEditUserModal(data: UserListData) {
    const modalRef = this.modalService.open(EditUserModalComponent, {
      centered: true,
      backdropClass: 'no-zindex',
      backdrop: 'static',
      scrollable: true,
    });
    modalRef.componentInstance.modalUsersData = data;
  }

  // pagination
  page: any = 1;
  itemsPerPage: number = 4;
  totalPages: number = 0;
}
