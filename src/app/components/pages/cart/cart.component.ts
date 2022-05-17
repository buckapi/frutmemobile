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
precioDolar= 5.3;
currency = "USD";
}
