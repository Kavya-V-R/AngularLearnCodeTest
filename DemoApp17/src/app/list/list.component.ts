import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private ss:StudentService) { }

  public students=[];

  ngOnInit() {
    this.students=this.ss.getAllStudents();
  }
}
