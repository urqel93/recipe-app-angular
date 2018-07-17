import {Component, Input} from "@angular/core";
import {RecipeService} from "../../../services/recipe/recipe.service";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'comment-form',
  templateUrl: 'comment.form.component.html',
  styleUrls: ['comment.form.component.scss']
})

export class CommentFormComponent {
  @Input() recipeId: string;
  comment = {
    text: '',
    user: this.userService.user,
    userName: this.userService.user.name,
    avatar: this.userService.user.avatar
  };

  constructor(private recipeService: RecipeService,
              private userService: UserService) {

  }

  onSubmit(form) {
    this.recipeService.commentRecipe(this.comment, this.recipeId).subscribe(res => {
      console.log(res);
      form.reset();
    });
  }

}
