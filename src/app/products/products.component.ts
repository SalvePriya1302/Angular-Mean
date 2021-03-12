import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public productsService:ProductsService) { }
   dataTitle = 'Title';
   product ={
     name:'',
     stock:'',
     place:''
   } ;
   products = [
    // {
      // product: 'soap',
       //stock: 2,
       //place: 'Mum'

    // },
    // {
     // product: 'wheel',
     // stock: 2,
      //place: 'Mum'

  //  },
    //{
      //product: 'Rin',
      //stock: 2,
      //place: 'Pune'

  //  }

   ]
   ngOnInit(): void {


  }
   onAddProduct(product, stock, place){
    this.products.push({
      product: product.value,
      stock: stock.value,
      place: place.value
    })
   }
   onSaveProduct(product,stock,place){
    /*this.products.push({
      product: product.value,
      stock: stock.value,
      place: place.value
    })*/
    console.log('product '+product);
    this.product.name = product.value
    this.product.stock = stock.value
    this.product.place = place.value
    console.log('product is '+this.product);
     this.productsService.saveProducts(this.product).subscribe(
       (response) => console.log(response),
       (err) => console.log(err)
     )
   }



   onDeleteProduct(id){
    if(confirm('Do you want to delete this Product?'))
    {
      this.products.splice(id,1);
    }
   }


}
