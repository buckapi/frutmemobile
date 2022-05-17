import { Component, OnInit } from '@angular/core';
interface Category {
  id: number;
  name: string;
  img: string;
}
const CATEGORIES: Category[] = [
  {
     id: 1,
    name: 'Frutas y hortalizas',
    img: 'https://www.frutmesuper.com/assets/assetssuper/images/category/icon-1.svg'
 
  }, {
     id: 2,
    name: 'Carnes y embutidos',
    img: 'https://www.frutmesuper.com/assets/assetssuper/images/category/icon-10.svg'
 
  },
  {
     id: 3,
    name: 'Viveres',
    img: 'https://www.frutmesuper.com/assets/assetssuper/images/category/icon-2.svg'
 
  },
  {
     id: 4,
    name: 'Huevos y lacteos',
    img: 'https://www.frutmesuper.com/assets/assetssuper/images/category/icon-7.svg'
 
  },
  {
     id: 5,
    name: 'Bebidas y licores',
    img: 'https://www.frutmesuper.com/assets/assetssuper/images/category/icon-3.svg'
 
  },
  {
     id: 6,
    name: 'Snacks',
    img: 'https://www.frutmesuper.com/assets/assetssuper/images/category/icon-5.svg'
 
  },
  {
     id: 7,
    name: 'Hogar y limpieza',
    img: 'https://www.frutmesuper.com/assets/assetssuper/images/category/icon-6.svg'
 
  },
  {
     id: 8,
    name: 'Cuidado personal',
    img: 'https://www.frutmesuper.com/assets/assetssuper/images/category/icon-8.svg'
 
  },
  {
     id: 9,
    name: 'Mascotas',
    img: 'https://www.frutmesuper.com/assets/assetssuper/images/category/icon-9.svg'
 
  },

  ];

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 categories = CATEGORIES;
}
