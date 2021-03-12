import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders = [];
  constructor() { }

  ngOnInit(): void {
  }
onAddOrder(customer, product, quantity) {
  this.orders.push({
    customer: customer.value,
    product: product.value,
    quantity: quantity.value,

  })
}





onSaveOrder() {

}

onFetchOrder() {

}
onDeleteOrder() {

}
}
