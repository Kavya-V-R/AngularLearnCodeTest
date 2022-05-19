import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public name="Zensar Tech";
  public person={
    first_name:"kavya",
    last_name:"VR",
    age:60
  };

  public today=new Date();
  ngOnInit() {
  }

}
