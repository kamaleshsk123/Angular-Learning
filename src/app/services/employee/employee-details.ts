import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetails {
  employee: any[] = [
    { id: 1, name: 'John', department: 'IT', email: 'john@gmail.com', salary: 50000 },
    { id: 2, name: 'David', department: 'HR', email: 'david@gmail.com', salary: 55000 },
  ];

  getEmployeeDetails() {
    return this.employee;
  }

  addEmployee(data: any) {
    this.employee.push(data);
    console.log(this.employee);
  }
}
