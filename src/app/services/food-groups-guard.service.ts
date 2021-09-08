import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateChild, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/assets/code-snippets/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FoodGroupsGuardService implements CanActivateChild{
  currentUser: User;
  currentRoute;
  group;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.currentRoute = this.activatedRoute;
   }

   getRoute(group, metValue): boolean {
    if(metValue === true) {
      alert(`You have eaten all of your ${group} for the day!`);
      return false;
    }
    else {
      return true;
    }
   }

   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route);
    console.log(route.queryParams);
    console.log(state);
    this.group = route.queryParams.group;
    this.currentUser = this.userService.getUser();
    const valueMet = this.group + 'Met';
    console.log(valueMet);
    return this.getRoute(this.group, this.currentUser.reqsStatus[valueMet]);
   }
}
