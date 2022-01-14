import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: any;
  products2: Product[];


  constructor(public productsService:ProductsService) {

  }


  ngOnInit(): void {
   /* this.productsService.getProducts().subscribe((res)=>{
      this.products = res;
      this.products= JSON.stringify(this.products);
      this.products = JSON.parse(this.products);
      console.log('products are 2 '+JSON.stringify(this.products));
      console.log('product ' +typeof this.products);
    });
          */



      console.log('productlist init');
      this.productsService.getProducts().subscribe((res)=>{
        this.products = res;
        console.log("Priya development");
        //console.log('type of res '+typeof res + JSON.stringify(res));
        this.products = JSON.stringify(this.products);
        this.products2 = JSON.parse(this.products).product;
        console.log('type of products2 '+typeof this.products2 +JSON.stringify(this.products2) );
        this.products2.forEach((product)=>{
          console.log(' '+product.product+' '+product.instock+' '+product.warehouse)
        })

        //this.products = JSON.parse(this.products);
       // console.log('products are 2 '+ JSON.parse(this.products));
      //  console.log('product ' + typeof this.products);
      });
    }


      onDeleteProduct(id) {
    this.productsService.deleteProducts(id).subscribe(() => {
      this.productsService.getProducts()

    });



     }

}
