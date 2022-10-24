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

  getProduct(){
    return this.productService.getProduct();
  }

  product = this.getProduct();

  productForm: FormGroup = new FormGroup({
    id: new FormControl(this.product.id),
    name: new FormControl(this.product.name),
    price: new FormControl(this.product.price),
    description: new FormControl(this.product.description),
  });

  constructor(private productService: ProductService) {
  }

  submit() {
    const product= this.productForm.value;
    this.productService.updateProduct(product, product.id);
    this.productForm.reset();
  }

  ngOnInit(): void {
  }

}
