import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { PERMISSIONS } from 'src/@types/authorization';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  permissions!: Array<string>;

  constructor(private apollo: Apollo) {}

  hasPermission(authGroup: PERMISSIONS) {
    if (
      this.permissions?.find((permission) => {
        return permission === authGroup;
      })
    ) {
      return true;
    }
    return false;
  }

  initializePermissions() {
    this.permissions = ['VIEW_ONLY', 'UPDATE_FULL', 'CREATE'];
  }

  logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    this.apollo.client.resetStore();
  }
}
