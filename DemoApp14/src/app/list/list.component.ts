import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private es:EmployeeService) { }

  public employees=[];

  ngOnInit() {
    this.employees=this.es.getAllEmployees();
  }

}
