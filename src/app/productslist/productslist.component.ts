import { Component, OnInit } from '@angular/core';
import { Product, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  message: string;
  products: Product[];
  constructor(private myservice: MyserviceService, private router: Router) {
  }
  ngOnInit(): any {
    this.myservice.getProductlist().subscribe(response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response: Product[]){
    this.products =response;
  }
  
  add(p:Product[]) {
    
    
    this.myservice.add(p).subscribe(backendData =>{
      console.log(backendData);
      if(backendData!=null)
        alert("Added successfully")
      else
        alert("add failed")
    });
  }

}
