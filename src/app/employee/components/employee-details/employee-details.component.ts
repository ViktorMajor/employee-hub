import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Employee } from "src/app/model/employee.model";
import { EmployeeService } from "src/app/services/employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"],
})
export class EmployeeDetailsComponent implements OnInit {
  //to do pagination

  editingField: string | null = null;

  employee: Employee | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.employeeService
        .getEmployeeById(Number(params.get("id")))
        .subscribe((employee) => {
          this.employee = employee;
        });
    });
  }
  deleteEmployee(): void {
    if (
      this.employee &&
      confirm(`Are you sure you want to delete ${this.employee.name} profile?`)
    )
      this.employeeService
        .deleteEmployeeById(this.employee.id)
        .subscribe(() => {
          console.log("Employee deleted successfully!");
          this.router.navigate(["/employees"]);
        });
  }

  startEditing(field: string): void {
    this.editingField = field;
  }
  stopEditing(): void {
    this.editingField = null;
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee).subscribe(() => {
        console.log("Employee updated successfully!");
      });
    }
  }
}
