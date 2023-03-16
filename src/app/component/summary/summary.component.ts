import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { Promo } from '../../model/promo.model';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  constructor(private productService: ProductService) {
    this.promos = this.productService.promos;
    this.products = this.productService.products;
  }
  @Input() subTotal?: number;
  @Input() products: Product[];
  @Output() onReloadProduct = new EventEmitter();
  promos: Promo[];
  percentDiscount = 0;
  promoCode: string = "";
  totalDiscount: number = 0;
  calculateDiscount() {
    let promo = this.productService.GetPromoByCode(this.promoCode);
    if (promo) {
      this.percentDiscount = promo.discountPercent ?? 0;
      this.totalDiscount = (this.subTotal ?? 0 * this.percentDiscount) / 100;
    } else {
      alert('Mã khuyến mại không đúng');
    }
  }
  ShoppingNow(){
    this.onReloadProduct.emit();
  }
}
