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
    this.arrayOfProducts.push(data);
    console.log('array of products: ',this.arrayOfProducts);
  }

  saveData(event: Event) {
    console.log("saveData ");
    console.log("saveData Type", typeof(this.arrayOfProducts));
    this.ordersService.saveProductsOrders(this.arrayOfProducts, "NOMBRE PROVISORIO");
    
  }
}
