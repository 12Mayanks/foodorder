import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(private food: FoodService, private route: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const searchItem = this.route.snapshot.paramMap.get('item')
    
    if (searchItem) {
      this.foods = [];
      this.foods = this.food.getData().filter((foods: any) =>
        foods.foodname.toLowerCase().includes(searchItem.toLowerCase())
      );   
    }

    else {
      this.foods = [];
      this.foods = this.food.getData();
      console.log("this.foods => ", this.foods);
      this.changeDetectorRef.detectChanges();
    }
  }

}
