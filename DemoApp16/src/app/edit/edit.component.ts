import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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

  public student;
  edit(){
    this.student=this.ss.findStudent(this.studentForm.get('rollNo').value);
    this.studentForm.setValue({
      rollNo:this.student.rollNo,
      name:this.student.name,
      marks1:this.student.marks1,
      marks2:this.student.marks2,
      marks3:this.student.marks3
    })
  }
  update(){
    console.log(this.studentForm.value);
    this.ss.update(this.studentForm.value);
  }
}
