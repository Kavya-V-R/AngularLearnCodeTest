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

  ngOnInit() {
  }

  public student;
  edit(rollNo){
    this.student=this.ss.findStudent(rollNo);
  }
  update(){
    console.log(this.student);
    this.ss.update(this.student);
  }
}
