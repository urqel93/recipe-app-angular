import {Component} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    email: "",
    password: ""
  };
  errormsg = {};

  constructor(private auth: AuthService,
              private router: Router,
              private userService: UserService) {
  }

  onSubmit(form: any) {
    this.auth.login(this.user).subscribe(res => {
      this.auth.setToken(res.token);
      this.router.navigateByUrl('/');
      this.userService.currentUser().subscribe(
        res => {
          this.userService.setCurrentUser(res);
        }
      )

    }, e => {
      console.log(e);
      this.errormsg = e.error;
    });
  }
}
