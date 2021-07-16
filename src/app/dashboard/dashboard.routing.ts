import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './post/post.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { UserComponent } from './user/user.component';

const dashboardRoutes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'post',
    component: PostComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
