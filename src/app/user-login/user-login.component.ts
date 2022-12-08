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
        if (response.length==0) {
          alert("invalid mail and password")
          
          
        } else {
          this.login=response;
          this.route.navigate(['/userview'])
        }
      }
    )
  }

}
