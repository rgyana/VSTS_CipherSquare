import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserListData } from 'src/app/core/interfaces/user-list-data';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EditUserModalComponent implements OnInit {
  editUserDetails!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  @Input() modalUsersData!: UserListData;

  ngOnInit(): void {
    this.editUserDetails = this.formBuilder.group({
      firstname: [this.modalUsersData.firstname],
      lastname: [this.modalUsersData.lastname],
      email: [this.modalUsersData.email],
      phone: [this.modalUsersData.phone],
      password: [this.modalUsersData.password],
      role: [this.modalUsersData.role],
    });
  }

  // function for updating data
  updateUserDetails() {
    console.log(this.editUserDetails.value);
  }

  // getting user list data
  getUserListData() {
    return this.modalUsersData;
  }
}
