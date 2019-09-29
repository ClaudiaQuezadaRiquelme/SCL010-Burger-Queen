import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { OrdersService } from "./services/orders.service";
import { ProductListComponent } from './components/product-list/product-list.component';
import {InputOrderComponent} from './components/input-order/input-order.component';
import { InitialFrontComponent } from './components/initial-front/initial-front.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { MenuBoardComponent } from './components/menu-board/menu-board.component';
import { ActualOrdersComponent } from './components/actual-orders/actual-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    InputOrderComponent,
    InitialFrontComponent,
    NavbarComponent,
    HeaderComponent,
    MenuBoardComponent,
    ActualOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

