import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { IAdvertise } from './advertise';
import { ICategory } from './Category';
import {IPost} from './Post'

@Injectable({
  providedIn: 'root'
})
export class RestService {
private url:string="http://localhost:9052/advertise/category";
private url2:string="http://localhost:9052/advertise/addCategory";
private url3:string="http://localhost:9052/advertise/getCategoryById";
private url4:string="http://localhost:9053/user/advertise";
private url5:string="http://localhost:9053/user/advertiseById";



  constructor(private http:HttpClient) { }

  getDataFromServer():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.url);
  }

  addDataToServer(data : any):Observable<ICategory>{
    return this.http.post<ICategory>(this.url2,data);
  }
  

  getDataFromServerById(id : any):Observable<ICategory>{
    return this.http.get<ICategory>(this.url3+"/"+id);
  }

  getDataFromServerByUserName(username : any):Observable<IAdvertise[]>{
    return this.http.get<IAdvertise[]>(this.url4+"/"+username);
  }

  getDataFromServerAdById(id : any):Observable<IAdvertise[]>{
    return this.http.get<IAdvertise[]>(this.url5+"/"+id);
  }
}
