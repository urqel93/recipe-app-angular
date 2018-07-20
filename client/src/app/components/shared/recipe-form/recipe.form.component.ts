import {Component, EventEmitter, Output} from "@angular/core";
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

  @Output() addRecipe = new EventEmitter<any>();

  constructor(private recipeService: RecipeService,
              private userService: UserService) {

  }

  onSubmit(form) {
    this.addRecipe.emit(this.recipe);
    form.reset();
  }

}
