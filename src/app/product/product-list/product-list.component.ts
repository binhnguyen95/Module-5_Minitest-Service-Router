import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }


  getAll() {
    this.products = this.productService.getAll();
  }

  removeProduct(product: Product) {
    return this.productService.removeProduct(product)
  }

  findById(product: Product) {
    console.log(product)
    return this.productService.findById(product)
  }

  ngOnInit(){
    this.getAll();
  }

}
