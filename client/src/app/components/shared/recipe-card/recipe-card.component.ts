import {Component, Input} from "@angular/core";
import {Classes} from "../../../utils/classes";
import Recipe = Classes.Recipe;
import {Router} from "@angular/router";

@Component({
  selector: 'recipe-card',
  templateUrl: 'recipe-card.component.html',
  styleUrls: ['recipe-card.component.scss']

})

export class RecipeCardComponent {
  constructor(private router: Router) {

  }

  @Input() recipe: Recipe;
}
