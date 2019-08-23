import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss']
})
export class BonusComponent implements OnInit {
  

  /** observable of users  */
  users$: Observable<any>;
  /** verified and unverified users */
  users: User[];

  constructor(private authService: AuthService, private router: Router) {
    this.users$ = this.authService.getAllUsers();
   }

  ngOnInit() {
    this.users$.subscribe(result => {
      this.users = result.users;
    })
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
