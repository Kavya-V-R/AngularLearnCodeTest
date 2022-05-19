import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  constructor(private fb:FormBuilder) { }
  simpleForm=this.fb.group({
    myrollno:['',Validators.required],
    myname:['Kavya', [Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    mymarks1:['0',[Validators.min(0),Validators.max(100)]],
    mymarks2:['0',[Validators.min(0),Validators.max(100)]],
    mymarks3:['0',[Validators.min(0),Validators.max(100)]]
  }
  )
  ngOnInit() {
  }

}
