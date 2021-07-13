import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { NzMessageService } from 'ng-zorro-antd/message';

import { REGISTER } from 'src/app/utils/schema';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  passwordVisible!: boolean;
  checkPasswordVisible!: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apollo: Apollo,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
      email: [''],
    });
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.registerForm.controls.checkPassword.updateValueAndValidity()
    );
  }
  confirmationValidator = (control: FormControl) => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  showSuccessRegisterMessage() {
    this.message.create('success', 'Registration successfully');
  }
  showErrorRegisterMessage(message?: string) {
    const content = message || 'Invalid Registration';
    this.message.create('error', content);
  }

  submitForm(): void {
    const params = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
    };

    for (const i in this.registerForm.controls) {
      this.registerForm.controls[i].markAsDirty();
      this.registerForm.controls[i].updateValueAndValidity();
    }

    if (this.registerForm.valid) {
      this.apollo
        .mutate({
          mutation: REGISTER,
          variables: {
            payload: params,
          },
        })
        .subscribe(
          ({ data }) => {
            this.showSuccessRegisterMessage();
            this.router.navigate(['/auth/login']);
          },
          (error) => {
            const errorMessage = error.message;
            this.showErrorRegisterMessage(errorMessage);
          }
        );
    }
  }
}
