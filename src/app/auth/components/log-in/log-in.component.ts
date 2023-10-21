import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService, User } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"],
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage?: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  logIn() {
    if (this.loginForm.valid) {
      this.userService
        .signIn(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: (user) => {
            this.router.navigate([""]);
            console.log(user.userName);
          },
          error: (errorResponse) => {
            this.errorMessage = "Invalid email or password";
          },
        });
    }
  }
}
