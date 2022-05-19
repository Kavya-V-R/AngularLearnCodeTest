import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(private ss: StudentService) { }
  public student;

  ngOnInit() {
  }
  find(rollNo) {
    this.student = this.ss.findStudent(rollNo);
  }
}
