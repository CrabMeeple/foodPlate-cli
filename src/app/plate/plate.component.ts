import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {

  //@Input() user;
  currentUser: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
  }
  plateImgPath: string = '../../assets/images/plateImages/';
  fruitEmpty: string = `${this.plateImgPath}fruit-empty.png`;
  grainDairyEmpty: string = `${this.plateImgPath}graindairy-empty.png`;
  proteinEmpty: string = `${this.plateImgPath}protein-empty.png`;
  vegEmpty: string = `${this.plateImgPath}veg-empty.png`;
  fruitFull: string = `${this.plateImgPath}fruit-full.png`;
  grainDairyFull: string = `${this.plateImgPath}graindairy-full.png`;
  proteinFull: string = `${this.plateImgPath}protein-full.jpg`;
  vegFull: string = `${this.plateImgPath}veg-full.jpg`;

}
