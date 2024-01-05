import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  foods: any[] = [];
  data: any[] = [];

  constructor(private food: FoodService, private route: ActivatedRoute) { }



  ngOnInit(): void {

    this.route.params.subscribe((params) => {

      if (params['item']) {
        this.food.getData().subscribe((data: any) => {
          this.foods = data.filter((foods: any) =>
            foods.foodname.toLowerCase().includes(params['item'].toLowerCase())
            );
        });
      }

      else {
        this.food.getData().subscribe((result: any) => {
          this.foods = result
        })
      }
    
    })
  }

}
