import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  showErrorMessage: boolean = false;
  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
    console.log('hit');
  }

  loginUser(e) {
  	e.preventDefault();
  	console.log(e);

    // TODO: call a service to authenticate
  	if (this.username == 'admin' && this.password == 'admin') {
      this.user.setUserLoggedIn();
  		this.router.navigate(['dashboard']);
  	} else {
      this.showErrorMessage = true;
    }
  }

}
