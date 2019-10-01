import { Component, OnInit } from '@angular/core';

import { OrdersService } from "../../services/orders.service";

import {Product} from './../../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items:Product[];
  itemsOfOrder:Product[]=[];
  totalOrderCost:number=0;
  breakfastItems:any;

  customerName:string = '';

  arrayOfProducts:object[] = [];
  breakfastBool:boolean = false;
  traditionalBool:boolean = false;

  constructor(private ordersService:OrdersService,) {}

  ngOnInit() {
    this.getProducts();
    this.ordersService. getMenuItemsFromFS().subscribe(itemsComing=>{
      this.items=itemsComing;
    })
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

  //adding and removing products of the kind Product to itemsOrder

  addItem = (item)=>{
    this.itemsOfOrder.push(item);
    this.totalOrderCost += item.price;
    console.log(item.price);
    console.log(this.totalOrderCost);
  }

  
  removeItem = item => {
    let index = this.itemsOfOrder.indexOf(item);
    if (index > -1) {
      this.itemsOfOrder.splice(index, 1);
      this.totalOrderCost -= item.price;
    };
};
  
onSubmit(){
  console.log('is submitting');
  this.ordersService.form.value.itemsOfOrder = this.itemsOfOrder;
  this.ordersService.form.value.status = 'enCocina';
  this.ordersService.form.value.cost = this.totalOrderCost;
  let datta = this.ordersService.form.value;
  
 this.ordersService.createOrder(datta)
     .then(res => {
         console.log('is done');
     });
}

bringOnlyBreakfast(){
  this.breakfastBool = true;
  this.traditionalBool = false;
}

// bringOnlyBreakfast(){
//   this.breakfastBool = true;
//   this.traditionalBool = false;
//   this.breakfastItems = this.ordersService.filterBreakfastItems();
//   console.log('listening to bring only the breakfast type of products');
// }

bringOnlyTraditional(){
  this.traditionalBool = true;
  this.breakfastBool = false;
}

// bringOnlyTraditional(){
//   this.traditionalBool = true;
//   this.breakfastBool = false;
//   this.ordersService.filterTraditionalItems();
//   console.log('listening to bring only the traditional type of products');
// }
}
