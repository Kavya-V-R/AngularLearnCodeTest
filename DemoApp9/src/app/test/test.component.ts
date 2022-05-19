import { Component, OnInit } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public person=new Person(0,"",0.0,"");
  ngOnInit() {
  }
printInput(){
  console.log(this.person)
}
}
