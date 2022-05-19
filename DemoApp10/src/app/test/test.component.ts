import { Component, OnInit } from '@angular/core';

import {Student} from '../student'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  public student=new Student(0,"",0,0,0);
  ngOnInit() {
  }
printInput(){
  console.log(this.student);
  console.log(this.student.computeTotal());
}

}
