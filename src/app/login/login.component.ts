import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  @Output() loggedIn = new EventEmitter<boolean>();


  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.loginForm = this.fb.group(
      { email: [ '', Validators.required ], password: ['', Validators.required] }
    )
  }

  ngOnInit() {}

  onSubmit({ valid, value }) {
    if (valid) {
      this.authService.login(value).subscribe(
        res => {
          //success! add token and refresh the entire page 
          this.authService.setAuthorizationToken(res.token);
          this.loggedIn.emit(true);
        },
        err => {
          //incorrect password, username
          //TODO: do something
        }
    );
    }
  }

}
