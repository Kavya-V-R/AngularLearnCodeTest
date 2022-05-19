import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private es:EmployeeService) { }
  public empForm=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    salary:new FormControl(0),
    grade:new FormControl('A'),
  });
  ngOnInit() {
  }

  add(){
    console.log(this.empForm.value) ;
    this.es.addEmployee(this.empForm.value)
  }

}
