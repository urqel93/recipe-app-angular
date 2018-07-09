import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from "./components/layout/landing/landing.component";
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [
  {path: '',component: LandingComponent},
  {path: 'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
