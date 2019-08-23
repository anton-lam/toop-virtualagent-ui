import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  /** Passage from Guermantes Way by Proust */
  content: String;
  content$: Observable<any>;

  /** whether one is logged in or not */
  loggedIn: boolean;

  /** boolean dictating whether to show login/register */
  showLoginRegisterBool: boolean; 

  constructor(public homeService: HomeService, authService: AuthService) {
    this.showLoginRegisterBool = false;
    this.content$ = homeService.getContent();
    this.loggedIn = authService.checkUserIsLoggedIn();
   }

  ngOnInit() {
    this.content$.subscribe(content => {
      this.content = content;
    })
  }

  updateLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }

  showLoginRegister() {
    this.showLoginRegisterBool = true;
  }

}
