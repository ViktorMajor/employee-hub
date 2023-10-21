import { Component } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent {
  public signUpForm: FormGroup;
  public message: string = "";
  correctPass: boolean = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.signUpForm = this.fb.group({
      userName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      passwordAgain: ["", Validators.required],
    });
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get("password")?.value;
    let confirmPass = group.get("passwordAgain")?.value;
    if (confirmPass === pass) {
      this.correctPass = true;
    } else {
      this.correctPass = false;
      alert("The passwords are not the same");
      return;
    }
  }
  public register(): void {
    this.checkPasswords(this.signUpForm);
    if (this.signUpForm.valid && this.correctPass === true) {
      this.userService
        .signUP(
          this.signUpForm.get("userName")?.value,
          this.signUpForm.get("email")?.value,
          this.signUpForm.get("password")?.value
        )
        .subscribe({
          next: (user) => {
            this.message = "Registration successful!";
            this.router.navigate(["auth"]);
          },
          error: (error) => {
            this.message = "Registration failed!";
          },
        });
    }
  }
}
