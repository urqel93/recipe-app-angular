import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../../../services/recipe/recipe.service";
import {Classes} from "../../../utils/classes";
import Recipe = Classes.Recipe;

@Component({
  selector: 'recipes-page',
  templateUrl: 'recipes.page.html',
  styleUrls: ['recipes.page.scss']
})

export class RecipesPage implements OnInit {

  recipes: Recipe[] = new Array<Recipe>();

  constructor(private http: HttpClient,
              private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(res => {
      res.forEach(data => {
        this.recipes.push(Recipe.create(data));
      })
    })
  }

}
