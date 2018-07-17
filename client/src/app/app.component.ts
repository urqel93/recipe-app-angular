import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth/auth.service";
import {Classes} from "./utils/classes";
import Recipe = Classes.Recipe;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    console.log(this.auth.getTokenExpirationDate(localStorage.getItem('jwtToken')));
  }

}
