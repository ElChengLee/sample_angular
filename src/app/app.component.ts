import { Component, OnInit } from '@angular/core';
import { Product } from '../app/model/product.model';
import { ProductService } from '../app/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.subTotal = this.getSubTotal();
    this.totalItems = this.products.length;
  }
  constructor(private productService: ProductService) {
    this.products = this.productService.products;
  }
  subTotal: number = 0;
  totalItems: number = 0;
  products: Product[] = [];
  getSubTotal() {
    let sum = 0;
    this.products.forEach((element) => {
      sum += (element.price ?? 0) * (element.quality ?? 0);
    });
    return sum;
  }
  applyRemoveProduct(productId : string) {
    this.productService.RemoveProductById(productId);
    this.subTotal = this.getSubTotal();
    this.totalItems = this.products.length;
  }
  applyChangeProduct(product: Product) {
    this.productService.UpdateQuality(product);
    this.subTotal = this.getSubTotal();
  }
  applyReloadProduct(){
    this.productService.LoadProduct();
    this.products = this.productService.products;
    this.subTotal = this.getSubTotal();
    this.totalItems = this.products.length;
  }
}
