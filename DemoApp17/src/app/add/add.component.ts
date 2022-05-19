import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private ss:StudentService) { }
    public student = new Student(0,"",0,0,0);
  ngOnInit() {
  }

  add(){
    let student1=new Student(0,"",0,0,0);
    student1.rollNo=this.student.rollNo;
    student1.name=this.student.name;
    student1.marks1=this.student.marks1;
    student1.marks2=this.student.marks2;
    student1.marks3=this.student.marks3;
    this.ss.addStudent(student1)
    console.log(student1) ;
  }
}
