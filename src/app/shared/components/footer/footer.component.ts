import { Component, OnInit } from '@angular/core';
import { Butler } from '@app/services/butler.service';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faMotorcycle = faMotorcycle;  
  constructor(
    public _butler:Butler

  ) { }
public go(i:number){
  if(i==1){this._butler.one=true;this._butler.two=false;this._butler.three=false;};
  if(i==2){this._butler.one=false;this._butler.two=true;this._butler.three=false;};
  if(i==3){this._butler.one=false;this._butler.two=false;this._butler.three=true;};

}
public statusChange(){
  if(this._butler.bikerStatus){
    this._butler.bikerStatus=false;
    return
  }  
  if(!this._butler.bikerStatus){
    this._butler.bikerStatus=true;

  }
}
public setProfile(){
 
    this._butler.profile=true;
    this._butler.rides=false;
    return
  }  
  public setRides(){
 
    this._butler.profile=false;
    this._butler.rides=true;
    return
    
 
}

  ngOnInit(): void {
  }


}
