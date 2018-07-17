import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from "./components/layout/landing/landing.component";
import {NavbarComponent} from "./components/layout/navbar/navbar.component";
import {LoginComponent} from "./pages/login/login.component";
import {FooterComponent} from "./components/layout/footer/footer.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./services/auth/auth-interceptor";
import {FormsModule} from "@angular/forms";
import {RegisterComponent} from "./pages/register/register.component";
import {RecipeCardComponent} from "./components/shared/recipe-card/recipe-card.component";
import {RecipesPage} from "./pages/recipes/all-recipes/recipes.page";
import {RecipeDetailsPage} from "./pages/recipes/recipe-details/recipe.details.page";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    RecipeCardComponent,
    RecipesPage,
    RecipeDetailsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
