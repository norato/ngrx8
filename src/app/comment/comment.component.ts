import { Component, OnInit } from '@angular/core';
import { CommentService, Comment } from '../store/comment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments$: Observable<Comment[]>;

  fields = ['postId', 'id', 'name', 'email', 'body'];
  constructor(private readonly commentService: CommentService) {}

  ngOnInit() {
    this.comments$ = this.commentService.getAll();
  }
}
