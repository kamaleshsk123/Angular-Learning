import { Component } from '@angular/core';
import { EmployeeDetails } from '../services/employee/employee-details';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employeeform',
  imports: [ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './employeeform.html',
  styleUrl: './employeeform.css',
})
export class Employeeform {
  constructor(private employeeService: EmployeeDetails) {}

  employee = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    department: new FormControl('it', Validators.required),
    salary: new FormControl('', Validators.required),
  });

  onSubmit() {
    const id = this.employeeService.employee.length;
    const updatedData = {
      id: id + 1,
      ...this.employee.value,
    };
    console.log(id);
    console.log(this.employee.value);
    this.employeeService.addEmployee(updatedData);
  }
}
