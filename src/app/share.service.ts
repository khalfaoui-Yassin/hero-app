import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private http:HttpClient) { }


private url= 'http://127.0.0.1:3000/';

heros:any[]=[];



createnewhero(hero:any){

  return this.http.post(this.url+'hero/ajout',hero);
}



}
