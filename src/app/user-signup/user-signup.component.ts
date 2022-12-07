import { Component } from '@angular/core';

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

  readValue=()=>{
    let data :any={"name":this.name,"address":this.address,"phoneno":this.phoneno,"email":this.email,"password":this.password,"confirmpassword":this.confirmpassword}
  console.log(data)
  
  }

}
