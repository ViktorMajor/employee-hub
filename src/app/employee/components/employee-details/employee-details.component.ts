import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "src/app/model/employee.model";
import { EmployeeService } from "src/app/services/employee.service";
import { switchMap } from "rxjs/operators";
import { Subscription } from "rxjs";

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
  private detailsSubscription!: Subscription;
  private deleteSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.detailsSubscription = this.activatedRoute.paramMap
      .pipe(
        switchMap((params) =>
          this.employeeService.getEmployeeById(Number(params.get("id")))
        )
      )
      .subscribe((employee) => {
        this.employee = employee;
      });
  }

  deleteEmployee(): void {
    if (
      this.employee &&
      confirm(`Are you sure you want to delete ${this.employee.name} profile?`)
    ) {
      this.deleteSubscription = this.employeeService
        .deleteEmployeeById(this.employee.id)
        .subscribe(() => {
          console.log("Employee deleted successfully!");
          this.router.navigate(["/employees"]);
        });
    }
  }
  onEditClick() {
    this.isEditing = !this.isEditing;
  }

  ngOnDestroy() {
    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
    if (this.detailsSubscription) {
      this.detailsSubscription.unsubscribe();
    }
  }
}
