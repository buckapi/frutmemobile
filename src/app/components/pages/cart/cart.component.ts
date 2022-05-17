import { Component, OnInit } from '@angular/core';
import {Butler} from '@app/services/butler.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
   public _butler: Butler
    ) { }

  ngOnInit(): void {
  }
  public minus(i:number){
  if(this._butler.cart[i].quant>0){
      this._butler.cart[i].quant=this._butler.cart[i].quant-1;
      this.calculate();
   }
   
}
public plus(i:number){
   if(this._butler.cart[i].quant>=0){
      this._butler.cart[i].quant=this._butler.cart[i].quant+1;
      this.calculate();
   }
}public out(i:number){
   
      this._butler.cart[i].quant=0;
      this._butler.cart[i].oncart=false;
      this.calculate();
   }
}
public calculate(){
  this.total=0;
  for(let i=0;i<=this._butler.cart.length;i++){
    this.total=this.total+(this._butler.cart[i].quant*((this._butler.cart[i].costPrice)+(this._butler.cart[i].costPrice*this._butler.cart[i].perc/100))/this.precioDolar);
    this._butler.total=this.total;
  }
}
total=0;
precioDolar= 5.3;
currency = "USD";

}
