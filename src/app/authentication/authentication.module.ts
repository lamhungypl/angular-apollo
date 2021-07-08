import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './authentication.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntdModule } from '../antd/antd.module';
import { RegisterComponent } from './register/register.component';

// import {} from '@ant-'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AntdModule,
  ],
})
export class AuthenticationModule {}
