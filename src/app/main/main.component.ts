import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/assets/code-snippets/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //@Input() user: User;
  currentUser: User;
  router: Router;

  constructor(private _router: Router, private userService:UserService) {
    this.router = _router;
   }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(currentUser => this.currentUser = currentUser);
  }

}
