import { Component,OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent implements OnInit {
  hero = {
    name:"",
    power:0,
    image: ''
  }
 

  ajout(){
  
 this._shared.createnewhero(this.hero)
 .subscribe(
  res=>{
    this.hero = {
      name:"",
      power:0,
      image: ''
    }
  },
  err=>{
    console.log(err)
  }
 );


  
}


  constructor(public _shared:ShareService){ }

  ngOnInit(): void {
      
  }
  

}
