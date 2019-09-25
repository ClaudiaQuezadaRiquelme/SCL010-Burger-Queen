import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(  private firestore: AngularFirestore  ) { }

  getProductList () {
    return this.firestore.collection("products").snapshotChanges();
  }

  saveProductsOrders (data: object, customerName: string) {
    console.log(data);
    return this.firestore.collection("orders").add({
      customerName: customerName,
      order: data
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
}
