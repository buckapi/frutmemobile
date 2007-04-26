import { Component,OnInit } from '@angular/core';
import { BikersService } from './services';
import { Butler } from './services/butler.service';
import { ScriptService } from './services/script.service';
//declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frutmesuper';
  constructor(
    public script:ScriptService,
    public bikersScript:BikersService,
    public _butler:Butler
  ){}
  ngOnInit(): void {
    // this.bikersScript.getUserLocation();
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
      .then(data => {console.log('script loaded ', data);}).catch(error => console.log(error));
    
  }
}
