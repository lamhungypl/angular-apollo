import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutComponent } from './common/common.component';
import { AuthLayoutComponent } from './auth/auth.component';
import { SharedModule } from '../shared/shared.module';
import { AntdModule } from '../antd/antd.module';
import { LayoutRoutingModule } from './layout.routing';

@NgModule({
  declarations: [AuthLayoutComponent, CommonLayoutComponent],
  imports: [CommonModule, SharedModule, AntdModule, LayoutRoutingModule],
})
export class LayoutModule {}
