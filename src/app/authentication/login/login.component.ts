import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LOGIN } from 'src/app/utils/schema';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted!: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apollo: Apollo,
    private message: NzMessageService
  ) {}

  submitForm(): void {
    this.submitted = true;

    const params = this.loginForm.value;

    this.apollo
      .mutate<any>({
        mutation: LOGIN,
        variables: {
          params: params,
        },
      })
      .subscribe(
        ({ data }) => {
          const { token, user } = data.login;
          window.localStorage.setItem('token', token);
          window.localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/admin']);
        },
        (error) => {
          console.log({ error });
          const errorMessage = error.message;
          this.showErrorRegisterMessage(errorMessage);
        }
      );
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  showSuccessRegisterMessage(contentMessage?: string) {
    const content = contentMessage || 'Updated successfully';
    this.message.create('success', content);
  }
  showErrorRegisterMessage(contentMessage?: string) {
    const content = contentMessage || 'System Error';
    this.message.create('error', content);
  }
}
