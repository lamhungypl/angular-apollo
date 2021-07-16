import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableIfUnauthorizedDirective } from './directives/disable-if-unauthorized.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DisableIfUnauthorizedDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [DisableIfUnauthorizedDirective],
})
export class SharedModule {}
