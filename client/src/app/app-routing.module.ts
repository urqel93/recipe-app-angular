import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from "./components/layout/landing/landing.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {RecipesPage} from "./pages/recipes/all-recipes/recipes.page";
import {RecipeDetailsPage} from "./pages/recipes/recipe-details/recipe.details.page";

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recipes', component: RecipesPage},
  {path: 'recipe/:id', component: RecipeDetailsPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
