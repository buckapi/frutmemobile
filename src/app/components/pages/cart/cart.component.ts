import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Butler} from '@app/services/butler.service';
import { DataApiService } from '@app/services/data-api.service';
import { Observable } from 'rxjs/internal/Observable';
import {Router} from '@angular/router';
import { OrderInterface } from '../../../interfaces/order-interface';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // orders: Observable<any>;
  // order: Observable<any>;
  constructor(
   public _butler: Butler,
   public router:Router,
   public dataApi:DataApiService
    ) { }
   public order : OrderInterface={
    status:"new",
    metodo:''
  }; 
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
  if(v===3){
    this.order.car=this._butler.cart;
    this.order.total=this._butler.total;
    
    if(this.feedSelected==1){
      this._butler.metodo=1;
    this.order.metodo="USDT";}
  if(this.feedSelected==2){this.order.metodo="PayPal";
  this._butler.metodo=2;}
    this.newOrder(this.order);
  }




}
  public newOrder(order:any){
    return this.dataApi.saveOrder(this.order)
       .subscribe((order) => (
        this.router.navigate(['/success'])
        )
      );
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
