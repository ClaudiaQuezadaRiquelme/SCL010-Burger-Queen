import { Component, OnInit } from '@angular/core';

import { OrdersService } from "../../services/orders.service";
import { InputOrderService } from "../../services/input-order.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  customerName:string = '';

  arrayOfProducts:object[] = [];
  breakfastBool:boolean = false;

  constructor(
    private ordersService:OrdersService,
    private inputOrderService: InputOrderService
    ) {
       this.customerName = this.inputOrderService.getClientName();
       //console.log('this.customerName : ', this.customerName);
     }

  ngOnInit() {
    this.getProducts();
  }

  products;
  breakfast:object[] = [];
  traditional:object[] = [];

  getProducts = () =>
  this.ordersService.getProductList()
  .subscribe(res => {
    this.products = res;
    //console.log("this.products[0]", this.products[0].payload.doc.data());
    for (let i=0; i<this.products.length; i++) {
      if (this.products[i].payload.doc.data().menu == "Breakfast") {
        this.breakfast.push(this.products[i].payload.doc.data());
        //console.log("breakfast: ", this.breakfast);
        
      } else {
        this.traditional.push(this.products[i].payload.doc.data());
        //console.log("traditional: ", this.traditional);
        
      }
    }
    
  })

  showBreakfastMenu(event: Event) {
    //console.log('breakfast : ',this.breakfast);
    this.breakfastBool = true;
  }

  showTraditionalMenu(event: Event) {
    //console.log('traditional : ',this.traditional);
    this.breakfastBool = false;
  }

  pushProduct(event: Event, data) {
    this.arrayOfProducts.push(data);
    //console.log('array of products: ',this.arrayOfProducts);
  }

  saveData(event: Event) {
    //console.log("saveData ");
    this.ordersService.saveProductsOrders(this.arrayOfProducts, this.customerName);
    
  }
}
