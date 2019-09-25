import { Component, OnInit, EventEmitter } from '@angular/core';
import { OrdersService } from "../../services/orders.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  arrayOfProducts:object[] = [];

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.getProducts();
  }

  products;

  getProducts = () =>
  this.ordersService.getProductList()
  .subscribe(res => (this.products = res));

  handleClick(event: Event, data) {
    console.log('Click mouse!', data);
    console.log(data.name);
    this.arrayOfProducts.push(data);
    console.log('array of products:');
    
    console.log(this.arrayOfProducts);
    
  }
}
