import { Component, OnInit, Input } from '@angular/core';
import { TokenResponse } from '../models/auth.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;

  @Input() email: string;

  constructor(private authService: AuthService) {
    this.loggedIn = false;
   }

  ngOnInit() {
  }

  updateLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
    console.log("UPDATEDLOGGEDIN");
    if(loggedIn) {
      let a = this.authService.getDecodedToken();
      console.log("######");
      console.log(a);
    }
  }
}
