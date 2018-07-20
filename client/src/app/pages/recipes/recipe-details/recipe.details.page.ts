import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Classes} from "../../../utils/classes";
import {RecipeService} from "../../../services/recipe/recipe.service";
import {UserService} from "../../../services/user/user.service";
import Recipe = Classes.Recipe;

@Component({
  selector: 'recipe-details',
  templateUrl: 'recipe.details.page.html',
  styleUrls: ['recipe.details.page.scss']
})

export class RecipeDetailsPage implements OnInit {
  comment = {
    text: '',
    user: this.userService.user,
    userName: this.userService.user.name,
    avatar: this.userService.user.avatar
  };

  constructor(private router: Router,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              public userService: UserService) {
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

  onComment(comment: any) {
    this.comment.text = comment;
    this.recipeService.commentRecipe(this.comment, this.recipeId).subscribe(res => {
      console.log(res);
      this.getRecipeDetails(this.recipeId);
    });
  }
}
