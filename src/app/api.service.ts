import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchCourse=()=>{
    return this.http.get("http://localhost:8080/view")
  }

  addCourse=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",DataToSend)
  }

  searchCourse=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/search",DataToSend)
  }
}
