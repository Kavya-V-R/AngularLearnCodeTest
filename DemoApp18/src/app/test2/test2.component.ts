import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }
  public id;
  public name;
  public marks1;
  public marks2;
  public marks3;
  ngOnInit() {
  }

}
