import { Component,OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  heros :any[]=[]; 
  
  

  constructor(public _shared : ShareService){}



  ngOnInit(): void {
      
  }





}
