import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor(private ss: StudentService) { }
  public studentForm = new FormGroup({
    rollNo: new FormControl(),
    name: new FormControl(),
    marks1: new FormControl(0),
    marks2: new FormControl(0),
    marks3: new FormControl(0),
  });
  ngOnInit() {
  }

  add() {
    console.log(this.studentForm.value);
    this.ss.addStudent(this.studentForm.value)
  }

}

