import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }
  url: string = 'https://randomuser.me/api/?results=20';

  getUsers(){
    return this.http.get(this.url);
  }


}
