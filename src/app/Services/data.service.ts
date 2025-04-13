import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUserData(){
    return this.http.get<any>('https://01.fy25ey01.64mb.io/')
  }
}
