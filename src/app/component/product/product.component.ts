import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() products?: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onChangeQuality = new EventEmitter();

  changeQuality(product: Product) {
    if((product.quality ?? 0) <0) product.quality = 0;
    this.onChangeQuality.emit(product);
  }
  removeProduct(product?: Product) {
    let confrm = confirm('Bạn có chắc chắn xóa con hàng ' + product?.name);
    if (confrm) {
      this.onRemoveProduct.emit(product?.id);
      // let index = this.products.findIndex((item) => item.id === product.id);
      // this.products.splice(index, 1);
    }
  }
}
