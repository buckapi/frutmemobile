import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ScriptService } from '@app/services/script.service';

import { ScriptStore } from '@app/services/script.store';

import { SwiperOptions } from 'swiper';
import {Butler} from '@app/services/butler.service';
import { BikersService } from '@app/services/';
import {Map, Popup,Marker} from 'mapbox-gl';
import { MapService } from '@app/services/map.service';
import { Feature } from '@app/interfaces/places';

interface Product {
  id: number;
  name: string;
  img: string;
  costPrice: number;
  perc: number;
  presentation: string;
}

const PRODUCTS: Product[] = [
  {
     id: 1,
    name: 'Tomates',
    img: 'assets/products/tomates.jpg',
    costPrice: 7,
    perc: 30,
    presentation:'Kg'
  },
  {
    id: 2,
    name: 'Bananas',
    img: 'assets/products/bananos.jpg',
    costPrice: 1,
    perc: 30,
    presentation:'Kg'
  }
];

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {

  private debounceTimer?:NodeJS.Timeout;
@ViewChild('mapDiv')mapDivElement!:ElementRef
@ViewChild('mysearch')myserachElement!:ElementRef

link:string=""; 
  constructor(
    private bikersService:BikersService,

    public script:ScriptService,
    private mapService:MapService,
    public _butler: Butler
  ) { } 

  config: SwiperOptions = {

    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 5,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    spaceBetween: 5,
    navigation: false
  };  
  


public details(b:any){
  let a =b;
  if (a==1){this.link="assets/assets/img/user4.jpg";}
  if (a==2){this.link="assets/assets/img/user10.jpg";}
  if (a==3){this.link="assets/assets/img/user40.jpg";}
  if (a==4){this.link="assets/assets/img/user2.jpg";}
  if (a==5){this.link="assets/assets/img/user20.jpg";}
  if (a==6){this.link="assets/assets/img/user3.jpg";}
if(!this._butler.details){
    this._butler.details=true;
    return
  }else{
    this._butler.details=false;
  }
}

focusRemove(){
  this.myserachElement.nativeElement.blur();
}

  ngAfterViewInit(): void {

     this.script.load(
    'jquery',
    'popper',
    'bootstrap-5',
    'cookie',
    'swiper',
    'pwa-services',
    'nouislider',
    'main',
    'color-scheme',
    'app')
    .then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
   

 
  

  }

  products = PRODUCTS;
}
