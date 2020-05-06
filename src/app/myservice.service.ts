import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
  constructor(private httpService: HttpClient){}

  add(wproducts:Product[]):Observable<Product[]> {
    console.log(wproducts);
    let options ={ headers:{ 'Content-Type': 'application/json'}}
   // let options=new RequestOptions({headers:headers});
   //const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.post<Product[]>("http://localhost:6547/Whishlist/Add",JSON.stringify(wproducts),options);
  }
  getProductlist() {
    console.log("ins service get products");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Product[]>("http://localhost:2002/viewproductlist/viewproducts");
  }
  getWhishlist() {
    console.log("ins service get whishlist");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Product[]>("http://localhost:7896/viewproductlist/view");
  }

  }
export class Product{
  productId: number;
  productName: string;
  productCatogery:string;  
}
