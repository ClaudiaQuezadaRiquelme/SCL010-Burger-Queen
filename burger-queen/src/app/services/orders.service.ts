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
}
