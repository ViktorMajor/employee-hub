import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing-module';

@NgModule({
    declarations: [EmployeeListComponent, EmployeeDetailsComponent, AddEmployeeComponent],
    imports: [FormsModule, CommonModule, EmployeeRoutingModule, RouterModule, ReactiveFormsModule],
})
export class EmployeeModule {}
