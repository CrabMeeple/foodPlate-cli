import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { GrainsDetailComponent } from './grains-detail/grains-detail.component';
import { ProteinDetailComponent } from './protein-detail/protein-detail.component';
import { VegetableDetailComponent } from './vegetable-detail/vegetable-detail.component';
import { DoublePipe } from 'src/app/shared/double.pipe';



@NgModule({
  declarations: [FruitDetailComponent, GrainsDetailComponent, ProteinDetailComponent, VegetableDetailComponent, DoublePipe],
  imports: [
    CommonModule
  ]
})
export class FoodDetailModule { }
