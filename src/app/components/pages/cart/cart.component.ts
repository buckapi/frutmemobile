import { Component, OnInit } from '@angular/core';
import {Butler} from '@app/services/butler.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
   public _butler: Butler,
   public router:Router
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
    this._butler.totalItems=this._butler.totalItems-1;
      this._butler.cart[i].quant=0;
      this._butler.cart[i].oncart=false;
      this.calculate();
   
}
public calculate(){
  this.total=0;
  for(let i=0;i<this._butler.cart.length;i++){
    this.total=this.total+(this._butler.cart[i].quant*((this._butler.cart[i].costPrice)+(this._butler.cart[i].costPrice*this._butler.cart[i].perc/100))/this.precioDolar);
    this._butler.total=this.total;
  }
  this.total=this.total+(this.total*this.feed);
  this._butler.total=this.total;
}
public go(v:number){
  this.steep=v;
  if(v===3){this.router.navigate(['/success']);}

}
public addFeed(t:number){
  if(t===1){this.feed=0.25;this.feedSelected=1;this.feedOne=true;this.feedTwo=false;}
  if(t===2){this.feed=0.28;this.feedSelected=2;this.feedTwo=true;this.feedOne=false;}
    this.calculate();
}
feedSelected=0;
feedOne=false;
feedTwo=false;
feed=0;
steep=1;
total=0;
precioDolar= 5.3;
currency = "USD";

}
