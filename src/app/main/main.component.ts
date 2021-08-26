import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/assets/code-snippets/User';

@Component({
  selector: 'fp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() user: User;

  router: Router;

  constructor(private _router: Router) {
    this.router = _router;
   }

  ngOnInit(): void {
  }

}
