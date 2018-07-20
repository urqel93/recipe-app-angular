import {Component, OnInit} from "@angular/core";
import {RecipeService} from "../../../services/recipe/recipe.service";
import {Classes} from "../../../utils/classes";
import Recipe = Classes.Recipe;

@Component({
  selector: 'my-recipes-page',
  templateUrl: 'my.recipes.page.html',
  styleUrls: ['my.recipes.page.scss']
})

export class MyRecipesPage implements OnInit {
  recipes: Recipe[] = new Array<Recipe>();

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.getMyRecipes();
  }

  getMyRecipes() {
    this.recipeService.getMyRecipes().subscribe(res => {
      this.recipes = [];
      res.forEach(data => {
        this.recipes.push(Recipe.create(data));
      })
    })
  }

  onDelete(recipeId: string) {
    this.recipeService.deleteRecipe(recipeId).subscribe(res => {
      this.getMyRecipes();
    })
  }

  onAddRecipe(recipe: any) {
    this.recipeService.addRecipe(recipe).subscribe(res => {
        this.getMyRecipes();
      }, e => {
        console.log(e);
      }
    )
  }


}
