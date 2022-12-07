import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  name=""
  address=""
  phoneno=""
  email=""
  password=""
  confirmpassword=""
constructor(private api:ApiService){}
  readValue=()=>{
    let data :any={"name":this.name,"address":this.address,"phoneno":this.phoneno,"email":this.email,"password":this.password,"confirmpassword":this.confirmpassword}
  console.log(data)
this.api.userSignup(data).subscribe(
  (response:any)=>{
    if (response.status=="success") {
      alert("user added successfully")
      
    } else {
      alert("something went wrong")
    }
  }
)
  
  }

}
