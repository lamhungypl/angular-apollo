import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { AntdModule } from 'src/app/antd/antd.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserEditComponent, UserComponent],
  imports: [CommonModule, UserRoutingModule, AntdModule, ReactiveFormsModule],
})
export class UserModule {}
