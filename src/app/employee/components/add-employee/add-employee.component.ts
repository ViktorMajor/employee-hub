import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeeService } from "src/app/services/employee.service";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"],
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ["", Validators.required],
      gender: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      department: [""],
      image: [""],
      birthDate: [""],
      startDate: [""],
      salary: [""],
      homeOffice: [""],
      education: [""],
      jobTitle: [""]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const newEmployee = this.employeeForm.value;
      const sub = this.employeeService.addEmployee(newEmployee).subscribe(() => {
        this.router.navigate(["/employees"]);
      });
      this.subscriptions.push(sub);
    } else {
      alert('Please fill out the required fields!');
    }
  }
  
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  
}
