import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  //model object
  public personForm = new FormGroup({
    idControl: new FormControl(),
    nameControl: new FormControl(),
    salaryControl: new FormControl(0.0),
    gradeControl: new FormControl('A'),
  });
  ngOnInit() {
  }
  printInput(){
    console.log(this.personForm.value);
  }
}
