import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './user.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }
  url: string = 'https://randomuser.me/api/?results=20';

  getUsers(): Observable<IUser[]>{
    return this.http.get(this.url)
    .pipe(
      map((users: any) => {
        return users['results'].map(user => { 
          return {
            nameFirst: user.name.first, 
            nameLast: user.name.last,
            email: user.email, 
            phone: user.phone,
            cell: user.cell,
            picLarge: user.picture.large,
            picMedium: user.picture.medium,
            picThumb: user.picture.thumbnail,
          }
        })
      })
    );
  }


}
