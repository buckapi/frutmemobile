import { Component, OnInit } from '@angular/core';

import {Butler} from '@app/services/butler.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(
    public _butler:Butler
    ) { }

  ngOnInit(): void {
    if(this._butler.metodo==1){
      this.paymentAddress="0x0b55a324194e731bb8f19fd007dbe5af8fa17792";
      this.mensaje="Su pedido ha sido registrado exitosamente,  por favor realice el pago en USDT a la siguiente direccion wallet:"
    }if(this._butler.metodo==2){
      this.paymentAddress="";
    }
  }
  paymentAddress="";
  red="BNB Smart Chain (BEP20)";
  mensaje="Su pedido ha sido registrado exitosamente, en breve le contactaremos. Gracias por preferirnos";

}
