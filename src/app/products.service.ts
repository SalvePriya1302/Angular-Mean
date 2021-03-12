import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 // url = 'https://angular-382fe-default-rtdb.firebaseio.com/products.json';
 url = 'http://localhost:3000/api/products';
  constructor(private http:HttpClient) { }

  products: Product[] = [];

  saveProducts(products: any) {
    console.log('products are '+JSON.stringify(products));
   //return this.http.post(this.url, products)
   return this.http.post(this.url, products)
  }

  getProducts(){
   return this.http.get
    (this.url);


  }

  deleteProducts(id) {
    return this.http.delete(this.url + id );
  }
}
