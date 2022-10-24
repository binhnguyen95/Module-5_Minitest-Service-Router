import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {
    id: 1,
    name: '',
    price: 1,
    description: ''
  };


  getProduct(){
    this.product = this.productService.getProduct();
  }

  ngOnInit() {
    this.getProduct()
  }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  submit() {
    const product= this.productForm.value;
    this.productService.updateProduct(product, product.id);
    this.productForm.reset();
  }

  constructor(private productService: ProductService) { }


}
