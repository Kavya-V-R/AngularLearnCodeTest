import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private es: EmployeeService) { }

  ngOnInit() {
  }
  delete(id) {
    this.es.deleteEmployee(id);
  }

}
