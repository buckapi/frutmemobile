import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Butler} from '@app/services/butler.service';
import { DataApiService } from '@app/services/data-api.service';
import { Observable } from 'rxjs/internal/Observable';
import {Router} from '@angular/router';
import { OrderInterface } from '../../../interfaces/order-interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
public _butler: Butler,
   public router:Router,
   public dataApi:DataApiService
    ) { }
 public order : OrderInterface={
    status:"new",
    npedido:"",
    metodo:''
  }; 
  ngOnInit(): void {
    this.getOrder(this.npedido);
  }
  public getOrder(npedido: string){
    this.dataApi.getOrderByNpedido(npedido)
    .subscribe(
      (order:OrderInterface) => (
      this._butler.orderSelected = order
      )
    );
         // this._uw.orderPro=this.order;
         // console.log("id nuevo: "+this.order.id);
  }
feedSelected=0;
feedOne=false;
feedTwo=false;
feed=0;
steep=1;
total=0;
precioDolar= 18;
currency = "USD";
  npedido="84271";
}
