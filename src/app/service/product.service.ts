import { Injectable,OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { Promo } from '../model/promo.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  ngOnInit(){
  }
  constructor(){ 
    this.LoadProduct();
  }
  products: Product[] = [];
  promos: Promo[] = [
    {
      code: 'CUONGBUI1',
      discountPercent: 10
    },
    {
      code: 'CUONGBUI2',
      discountPercent: 20
    },
  ];
  LoadProduct(){
    this.products = [
      {
        id: '1',
        name: 'Ô tô',
        description: 'Đây là phần tử thứ 1',
        image: 'https://via.placeholder.com/200x150',
        price: 12000,
        quality: 2,
      },
      {
        id: '2',
        name: 'Xe máy',
        description: 'Đây là phần tử thứ 2',
        image: 'https://via.placeholder.com/200x150',
        price: 24000,
        quality: 6,
      },
    ];
  }
  RemoveProductById(productId: string) {
    let index = this.products.findIndex((item) => item.id === productId);
    this.products.splice(index, 1);
  }
  UpdateQuality(product: Product) {
    let index = this.products.findIndex((item) => item.id === product.id);
    this.products[index].quality = product.quality;
  }
  GetPromoByCode(promoCode?: string){
    return this.promos.find((item) => item.code === promoCode);
  }
}
