import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(private ss: LoanService) { }

  ngOnInit() {
  }
  remove(rollNo) {
    this.ss.removeLoan(rollNo);
  }

}
