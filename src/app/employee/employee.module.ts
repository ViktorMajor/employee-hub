import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing-module';
import { EditEmployeeComponent } from './components/employee-details/edit-employee/edit-employee.component';

@NgModule({
    declarations: [EmployeeListComponent, EmployeeDetailsComponent, AddEmployeeComponent, EditEmployeeComponent],
    imports: [FormsModule, CommonModule, EmployeeRoutingModule, RouterModule, ReactiveFormsModule],
})
export class EmployeeModule {}
