import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodGroupsComponent } from './food-groups.component';



@NgModule({
  declarations: [FoodGroupsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FoodGroupsComponent
  ]
})
export class FoodGroupsModule { }
