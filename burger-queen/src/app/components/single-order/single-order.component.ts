import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../services/orders.service';
import {OrderModel} from './../../models/orders';
import {Product} from './../../models/products';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
loadingStatus:boolean = false;
singleOrder:any;
productsToSelect:Product[];
editing:boolean=false;
editingForm = this.ordersService.form;
newOrderItems:Product[]=[];
breakfastBool:boolean = false;
traditionalBool:boolean = false;
itemsOfOrder:Product[];
items:Product[];
product:Product;
producToReplaceName:string;
currentId:string;

  constructor(private ordersService:OrdersService, private route:ActivatedRoute, private location:Location) { 
    
  }

  ngOnInit() {
    this.bringTheInterestOrder();
    this.ordersService. getMenuItemsFromFS().subscribe(itemsComing=>{
      this.items=itemsComing;
    })
  }

  bringTheInterestOrder =()=>{
    this.currentId = this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id');
    this.ordersService.bringOneOrderV2(id).snapshotChanges().subscribe(
      whatComes=>{this.singleOrder = whatComes.payload.data();
        this.itemsOfOrder = this.singleOrder.itemsOfOrder;
        console.log('this is items of order', this.itemsOfOrder);
      this.loadingStatus= true;
       console.log("whatComes es esto: ", whatComes);
       console.log("this.singleOrder es esto: ", this.singleOrder);
      }
      );
    }

    

    enterOrderEdition = (productNameThatComes:string)=>{
      this.editing = true;
      this.producToReplaceName = productNameThatComes;
      console.log('este es el nombre de producto que se trae:', this.producToReplaceName);
    }

    replaceItem(item){
     let collectionOfProducts = this.singleOrder.itemsOfOrder;
     let element:any;
     let prodName:any = this.producToReplaceName;
     for (element of collectionOfProducts){
       if(element.name == prodName){
        const data = item;
        this.ordersService.updateOrder(this.currentId, data);
       }
     }
    console.log('this is the new itemsOfOrder', this.singleOrder.itemsOfOrder);
    console.log('this is item', item);
    }

    removeItem(item){
      let collectionOfProducts = this.singleOrder.itemsOfOrder;
      let element:any;
      let prodName:any = this.producToReplaceName;
      for (element of collectionOfProducts){
        if(element.name == prodName){
         const data = item;
         this.ordersService.deleteItemInOrder(this.currentId, data);
        }
      }
    }


     
    bringOnlyBreakfast(){
      this.breakfastBool = true;
      this.traditionalBool = false;
      console.log('changing to bringOnlyBreakfast')
    }

    bringOnlyTraditional(){
      this.breakfastBool = false;
      this.traditionalBool = true;
      console.log('changing to bringOnlyTraditional');

    }

    onSubmit(){
      console.log("is submitting");
    }
  }


