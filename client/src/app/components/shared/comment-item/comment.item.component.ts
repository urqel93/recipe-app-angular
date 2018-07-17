import {Component, Input} from "@angular/core";
import {Classes} from "../../../utils/classes";
import Comment = Classes.Comment;

@Component({
  selector: 'comment-item',
  templateUrl: 'comment.item.component.html',
  styleUrls: ['comment.item.component.scss']
})

export class CommentItemComponent{

  @Input() comment: Comment;
  constructor(){
  }
}
