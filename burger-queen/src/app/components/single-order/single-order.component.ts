import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../services/orders.service';
import { OrderModel } from './../../models/orders';
import { Product } from './../../models/products';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
  loadingStatus = false;
  singleOrder: any;
  productsToSelect: Product[];
  editing = false;
  editingForm = this.ordersService.form;
  newOrderItems: Product[] = [];
  breakfastBool = false;
  traditionalBool = false;
  itemsOfOrder: Product[];
  items: Product[];
  product: Product;
  producToReplaceName: string;
  currentId: string;
  totalOrderCost: number;

  showKindOfBurger = false;
  newBurgerType = '';
  burgerItem: Product = {
    name: '',
    menu: '',
    price: 0,
    type: ''
  };



  constructor(public ordersService: OrdersService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit() {
    this.bringTheInterestOrder();
    this.ordersService.getMenuItemsFromFS().subscribe(itemsComing => {
      this.items = itemsComing;
    });
  }

  changeKindOfBurger(kindOfBurger: string) {
    const burger: Product = {
      menu: this.burgerItem.menu,
      name: this.burgerItem.name,
      price: this.burgerItem.price,
      type: kindOfBurger
    };
    this.showKindOfBurger = false;
    this.burgerItem.type = kindOfBurger;
    this.replaceItem(burger);
    // si pongo this.addItem(this.burgerItem), cada vez que agregue una hamburguesa con un tipo distinto,
    // todas las hamburguesas cambiarán su tipo. Ejemplo: si elijo una beef y después una veg,
    // ambas hamburguesas serán veg. Si elijo una beef, una veg y una chicken, las 3 hamburguesas serán chicken
  }


  bringTheInterestOrder() {
    this.currentId = this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id');
    this.ordersService.bringOneOrderV2(id).snapshotChanges().subscribe(
      whatComes => {
        this.singleOrder = whatComes.payload.data();
        this.itemsOfOrder = this.singleOrder.itemsOfOrder;
        this.loadingStatus = true;
      }
    );
  }

  // first we access the editing mode : show product buttons
  addProduct() {
    this.editing = true;
  }

  // then we add the product to the array of products in the forestore document
  replaceItem(itemComing) {
    if (itemComing.name === 'Hamburguesa Simple' || itemComing.name === 'Hamburguesa Doble') {
      if (itemComing.type === 'Burger') {
        console.log('if primero');
        this.showKindOfBurger = true;
        // si pongo this.burgerItem = item, sólo podemos elegir una hamburguesa Simple y una Doble por pedido
        // y no nos permitirá elegir el tipo [veg,beef,chicken] nunca más.
        // Esto es porque el ngFor corre sólo una vez.
        this.burgerItem.menu = itemComing.menu;
        this.burgerItem.name = itemComing.name;
        this.burgerItem.price = itemComing.price;
        this.burgerItem.type = itemComing.type;
        console.log('this.burgerItem: ', this.burgerItem);

      } else if (this.burgerItem.type === 'chicken' || this.burgerItem.type === 'beef' || this.burgerItem.type === 'veg') {
        this.ordersService.addItemToOrder(this.currentId, itemComing);
      }
    } else {
      this.ordersService.addItemToOrder(this.currentId, itemComing);
    }
  }


  removeItem(item, trashId, liId) {
    this.ordersService.deleteItemInOrder(this.currentId, item, this.itemsOfOrder, trashId, liId);
  }

  bringOnlyBreakfast() {
    this.breakfastBool = true;
    this.traditionalBool = false;
    console.log('changing to bringOnlyBreakfast');
  }

  bringOnlyTraditional() {
    this.breakfastBool = false;
    this.traditionalBool = true;
    console.log('changing to bringOnlyTraditional');

  }

}


