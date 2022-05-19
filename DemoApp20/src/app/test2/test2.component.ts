import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(private rs:RestService) { }

  public category;

  find(id){
    this.rs.getDataFromServerById(id).subscribe((data)=>{
      console.log(data);
      this.category={
        id:data.id,
        name:data.name,
        description:data.description
      }
    })
  }
  ngOnInit() {
  }
}
