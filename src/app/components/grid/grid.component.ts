import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Product}  from "../../product";
import * as $ from 'jquery';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {




  constructor() { }

  products: Product[] = [
    {
      id: 1,
      name: 'I phone',
      price: 100,
      quantity: 0,
    },
    {
      id: 2,
      name: 'I phone 8',
      price: 200,
      quantity: 0,
    }
  ];




  tongsosanpham = 0;


  @Output() total = new EventEmitter<number>();
  @Output() arrProduct = new EventEmitter<Product[]>();

  ngOnInit() {


  }

  inputQuantity(id:number, inputElement: HTMLInputElement){

    this.tongsosanpham = 0;
    for(const item of this.products){
      if(item.id === id){
        item.quantity = Number(inputElement.value);
      }
    }

    for(const item of this.products){
      this.tongsosanpham += item.quantity;
    }

    this.arrProduct.emit(this.products);
    this.total.emit(this.tongsosanpham);
  }

  removeProduct(a){
    const index = this.products.findIndex(item => item.id == a);
    if(index !== -1){
      this.products.splice(index,1);
    }

  }

}
