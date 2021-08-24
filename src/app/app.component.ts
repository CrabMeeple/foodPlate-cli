import { OnInit } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  
  constructor(private titleService: Title, private userService: UserService) {

  }
  private user: User;
  ngOnInit() {
    this.titleService.setTitle("Welcome to FoodPlate");
    this.user = this.userService.getUser();
  }
}
