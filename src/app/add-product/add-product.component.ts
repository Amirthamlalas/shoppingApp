import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  name=""
  image=""
  category=""
  description=""
  price=""
constructor(private api:ApiService){}
  readValue=()=>{
    let data:any={"name":this.name,"image":this.image,"category":this.category,"description":this.description,"price":this.price}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          alert("Product added successfully")
          
        } else {
          alert("something went wrong")
        }
      }
    )

    
  }
  

}
