import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.registerForm = this.fb.group(
      { email: [ '', Validators.required ], newPassword: ['', Validators.required], newPasswordCheck: ['', Validators.required] }
    )
  }

  ngOnInit() {}

  onSubmit({ valid, value }) {
    if (valid) {
      //this.authService.register
    }
  }

}
