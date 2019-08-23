import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  registered: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService, private _snackBar: MatSnackBar, private router: Router) { 
    this.registered = false;
    this.registerForm = this.fb.group(
      { email: [ '', [Validators.required, Validators.email ]], password: ['', Validators.required], verifyPassword: ['', Validators.required] }
    )
  }

  ngOnInit() {}

  onSubmit({ valid, value }) {
    if (valid) {
      this.authService.register(value).subscribe(
        res => {
          this._snackBar.open('User Account Successfully Submitted', '', {
            duration: 5000
          });
          this.registered = true;

        },
        err => {
          //TODO: do something
        }
    );
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
