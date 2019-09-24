import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../../services/orders.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.getProducts();
  }

  products;

  getProducts = () =>
  this.ordersService.getProductList()
  .subscribe(res => (this.products = res));
}
