import { Component, OnDestroy, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/@types/schema';
import { GET_USERS } from 'src/app/utils/schema';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  users: User[] = [];
  loading = false;

  private querySubscription!: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.querySubscription = this.apollo
      .watchQuery<any>({ query: GET_USERS, variables: { userInfo: {} } })
      .valueChanges.subscribe(({ data, loading }) => {
        this.users = data.users;
        this.loading = loading;
      });
  }
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
