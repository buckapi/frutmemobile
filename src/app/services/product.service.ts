import { Injectable } from '@angular/core';
import {Products} from "./products";

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any = {};  
  constructor() { 
    Products.forEach((product: any) => {
      this.products[product.name] = {
          loaded: false,
          img: product.img
      };
  }); 
  }

  load(...products: string[]) {
    var promises: any[] = [];
    return Promise.all(promises);
  }



}
