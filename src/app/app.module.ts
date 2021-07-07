import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/providers/auth.guard';
import { AuthLayoutComponent } from './layout/auth/auth.component';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
