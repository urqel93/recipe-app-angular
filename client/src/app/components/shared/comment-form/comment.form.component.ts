import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'comment-form',
  templateUrl: 'comment.form.component.html',
  styleUrls: ['comment.form.component.scss']
})

export class CommentFormComponent {
  @Output() onComment = new EventEmitter<any>();
  commentText: string;

  constructor() {

  }

  onSubmit(form) {
    this.onComment.emit(this.commentText);
    form.reset();
  }

}
