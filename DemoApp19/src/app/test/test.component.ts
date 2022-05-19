import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  @Input("parentData")
  public parentStr;

  @Input("parentData1")
  public parentStr1;

  @Output()
  public childEvent=new EventEmitter();

  @Output()
   public childEvent1=new EventEmitter();
  ngOnInit() {
  }

  execute(){
    this.childEvent.emit("Hello India")
  }

  
  execute1(){
    this.childEvent1.emit("Hello Bengaluru")
  }

}
