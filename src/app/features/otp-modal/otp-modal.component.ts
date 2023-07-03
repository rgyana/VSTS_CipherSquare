import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-otp-modal',
  templateUrl: './otp-modal.component.html',
  styleUrls: ['./otp-modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OtpModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  otpInput!: FormGroup;
  showError = false;

  @Input()
  modalContent: any;

  ngOnInit(): void {
    this.otpInput = new FormGroup({
      input1: new FormControl(''),
      input2: new FormControl(''),
      input3: new FormControl(''),
      input4: new FormControl(''),
    });
  }

  // autofocus
  focusNext(event: any) {
    let element: any;
    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null) return;
    else element.focus();
  }

  // otp verification
  verifyOtp() {
    let userOtpInput: string =
      this.otpInput.value.input1 +
      this.otpInput.value.input2 +
      this.otpInput.value.input3 +
      this.otpInput.value.input4;
    const userOtpInputNumber = parseInt(userOtpInput);

    this.authService
      .verifyOtp(
        this.modalContent.email,
        this.modalContent.password,
        userOtpInputNumber
      )
      .subscribe({
        next: (res: any) => {
          if (res.statuscode === 200) {
            console.log(res);
            this.toastrService.success('You are logged in!', 'Login Success!');
            this.activeModal.close(res);
          } else {
            console.log(res);
            window.alert(res.message);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  resendOtp() {
    return this.verifyOtp();
  }
}
