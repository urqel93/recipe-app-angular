import {Component} from "@angular/core";
import {RecipeService} from "../../../services/recipe/recipe.service";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'recipe-form',
  templateUrl: 'recipe.form.component.html',
  styleUrls: ['recipe.form.component.scss']
})

export class RecipeFormComponent {
  recipe = {
    name: "",
    description: "",
    shortText: "",
    ingredients: "",
    user: this.userService.user,
    userName: this.userService.user.name
  }

  constructor(private recipeService: RecipeService,
              private userService: UserService) {

  }

  onSubmit(form) {
    this.recipeService.addRecipe(this.recipe).subscribe(res => {
        console.log(res)
        form.reset();
      }, e => {
        console.log(e);
      }
    )
  }

}
