import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './core/providers/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthLayoutComponent } from './layout/auth/auth.component';
import { CommonLayoutComponent } from './layout/common/common.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    // canActivate: [AuthGuard],

    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    component: CommonLayoutComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
