import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }
  public myClass="text-success";

  public hasError:boolean=true;
  public isSpecial:boolean=true;

  public messageClasses={
    "text-success":this.hasError,
    "text-danger":!this.hasError,
    "text-special":this.isSpecial
  }

  ngOnInit() {
  }

}
