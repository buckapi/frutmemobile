import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { OrderInterface } from '../models/order-interface';
import { Butler } from "./butler.service";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	info: Observable<any>;

	orders: Observable<any>;
	order: Observable<any>;
	
  constructor(
  	public _butler:Butler,
  	private http: HttpClient, 
  	private authService:AuthService
  	) {}
  	// headers : HttpHeaders = new HttpHeaders({
  	// 	"Content-Type":"application/json",
  	// 	Authorization: this.authService.getToken()
  	// 	});
	saveOrder(order :OrderInterface){
		const url_api='https://db.bbevolutionbak.com:3025/api/orders';
		return this.http
		.post<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}



}