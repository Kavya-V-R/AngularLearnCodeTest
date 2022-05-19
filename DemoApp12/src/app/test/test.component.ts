import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  public studentForm = new FormGroup({
    rollNoControl: new FormControl(),
    nameControl: new FormControl(),
    marks1Control: new FormControl(0),
    marks2Control: new FormControl(0),
    marks3Control: new FormControl(0),
  });
  ngOnInit() {
  }
  printInput(){
    console.log(this.studentForm.value);
  }

}
