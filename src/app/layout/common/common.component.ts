import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthorizationService } from 'src/app/shared/authorization.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonLayoutComponent implements OnInit {
  isCollapsed = false;

  constructor(
    private modal: NzModalService,
    private router: Router,
    private auth: AuthorizationService
  ) {}

  ngOnInit(): void {}

  showModal(): void {
    this.modal.confirm({
      nzTitle: 'Do you want to log out ??',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzCancelText: 'No',

      nzOnOk: () => {
        this.auth.logout();
        this.router.navigate(['/auth/login']);
      },
    });
  }
}
