import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmployeeService } from "src/app/services/employee.service";
import { ActivatedRoute } from "@angular/router";
import { Employee } from "src/app/model/employee.model";
import { switchMap } from "rxjs/operators";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.css"],
})

export class EditEmployeeComponent {
  @Output() editFinished = new EventEmitter<void>();
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.editEmployeeForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      birthDate: ["", Validators.required],
      education: ["", Validators.required],
      department: ["", Validators.required],
      jobTitle: ["", Validators.required],
      salary: ["", Validators.required],
      homeOffice: ["", Validators.required],
      startDate: ["", Validators.required],
    });
  }

  employee: Employee | undefined;
  editEmployeeForm: FormGroup;
  public isEditing: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) =>
          this.employeeService.getEmployeeById(Number(params.get("id")))
        )
      )
      .subscribe((employee) => {
        this.employee = employee;
        this.initializeForm();
      });
  }

  private initializeForm(): void {
    this.editEmployeeForm.setValue({
      name: this.employee?.name,
      email: this.employee?.email,
      phone: this.employee?.phone,
      birthDate: this.employee?.birthDate,
      education: this.employee?.education,
      department: this.employee?.department,
      jobTitle: this.employee?.jobTitle,
      salary: this.employee?.salary,
      homeOffice: this.employee?.homeOffice,
      startDate: this.employee?.startDate,
    });
  }

  onSave() {
    if (this.employee && this.editEmployeeForm.valid) {
      const formValues = this.editEmployeeForm.value;
      this.employee.name = formValues.name;
      this.employee.email = formValues.email;
      this.employee.phone = formValues.phone;
      this.employee.birthDate = formValues.birthDate;
      this.employee.education = formValues.education;
      this.employee.department = formValues.department;
      this.employee.jobTitle = formValues.jobTitle;
      this.employee.salary = formValues.salary;
      this.employee.homeOffice = formValues.homeOffice;
      this.employee.startDate = formValues.startDate;
  
      this.employeeService.updateEmployee(this.employee).subscribe(() => {
      });
      this.editFinished.emit();

    }
  }
  
}
