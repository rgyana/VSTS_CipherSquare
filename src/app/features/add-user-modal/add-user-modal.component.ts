import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddUserModalComponent implements OnInit {
  addUserForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      phone: [''],
      password: [''],
      role: ['Role'],
    });
  }

  // form submit function --> write now its just consoling, need to do it in proper way
  submitAddUserForm() {
    console.log(this.addUserForm.value);
  }
}
