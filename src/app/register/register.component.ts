import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/assets/code-snippets/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentUser: User;
  ageGroups = [
    'select your age group',
    '2-3', '4-8', '9-13', '14-18', '19-30', '31-50', '51+'
  ];
  regForm: FormGroup;
  submit: boolean;

  constructor(private userService: UserService, 
    private fb: FormBuilder, 
    private router: Router) {
      this.regForm = fb.group({
        'firstname' : [null, [Validators.required]],
        'email' : [null, Validators.compose([Validators.required, Validators.email])],
        'gender' : [null, [Validators.required]],
        'ageGroup' : [null, [Validators.required]]
      });
     }

  onSubmit(formValues) {
    // const currentUser = this.regForm.value;
    // this.currentUser = currentUser;
    // console.log(this.regForm.value);
    // this.currentUser.id = 1;
    // this.currentUser.registered = true;
    // this.currentUser.reqsStatus = {
    //   fruitMet: false,
    //   vegMet: false,
    //   proteinMet: false,
    //   grainMet: false
    // };
    // localStorage.setItem('user', JSON.stringify(currentUser));
    // console.log(formValues);
    this.submit = true;
    this.userService.updateUser(formValues);
    UserService.storeUserLocal(formValues);
    this.router.navigate(['myPlate']);
  }

  canDeactivate(): boolean {
    console.log(!this.regForm.touched);
    return !this.regForm.touched || this.submit;
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.regForm.valueChanges.subscribe(value => console.log(value));
  }

}
