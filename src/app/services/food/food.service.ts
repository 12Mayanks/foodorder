import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as data from '../../../../db.json';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getData(){
    // return this.http.get('http://localhost:3000/foods');
    return data.foods;
  }
}
