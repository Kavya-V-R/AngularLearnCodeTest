import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public company:string="Zensar";
  ngOnInit() {
  }

  getValue(){
    return 25;
  }

  public emp={
    "id":1022,
    "name":"Kavya",
    "salary":10000.00
  }

}
