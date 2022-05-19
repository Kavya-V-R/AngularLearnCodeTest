import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public employees = [];

  addEmployee(employee) {
    this.employees.push(employee);
    console.log(this.employees);
  }

  getAllEmployees() {
    return this.employees
  }

  findEmployee(id) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id == id) {
        return this.employees[i];
      }
    }
    return null;
  }

  deleteEmployee(id) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id == id) {
        this.employees.splice(i, 1);
      }
    }
  }
}
