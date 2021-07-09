import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { AntdModule } from '../antd/antd.module';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [DashboardComponent, PostComponent, UserComponent],
  imports: [CommonModule, DashboardRoutingModule, AntdModule],
})
export class DashboardModule {}
