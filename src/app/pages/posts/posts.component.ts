import {Component, OnDestroy, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Post} from '../../models/post';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: Post[];
  private subscription = new Subscription();

  constructor(private backend: BackendService) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.backend.getPosts().subscribe(data => this.posts = data)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
