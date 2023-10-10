import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeRoutingModule } from "./employee-routing-module";
import { EmployeeDetailsComponent } from "./components/employee-details/employee-details.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent
  ],
  imports: [
    FormsModule,
    CommonModule, 
    EmployeeRoutingModule, 
    ReactiveFormsModule
]
})
export class EmployeeModule {}
