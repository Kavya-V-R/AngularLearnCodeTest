import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(private es: EmployeeService) { }
  public employee;

  ngOnInit() {
  }
  find(id) {
    this.employee = this.es.findEmployee(id);
  }

}
