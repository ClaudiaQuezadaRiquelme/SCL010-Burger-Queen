import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../services/orders.service';
import {OrderModel} from './../../models/orders';
import {Product} from './../../models/products';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {

singleOrder:AngularFirestoreDocument;
productsToSelect:Product[];

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
  }

  bringTheInterestOrder =(dataComing, idComing)=>{
    console.log('Is bringing the interest order');
    this.singleOrder = this.ordersService.bringOneOrder(dataComing, idComing);
    console.log("This is single Order: ", this.singleOrder);
  }

}
