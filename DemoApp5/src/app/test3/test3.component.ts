import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor() { }
  public hasError:boolean=true;
  public isSpecial:boolean=true;
  public highLightColor:string="orange";
  public titleStyles={
    backgroundColor:"green",
    color:"blue",
    fontStyle:"italic"
  }

  ngOnInit() {
  }

}
