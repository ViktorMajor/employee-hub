import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "src/app/model/employee.model";
import { EmployeeService } from "src/app/services/employee.service";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"],
})
export class EmployeeDetailsComponent implements OnInit {
  //to do pagination

  editingField: string | null = null;
  employee: Employee | undefined;
  public isEditing: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => this.employeeService.getEmployeeById(Number(params.get("id"))))
    ).subscribe(employee => {
      this.employee = employee;
    });
  }
  
  deleteEmployee(): void {
    if (
      this.employee &&
      confirm(`Are you sure you want to delete ${this.employee.name} profile?`)
    ) {
      this.employeeService.deleteEmployeeById(this.employee.id).subscribe(() => {
        console.log("Employee deleted successfully!");
        this.router.navigate(["/employees"]);
      });
    }
  }
  onEditClick() {
    this.isEditing = !this.isEditing
  } 
}
