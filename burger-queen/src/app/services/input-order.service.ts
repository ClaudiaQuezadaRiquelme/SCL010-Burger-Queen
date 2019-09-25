import { Injectable } from '@angular/core';
import { Client } from './../models/client';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class InputOrderService {

  constructor(private firestore: AngularFirestore) { }

  getProductList () {
    return this.firestore.collection("products").snapshotChanges();
  }

  saveClientName(name:string):void{
    console.log('primero ver si funciona', name);
    
  }

  saveProductsOrders (data: object, customerName: string) {
    console.log(data);
    return this.firestore.collection("orders").add({
      customerName: customerName,
      order: data
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      //te recomiendo guardar el id en caso de que hayan clientes con el mismo nombre
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
}


