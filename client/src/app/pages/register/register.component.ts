import {Component} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'register-panel',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})

export class RegisterComponent {

  user = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };
  errormsg = {};

  constructor(private router: Router,
              private auth: AuthService) {

  }

  onSubmit() {
    this.auth.register(this.user).subscribe(res =>
      this.router.navigateByUrl('/login'))
  }

}
