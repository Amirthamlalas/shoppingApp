import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchProduct=()=>{
    return this.http.get("http://localhost:8080/view")
  }

  addProduct=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",DataToSend)
  }

  searchProduct=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/search",DataToSend)
  }

  userSignup=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/signup",DataToSend)
  }

  userLogin=(DataToSend:any)=>{
    return this.http.post("http://localhost:8080/login",DataToSend)
  }

  
}
