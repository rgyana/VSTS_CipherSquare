import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-user-add-panel',
  templateUrl: './user-add-panel.component.html',
  styleUrls: ['./user-add-panel.component.css'],
})
export class UserAddPanelComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  topPanelForm!: FormGroup;

  ngOnInit(): void {
    this.topPanelForm = new FormGroup({
      email: new FormControl(''),
    });
  }

  // seach the inputs
  onSearchButton() {
    return this.topPanelForm.value;
  }

  // open modal funtion --> after opening we can add details of new user
  openAddUserModal() {
    this.modalService.open(AddUserModalComponent, {
      centered: true,
      backdropClass: 'no-zindex',
      backdrop: 'static',
      scrollable: true,
    });
  }
}
