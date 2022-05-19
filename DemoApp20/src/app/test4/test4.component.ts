import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  constructor(private rs:RestService) { }

  public Advertise=[];

  find(id){
    this.rs.getDataFromServerAdById(id).subscribe((data)=>{
      console.log(data);
      this.Advertise=data;
    })
  }
  ngOnInit() {
  }

}
