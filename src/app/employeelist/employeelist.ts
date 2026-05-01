import { Component } from '@angular/core';
import { EmployeeDetails } from '../services/employee/employee-details';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  imports: [CommonModule, RouterModule],
  templateUrl: './employeelist.html',
  styleUrl: './employeelist.css',
})
export class Employeelist {
  employee: any[] = [];
  constructor(private employeeService: EmployeeDetails) {
    this.employee = this.employeeService.getEmployeeDetails();
  }
}
