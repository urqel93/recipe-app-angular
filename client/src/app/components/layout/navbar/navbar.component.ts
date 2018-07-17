import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService,
              private auth: AuthService) {

  }

  ngOnInit() {

  }

  logout() {
    this.auth.logout();
  }


}
