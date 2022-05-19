import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private ss: StudentService) { }

  ngOnInit() {
  }
  delete(rollNo) {
    this.ss.deleteStudent(rollNo);
  }

}
