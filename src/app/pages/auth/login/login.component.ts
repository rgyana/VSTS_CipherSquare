import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { OtpModalComponent } from 'src/app/features/otp-modal/otp-modal.component';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLoginForm!: FormGroup;
  openLoginPage = false;
  isPasswordVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userLoginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get username() {
    return this.userLoginForm.controls['username'];
  }

  get password() {
    return this.userLoginForm.controls['password'];
  }

  // login form
  loginForm() {
    this.authService
      .login(
        this.userLoginForm.value.username,
        this.userLoginForm.value.password
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          if (res.status === false) {
            this.openOtpModal(
              this.userLoginForm.value.username,
              this.userLoginForm.value.password
            );
          } else {
            console.log(
              'linked IP Address is already exist. ie No need for otp verification'
            );
            this.router.navigate(['dashboard/analytics']);
          }
        },
        error: (err) => {
          console.log(err);
          window.alert(err.error.message);
        },
      });
  }

  // otp modal
  async openOtpModal(email: string, password: string) {
    const modalRef = this.modalService.open(OtpModalComponent, {
      centered: true,
      backdropClass: 'no-zindex',
      backdrop: 'static',
    });
    modalRef.componentInstance.modalContent = {
      email: email,
      password: password,
    };
    if (await modalRef.result) {
      // console.log(`Inside Login Component`);
      // console.log(modalRef.result);
      this.router.navigate(['dashboard/analytics']);
    }
  }

  // emialNotAllowed(control : FormGroup) : Promise<any> | Observable<any>{
  //   const response = new Promise(() =>{

  //   })
  // }
}
