import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { OrderInterface } from '../interfaces/order-interface';
import { Butler } from "./butler.service";

@Injectable({
  providedIn: 'root'
})

export class DataApiService {

	


  constructor(
  	public _butler:Butler,
  	private http: HttpClient
  	) {


  }

  	// headers : HttpHeaders = new HttpHeaders({
  	// 	"Content-Type":"application/json",
  	// 	Authorization: this.authService.getToken()
  	// 	});
	saveOrder(order :OrderInterface){
		const url_api='https://db.bbevolutionbank.com:3025/api/order';
		return this.http
		.post<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
getOrderByNpedido(npedido: string){

		const url_api = `https://db.bbevolutionbank.com:3025/api/order?filter[where][npedido]=${npedido}`;
		return this.http.get(url_api);
	

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}


}