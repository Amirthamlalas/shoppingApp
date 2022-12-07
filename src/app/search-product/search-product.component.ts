import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {

  name=""
  search:any=[]
constructor(private api:ApiService){}
  readValue=()=>{
    let data:any={"name":this.name}
    console.log(data)
    this.api.searchProduct(data).subscribe(
      (response:any)=>{
        if (response.length==0) {
          alert("Invalid Product Name")
          
        } else {
          this.search=response;
          
        }
      }
    )
  }

}
