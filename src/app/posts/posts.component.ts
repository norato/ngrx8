import { PostService } from './../store/post/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../store/post/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  loading$: Observable<boolean>;
  readonly fields = ['userId', 'id', 'title', 'body'];

  constructor(private readonly postService: PostService) {
    this.posts$ = this.postService.entities$;
    this.loading$ = this.postService.loading$;
  }

  ngOnInit() {
    this.postService.getWithQuery('userId=1');
  }
}
