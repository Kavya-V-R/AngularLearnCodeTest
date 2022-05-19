import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private rs:RestService,private rb:FormBuilder) { }

  public categoryForm=this.rb.group({
    categoryname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    categorydescription:[]
  });

  public categoryResponse;

  ngOnInit() {
  }

  add(){
    let category={
    name:this.categoryForm.get("categoryname").value,
    description:this.categoryForm.get("categorydescription").value,
    }
    this.rs.addDataToServer(category).subscribe(
      (data)=>{
        this.categoryResponse=data;
        console.log(data)
      }
    )
  }

}
