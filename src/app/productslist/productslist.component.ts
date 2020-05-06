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
  wproducts: Product[];

  constructor(private myservice: MyserviceService, private router: Router) {
  }
  ngOnInit(): any {
    this.myservice.getProductlist().subscribe(response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response: Product[]){
    this.products =response;
  }
  
  add(p) {
    console.log(p)
    this.wproducts=[{
      productId:p.productId,
      productCatogery:p.productCatogery,
      productName:p.productName
    }];
    console.log(this.wproducts)
    this.myservice.add(this.wproducts).subscribe((result)=>{
      if(result!=null)
        alert("Added successfully");
      else
        alert("add failed");
    });
  }

}
