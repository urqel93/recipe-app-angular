import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {
  ADD_RECIPE,
  API_URL,
  COMMENT_RECIPE,
  DELETE_RECIPE,
  GET_RECIPES,
  MY_RECIPES,
  RECIPE_BY_HANDLE
} from "../../utils/routes";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {

  }

  getRecipes(): Observable<any> {
    return this.http.get(API_URL + GET_RECIPES, {headers: this.headers});
  }

  getRecipeDetails(id: string): Observable<any> {
    return this.http.get(API_URL + RECIPE_BY_HANDLE + id, {headers: this.headers});
  }

  getMyRecipes(): Observable<any> {
    return this.http.get(API_URL + MY_RECIPES, {headers: this.headers});
  }

  addRecipe(recipe: any): Observable<any> {
    return this.http.post(API_URL + ADD_RECIPE, recipe, {headers: this.headers});
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete(API_URL + DELETE_RECIPE + id, {headers: this.headers});
  }

  commentRecipe(comment: any, id: string): Observable<any> {
    return this.http.post(API_URL + COMMENT_RECIPE + id, comment, {headers: this.headers});
  }

}
