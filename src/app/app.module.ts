import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/providers/auth.guard';
import { AuthLayoutComponent } from './layout/auth/auth.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntdModule } from './antd/antd.module';
import { IconModule } from '@ant-design/icons-angular';
import { CommonLayoutComponent } from './layout/common/common.component';
import { GraphQLModule } from './graphql.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntdModule,
    IconModule,
    GraphQLModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [AuthGuard, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
