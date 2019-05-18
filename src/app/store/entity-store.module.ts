import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataService } from '@ngrx/data';
import { CommentService } from './comment/comment.service';

@NgModule({
  declarations: [],
  providers: [CommentService],
  imports: [CommonModule]
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    commentService: CommentService
  ) {
    entityDataService.registerService('Comment', commentService);
  }
}
