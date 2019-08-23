import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;

  @Output() loggedIn = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { 
    this.loginForm = this.fb.group(
      { email: [ '', [Validators.required, Validators.email ]], password: ['', Validators.required] }
    )
  }


  onSubmit({ valid, value }) {
    if (valid) {
      this.authService.login(value).subscribe(
        res => {
          //success! add token and refresh the entire page 
          this.authService.setAuthorizationToken(res.token);
          this.loggedIn.emit(true);
        },
        err => {
          this._snackBar.open(err.error, 'error', {
            duration: 3000
          });
        }
    );
    }
  }


  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
