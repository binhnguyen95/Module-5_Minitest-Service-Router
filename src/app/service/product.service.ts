import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product = {}

  products: Product[] = [{
    id: 1,
    name: 'IPhone 1',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 2',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone 3',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 4',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 5 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  getAll() {
    return this.products;
  }

  getProduct() {
    return this.product;
  }

  findById(product:Product){
    return this.product = product
  }

  saveProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(product: any , id: number){
    for(let i=0; i< this.products.length; i++){
      if(this.products[i].id==product.id){
        this.products[i]= product
      }
    }
  }

  removeProduct(product: Product){
    const index = this.products.indexOf(product)
    this.products.splice(index,1);
  }

  constructor() { }
}
