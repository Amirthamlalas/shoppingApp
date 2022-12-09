import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email=""
  password=""
  login:any=[]
constructor(private api:ApiService,private route:Router){}
  readValue=()=>{
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    this.api.userLogin(data).subscribe(
      (response:any)=>{
        if (response.status=="success") {
         let userid=response.userid
         console.log(userid)
         this.login=response;
         localStorage.setItem("userinfo",userid)
          this.route.navigate(['/viewprofile'])
          
        } else {
          
          
        }
      }
    )
  }

}
