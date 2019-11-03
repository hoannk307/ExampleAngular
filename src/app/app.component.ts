import { Component } from '@angular/core';
import {Product}  from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoAngular';

  totalproduct: number = 10;
  arrProduct: Product[];
  showActions: boolean = false;


  notifichangeTotal(newItem: number,  ) {
    this.totalproduct = newItem;
  }

  receiveProducs(arrProduct: Product[]) {
    this.arrProduct = arrProduct;
    console.log(this.arrProduct);
  }


  showUser(){
    this.showActions = true;
  }

}
