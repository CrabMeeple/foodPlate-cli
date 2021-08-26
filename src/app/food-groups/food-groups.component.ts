import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodGroupsService } from '../services/food-groups.service';

@Component({
  selector: 'fp-food-groups',
  templateUrl: './food-groups.component.html',
  styleUrls: ['./food-groups.component.css']
})
export class FoodGroupsComponent implements OnInit {

  foodGroups;

  showGroup(group) {
    console.log(group.name);
    this.router.navigate([group.name], {relativeTo: this.route});
  }
  constructor(private foodGroupsService: FoodGroupsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.foodGroups = this.foodGroupsService.getFoodGroups();
    console.log(this.foodGroups); 
  }

}
