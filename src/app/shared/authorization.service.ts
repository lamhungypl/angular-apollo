import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private apollo: Apollo) {}
  logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    this.apollo.client.resetStore();
  }
}
