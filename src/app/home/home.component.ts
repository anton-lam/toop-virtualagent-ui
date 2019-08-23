import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
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

  /** email used for the header */
  email: string; 

  /** bonus button */
  bonus: boolean;

  constructor(public homeService: HomeService,  private authService: AuthService) {
    this.showLoginRegisterBool = false;
    this.content$ = homeService.getContent();
    this.loggedIn = authService.checkUserIsLoggedIn();
    this.bonus = false;
   }

  ngOnInit() {
    this.content$.subscribe(content => {
      this.content = content;
    })

    if(this.authService.getDecodedToken())  
      this.updateHeader();
    
  }

  /** Called when a successful login occurs */
  updateLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
    this.updateHeader();
    
  }

  /** Show login and register options */
  showLoginRegister() {
    this.showLoginRegisterBool = true;
  }

  private updateHeader() {
    this.email = this.authService.getDecodedToken()["sub"];
    this.bonus = true;
  }

}
