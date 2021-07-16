import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user.component';

const userRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: UserComponent,
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
