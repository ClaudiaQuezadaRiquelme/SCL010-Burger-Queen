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

singleOrder:any;
productsToSelect:Product[];

  constructor(private ordersService:OrdersService, private route:ActivatedRoute, private location:Location) { }

  ngOnInit() {
    this.bringTheInterestOrder();
  }

  bringTheInterestOrder =()=>{
    const id = this.route.snapshot.paramMap.get('id');
    this.ordersService.bringOneOrderV2(id).snapshotChanges().subscribe(
      whatComes=>{this.singleOrder = whatComes.payload.data();
       console.log("whatComes es esto: ", whatComes);
      }
      );
    };
     
  }


