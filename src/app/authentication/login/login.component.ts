import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
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
    private apollo: Apollo
  ) {}

  submitForm(): void {
    this.submitted = true;

    const params = this.loginForm.value;

    this.apollo
      .mutate({
        mutation: LOGIN,
        variables: {
          params: params,
        },
      })
      .subscribe(
        ({ data }) => {
          console.log({ data });
          this.router.navigate(['/admin']);
        },
        (error) => {
          console.log({ error });
        }
      );
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['leewqweeixiao', [Validators.required]],
      password: ['a123456', [Validators.required]],
    });
  }
}
