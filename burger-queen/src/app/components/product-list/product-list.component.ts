import { Component, OnInit } from '@angular/core';

import { OrdersService } from "../../services/orders.service";

import {Product} from './../../models/products';

// import undefined = require('firebase/empty-import');

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
  newBurgerType:string = '';
  burgerItem:Product ={
    name: '',
    menu: '',
    price: 0,
    type: ''
  };
  showKindOfBurger:boolean = false;

  arrayOfProducts:object[] = [];
  breakfastBool:boolean = false;
  traditionalBool:boolean = false;

  constructor(private ordersService:OrdersService,) {}

  ngOnInit() {
    // this.getProducts();
    this.ordersService. getMenuItemsFromFS().subscribe(itemsComing=>{
      this.items=itemsComing;
    })
  }

  products;
  breakfast:object[] = [];
  traditional:object[] = [];


  pushProduct(event: Event, data) {
    this.arrayOfProducts.push(data);
    //console.log('array of products: ',this.arrayOfProducts);
  }

  saveData(event: Event) {
    //console.log("saveData ");
    this.ordersService.saveProductsOrders(this.arrayOfProducts, this.customerName);
    
  }

  //adding and removing products of the kind Product to itemsOrder

  changeKindOfBurger = (kindOfBurger:string) => {
    let burggger:Product = {
      menu: this.burgerItem.menu,
      name: this.burgerItem.name,
      price: this.burgerItem.price,
      type: kindOfBurger
    }
    this.showKindOfBurger = false;
    this.burgerItem.type = kindOfBurger;
    this.addItem(burggger);//si pongo this.addItem(this.burgerItem), cada vez que agregue una hamburguesa con un tipo distinto, todas las hamburguesas cambiarán su tipo. Ejemplo: si elijo una beef y después una veg, ambas hamburguesas serán veg. Si elijo una beef, una veg y una chicken, las 3 hamburguesas serán chicken
  }

  addItem = (item)=>{

    if (item.name === 'Hamburguesa Simple'||item.name === 'Hamburguesa Doble') {
      if (item.type === 'Burger') {
        console.log('if primero');
        this.showKindOfBurger = true;
        //si pongo this.burgerItem = item, sólo podemos elegir una hamburguesa Simple y una Doble por pedido y no nos permitirá elegir el tipo [veg,beef,chicken] nunca más. Esto es porque el ngFor corre sólo una vez.
        this.burgerItem.menu = item.menu;
        this.burgerItem.name = item.name;
        this.burgerItem.price = item.price;
        this.burgerItem.type = item.type;
        console.log('this.burgerItem: ', this.burgerItem);
  
      } else if (this.burgerItem.type === 'chicken'||this.burgerItem.type === 'beef'||this.burgerItem.type === 'veg') {//este primero
        console.log('if segundo');
        
        this.itemsOfOrder.push(item);
        this.totalOrderCost += item.price;
        console.log(item.price);
        console.log(this.totalOrderCost);
  
      }
    } else {
      console.log('if por defecto');
      this.itemsOfOrder.push(item);
      this.totalOrderCost += item.price;
      console.log(item.price);
      console.log(this.totalOrderCost);
    }
    
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
  this.ordersService.setOrderInitialTime();
}

bringOnlyBreakfast(){
  this.breakfastBool = true;
  this.traditionalBool = false;
}


bringOnlyTraditional(){
  this.traditionalBool = true;
  this.breakfastBool = false;
}


calculateTimeElapsed(){
  this.ordersService.getDeliveredOrderTime;
  console.log(this.ordersService.getOrderTimeElapsed());
}
}
