import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PERMISSIONS } from 'src/@types/authorization';
import { CHANGE_PASSWORD, GET_USERS, UPDATE_USER } from 'src/app/utils/schema';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  username!: string;
  updateForm!: FormGroup;
  changePassForm!: FormGroup;
  userId!: string;

  @Input() updatePermission: PERMISSIONS = 'UPDATE';

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private fb: FormBuilder,
    private apollo: Apollo,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      username: [{ disabled: true, value: this.username }],
      email: ['', Validators.email],
      account: [''],
    });

    this.changePassForm = this.fb.group({
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
      newPassword: ['', [Validators.required]],
    });

    this.userId = this.actRoute.snapshot.paramMap.get('id') || '2';

    this.apollo
      .query<any>({
        query: GET_USERS,
        variables: {
          userInfo: { userId: this.userId },
        },
      })
      .subscribe(
        ({ data }) => {
          const userInfoData = data.users[0];
          this.username = userInfoData.username;

          this.updateForm.setValue({
            username: userInfoData.username || '',
            email: userInfoData.email || '',

            account: userInfoData.account || '',
          });
        },
        (error) => {
          console.log({ error });
        }
      );
  }

  confirmationValidator = (control: FormControl) => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.changePassForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.changePassForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  showSuccessRegisterMessage(contentMessage?: string) {
    const content = contentMessage || 'Updated successfully';
    this.message.create('success', content);
  }
  showErrorRegisterMessage(contentMessage?: string) {
    const content = contentMessage || 'System Error';
    this.message.create('error', content);
  }
  onBack() {
    this.router.navigate(['/admin/user']);
  }
  submitForm() {
    const params = {
      // account: this.updateForm.value.account||'',
      email: this.updateForm.value.email || '',
    };

    for (const i in this.updateForm.controls) {
      this.updateForm.controls[i].markAsDirty();
      this.updateForm.controls[i].updateValueAndValidity();
    }

    if (this.updateForm.valid) {
      this.apollo
        .mutate({
          mutation: UPDATE_USER,
          variables: {
            payload: params,
            userId: this.userId,
          },
        })
        .subscribe(
          ({ data }) => {
            this.showSuccessRegisterMessage();
          },
          (error) => {
            const errorMessage = error.message;
            this.showErrorRegisterMessage(errorMessage);
          }
        );
    }
  }
  submitChangePassForm() {
    const params = {
      username: this.username,
      newPass: this.changePassForm.value.newPassword || '',
      confirmPass: this.changePassForm.value.checkPassword || '',
      currentPass: this.changePassForm.value.password || '',
    };

    for (const i in this.changePassForm.controls) {
      this.changePassForm.controls[i].markAsDirty();
      this.changePassForm.controls[i].updateValueAndValidity();
    }

    if (this.changePassForm.valid) {
      this.apollo
        .mutate({
          mutation: CHANGE_PASSWORD,
          variables: {
            payload: params,
          },
        })
        .subscribe(
          ({ data }) => {
            this.showSuccessRegisterMessage();
          },
          (error) => {
            const errorMessage = error.message;
            this.showErrorRegisterMessage(errorMessage);
          }
        );
    }
  }
}
