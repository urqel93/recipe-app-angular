import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {API_URL, GET_RECIPES, RECIPE_BY_HANDLE} from "../../utils/routes";
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


}
