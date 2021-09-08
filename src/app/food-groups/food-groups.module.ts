import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodGroupsComponent } from './food-groups.component';
import { FoodDetailModule } from './food-detail/food-detail.module';
import { FoodGroupsRoutingModule } from './food-groups.routing';



@NgModule({
  declarations: [FoodGroupsComponent],
  imports: [
    CommonModule, FoodDetailModule, FoodGroupsRoutingModule
  ],
  exports: [
    FoodGroupsComponent
  ]
})
export class FoodGroupsModule { }
