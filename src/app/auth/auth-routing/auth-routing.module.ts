import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AuthPageComponent } from "../components/auth-page/auth-page.component";
import { LogInComponent } from "../components/log-in/log-in.component";
import { SignUpComponent } from "../components/sign-up/sign-up.component";
import { ProfileComponent } from "../components/profile/profile.component";

const routes: Routes = [
  { path: "", component: AuthPageComponent },
  { path: "login", component: LogInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "profile", component: ProfileComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
