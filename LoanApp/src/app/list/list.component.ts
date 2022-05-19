import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private ss:LoanService) { }

  public loans=[];

  ngOnInit() {
    this.loans=this.ss.getAllLoans();
  }

}
