import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL, CURRENT_USER} from "../../utils/routes";
import {Observable} from "rxjs/internal/Observable";
import {Classes} from "../../utils/classes";
import User = Classes.User;

@Injectable({
  providedIn: 'root'
})

export class UserService {
  headers = new HttpHeaders({'Content-Type': 'application/json'});
  user: User = new User();

  constructor(private http: HttpClient) {
    this.getCurrentUser()
  }

  setCurrentUser(u: User) {
    this.user = User.create(u);
    localStorage.setItem('currentUser', JSON.stringify(this.user));

  }

  getCurrentUser(): User {
    let ls =localStorage.getItem('currentUser');
    return this.user = ls ? this.user = JSON.parse(ls) : null;
  }

  currentUser(): Observable<any> {
    return this.http.get(API_URL + CURRENT_USER, {headers: this.headers});
  }

  logoutUser() {
    localStorage.removeItem('currentUser');
    this.user = null;
  }
}
