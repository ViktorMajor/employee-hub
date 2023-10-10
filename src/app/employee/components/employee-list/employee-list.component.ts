import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../../services/employee.service";
import { Employee } from "../../../model/employee.model";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  searchTerm: string = "";
  employees: Employee[] = [];
  groupedEmployees: { [department: string]: Employee[] } = {};

  getObjectKeys(obj: { [department: string]: Employee[] }): string[] {
    return Object.keys(obj);
}


  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      this.groupedEmployees = this.employeeService.groupByDepartment(this.employees);
    });
  }
  
  getFilteredEmployeesArray(): Employee[] {
    return this.employeeService.getFilteredEmployeesArray(this.groupedEmployees, this.searchTerm);
  }
  
}
