import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  name=""
  search:any=[]
  constructor(private api:ApiService){

    api.fetchProduct().subscribe(
      (response)=>{
        this.search=response;
      }
    )
  }
  readValue=()=>{
    let data:any={"name":this.name}
    this.api.searchProduct(data).subscribe(
      (response:any)=>{
        this.search=response;
      }
    )

  }
data:any=[]
}
