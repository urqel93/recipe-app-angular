import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import * as jwt_decode from "node_modules/jwt-decode"
import {API_URL, LOGIN, REGISTER} from "../../utils/routes";
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";

export const TOKEN_NAME: string = 'jwtToken';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private router: Router,
              private userService: UserService) {

  }

  getToken(): string {
    let token = localStorage.getItem(TOKEN_NAME);
    return token ? token : ""
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  login(user): Observable<any> {
    return this.http.post(API_URL + LOGIN, user, {headers: this.headers})
  }

  register(user): Observable<any> {
    return this.http.post(API_URL + REGISTER, user);
  }

  logout() {
    localStorage.removeItem("jwtToken");
    this.router.navigate(['/']);
    this.userService.logoutUser();
  }

}


