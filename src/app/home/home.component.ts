import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { TokenResponse } from '../models/auth.model';

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

  /** email used for the header */
  email: string; 

  constructor(public homeService: HomeService,  private authService: AuthService) {
    this.showLoginRegisterBool = false;
    this.content$ = homeService.getContent();
    this.loggedIn = authService.checkUserIsLoggedIn();
   }

  ngOnInit() {
    this.content$.subscribe(content => {
      this.content = content;
    })

    if(this.authService.getDecodedToken) 
      this.email = this.authService.getDecodedToken()["sub"];
  }

  updateLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
    this.email = this.authService.getDecodedToken()["sub"];
    
  }

  showLoginRegister() {
    this.showLoginRegisterBool = true;
  }

}
