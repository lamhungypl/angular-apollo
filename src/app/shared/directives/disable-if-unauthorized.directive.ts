import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { PERMISSIONS } from 'src/@types/authorization';
import { AuthorizationService } from '../services/authorization.service';

@Directive({
  selector: '[appDisableIfUnauthorized]',
})
export class DisableIfUnauthorizedDirective implements OnInit {
  @Input('appDisableIfUnauthorized') permission!: PERMISSIONS;

  constructor(
    private el: ElementRef,
    private authService: AuthorizationService
  ) {}
  ngOnInit(): void {
    if (!this.authService.hasPermission(this.permission)) {
      this.el.nativeElement.disabled = true;
    }
  }
}
