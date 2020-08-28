import {Component, OnDestroy, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {User} from '../../models/user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[];
  private subscription = new Subscription();

  constructor(private backend: BackendService) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.backend.getUsers().subscribe(data => this.users = data)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
