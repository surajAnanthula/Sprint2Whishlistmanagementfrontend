import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
  constructor(private httpService: HttpClient){}

  add(p:Product[]) {
    console.log(p);

    let options ={ headers:{ 'Content-Type': 'application/json;charset=utf-8'}}
    var whishlist:Whishlist =new Whishlist(p.productId,p.productName,p.productCatogery,123);
    console.log(whishlist)
   // let options=new RequestOptions({headers:headers});
   //const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.post<Whishlist[]>("http://localhost:6547/Whishlist/Add",JSON.stringify(whishlist),options);
  }
  getProductlist() {
    console.log("ins service get products");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Product[]>("http://localhost:2002/viewproductlist/viewproducts");
  }
  getWhishlist(userId) {
    console.log("ins service get whishlist");
    console.log(userId);
    //let option ={ headers:{ 'Content-Type': 'application/json;charset=utf-8'}}
   
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Whishlist[]>("http://localhost:7896/viewproductlist/view/"+userId);
  }

  }
export class Product{
  productId: number;
  productName: string;
  productCatogery:string;  
}

export class Whishlist{
  productId: number;
  productName: string;
  productCatogery:string;  
  userId:number;
  constructor(productId: number,productCatogery: string,productName: string,userId: number)
  {
    this.productId = productId;
		this.productCatogery = productCatogery;
		this.productName = productName;
		this.userId = userId;
  }
}