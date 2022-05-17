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
    name: 'Cambur amarillo',
    img: 'assets/products/bananos.jpg',
    costPrice: 1,
    perc: 30,
    presentation:'Kg'
  },
   {
     id: 3,
    name: 'Pata de Res',
    img: 'assets/products/patasres.jpg',
    costPrice: 15,
    perc: 30,
    presentation:'Kg'
  },
   {
     id: 4,
    name: 'Auyama',
    img: 'assets/products/auyama.jpg',
    costPrice: 3,
    perc: 30,
    presentation:'Kg'
  },
   {
     id: 5,
    name: 'Cafe',
    img: 'assets/products/cafe.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'500g'
  },
   {
     id: 6,
    name: 'papel higienico',
    img: 'assets/products/papelhigienico.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'6 rollos'
  },

   {
     id: 7,
    name: 'Oreo',
    img: 'assets/products/oreo.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'paquete'
  },

   {
     id: 8,
    name: 'Naranjas',
    img: 'assets/products/naranjas.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },

   {
     id: 9,
    name: 'Chocolate',
    img: 'assets/products/chocolate.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'g'
  },

   {
     id: 10,
    name: 'Jabon lava platos',
    img: 'assets/products/lavalosa.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'g'
  },

   {
     id: 11,
    name: 'Lentejas',
    img: 'assets/products/lentejas.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },

   {
     id: 12,
    name: 'Leche en polvo',
    img: 'assets/products/lechelacampesina.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },

   {
     id: 13,
    name: 'Mango',
    img: 'assets/products/mangos.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },

   {
     id: 14,
    name: 'Trululu',
    img: 'assets/products/trululus.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'g'
  },

   {
     id: 15,
    name: 'Costilla de res',
    img: 'assets/products/costilla.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },

   {
     id: 16,
    name: 'Avena',
    img: 'assets/products/avena.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },

   {
     id: 17,
    name: 'Aceite Mazeite',
    img: 'assets/products/aceitemazeite.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'lts'
  },

   {
     id: 18,
    name: 'Aguacate',
    img: 'assets/products/aguacate.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 19,
    name: 'Aji dulce',
    img: 'assets/products/ajisdulce.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 20,
    name: 'Ajo',
    img: 'assets/products/ajo.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 21,
    name: 'Ajo Porro',
    img: 'assets/products/ajoporro.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 22,
    name: 'Apio españa',
    img: 'assets/products/apioespaña.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 23,
    name: 'Arroz mary',
    img: 'assets/products/arrozmary.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 24,
    name: 'Arvejas',
    img: 'assets/products/arvejas.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 25,
    name: 'Azucar',
    img: 'assets/products/azucar.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 26,
    name: 'Carne Bistek',
    img: 'assets/products/bistec.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 27,
    name: 'Cambur Verde',
    img: 'assets/products/cambusverde.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 28,
    name: 'Caraotas',
    img: 'assets/products/caraotas.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 29,
    name: 'Lagarto molido',
    img: 'assets/products/carnemolida.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 30,
    name: 'Lagarto en trozos',
    img: 'assets/products/carnetrosos.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 31,
    name: 'Sangria',
    img: 'assets/products/carorña.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'lts'
  },
  {
     id: 32,
    name: 'Cebolla',
    img: 'assets/products/cebollas.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 33,
    name: 'Cebollin',
    img: 'assets/products/cebollin.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 34,
    name: 'Cereal',
    img: 'assets/products/cereal.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'g'
  },
  {
     id: 35,
    name: 'Cilantro',
    img: 'assets/products/cilantro.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 36,
    name: 'Cloro',
    img: 'assets/products/cloro.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'lts'
  },
  {
     id: 37,
    name: 'Coca Cola',
    img: 'assets/products/cocacola.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'lts'
  },
  {
     id: 38,
    name: 'cocosete',
    img: 'assets/products/cocosete.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'g'
  },
  {
     id: 39,
    name: 'Crema dental',
    img: 'assets/products/cremadentalcolgate.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'g'
  },
  {
     id: 40,
    name: 'Harina de trigo',
    img: 'assets/products/harinaleudante.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 41,
    name: 'Harina Pan',
    img: 'assets/products/harinapan.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },

  {
     id: 42,
    name: 'Huevos',
    img: 'assets/products/huevos.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'15 Und'
  },
  {
     id: 43,
    name: 'Jabon azul',
    img: 'assets/products/jabolrombo.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'g'
  },
  {
     id: 44,
    name: 'Jabon azul',
    img: 'assets/products/jabonlasllaves.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'g'
  },
  {
     id: 45,
    name: 'Jabon en polvo',
    img: 'assets/products/jabonpolvollaves.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 46,
    name: 'Jabon en polvo',
    img: 'assets/products/jabonpolvoultrex.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 47,
    name: 'Leche condensada',
    img: 'assets/products/lechecondensada.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'g'
  },

  {
     id: 48,
    name: 'Lechosa',
    img: 'assets/products/lechosa.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 49,
    name: 'Limones',
    img: 'assets/products/limon.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 50,
    name: 'Margarina mavesa',
    img: 'assets/products/margarina.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 51,
    name: 'Mayonesa mavesa  ',
    img: 'assets/products/mayonesa.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 52,
    name: 'Papa',
    img: 'assets/products/papas.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg  '
  },
  {
     id: 53,
    name: 'Parchita',
    img: 'assets/products/parchita.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'500g'
  },{
     id: 54,
    name: 'Pasta primor larga',
    img: 'assets/products/pastaprimorlarga.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 55,
    name: 'Pasta primor pluma',
    img: 'assets/products/pastaprimorpluma.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 56,
    name: 'Pepino',
    img: 'assets/products/pepino.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 57,
    name: 'Pimenton',
    img: 'assets/products/pimenton.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 58,
    name: 'Platano verde',
    img: 'assets/products/platanosverdes.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 59,
    name: 'Platano amarillo',
    img: 'assets/products/platanosverdes.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 60,
    name: 'Pollo',
    img: 'assets/products/pollo.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 61,
    name: 'Queso blanco',
    img: 'assets/products/quesoblanco.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 62,
    name: 'Queso ahumado',
    img: 'assets/products/quesoahumado.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 63,
    name: 'Ron Casique',
    img: 'assets/products/roncasique.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'lts'
  },
  {
     id: 64,
    name: 'Pasta ronco larga',
    img: 'assets/products/roncolarga.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 65,
    name: 'Pasta ronco pluma',
    img: 'assets/products/roncopluma.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 66,
    name: 'Galletas saltitacos',
    img: 'assets/products/saltitacos.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'7 tacos'
  },
  {
     id: 67,
    name: 'Sal',
    img: 'assets/products/salcristal.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 68,
    name: 'Samba',
    img: 'assets/products/samba.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'g'
  },
  {
     id: 69,
    name: 'Yuca',
    img: 'assets/products/yucas.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 70,
    name: 'Piña',
    img: 'assets/products/piña.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
  {
     id: 71,
    name: 'Apio',
    img: 'assets/products/apio.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
   {
     id: 72,
    name: 'Mora',
    img: 'assets/products/mora.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
  },
   {
     id: 73,
    name: 'Pepsi',
    img: 'assets/products/pepsi.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'lts'
  },
   {
     id: 74,
    name: 'Zanahorias',
    img: 'assets/products/zanahorias.jpg',
    costPrice: 20,
    perc: 30,
    presentation:'kg'
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
   
this._butler.cart= this.products;
 
  

  }
precioDolar= 5.3;
currency = "USD";
  products = PRODUCTS;
}
