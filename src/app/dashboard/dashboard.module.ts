import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

import { PostComponent } from './post/post.component';
import { AntdModule } from '../antd/antd.module';

@NgModule({
  declarations: [DashboardComponent, PostComponent],
  imports: [CommonModule, DashboardRoutingModule, AntdModule],
})
export class DashboardModule {}
