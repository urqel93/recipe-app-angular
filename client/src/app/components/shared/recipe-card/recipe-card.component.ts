import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Classes} from "../../../utils/classes";
import Recipe = Classes.Recipe;
import {Router} from "@angular/router";
import {RecipeService} from "../../../services/recipe/recipe.service";

@Component({
  selector: 'recipe-card',
  templateUrl: 'recipe-card.component.html',
  styleUrls: ['recipe-card.component.scss']

})

export class RecipeCardComponent {
  constructor(private router: Router,
              private recipeService: RecipeService) {

  }

  @Input() recipe: Recipe;
  @Input() deleteVisible: boolean = false;
  @Output() delete = new EventEmitter<string>();

  deleteRecipe() {
    this.delete.emit(this.recipe.id);
  }
}
