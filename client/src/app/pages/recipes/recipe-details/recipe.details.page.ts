import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Classes} from "../../../utils/classes";
import Recipe = Classes.Recipe;
import {RecipeService} from "../../../services/recipe/recipe.service";

@Component({
  selector: 'recipe-details',
  templateUrl: 'recipe.details.page.html',
  styleUrls: ['recipe.details.page.scss']
})

export class RecipeDetailsPage implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private http: HttpClient) {
  }

  recipeId: string;
  recipe: Recipe;

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.getRecipeDetails(this.recipeId);
  }

  getRecipeDetails(id: string) {
    this.recipeService.getRecipeDetails(id).subscribe(res => {
      this.recipe = Recipe.create(res);
      console.log(this.recipe)
    })
  }
}
