import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
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
      { email: [ '', [Validators.required, Validators.email ]], password: ['', Validators.required], verifyPassword: [ {value: '', disabled: true }, Validators.required] },
      { validator: this.passwordMatchValidator() }
    )
  }

  ngOnInit() {}

  /**
   * submit form if valid, otherwise snackbar error
   */
  onSubmit({ valid, value }) {
    if (valid) {
      this.authService.register(value).subscribe(
        res => {
          this._snackBar.open('Registration Application Successfully Submitted', '', {
            duration: 5000
          });
          this.registered = true;
        },
        err => {
          this._snackBar.open(err.error, 'error', {
            duration: 3000
          });
        }
    );
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  public passwordMatchValidator() {
    return (control: FormGroup): ValidationErrors | null => {
      const password = control.get('password');
      const confirmPassword = control.get('verifyPassword');
      // First check the the password has a value and the regex mathces
      if (password && password.value) {
        // if it does remove any errors from the password vield.
        password.setErrors(null);

        // Enable the confirm password if it is dissabled
        if (confirmPassword.disabled) {
          confirmPassword.enable();
        }

        // Check the confirm password matches and is valid
        if (confirmPassword.value && confirmPassword.value === password.value) {
          // Remove errors
          confirmPassword.setErrors(null);
          return null;
        } else {
          // or set the errors on the confirm password only
          confirmPassword.setErrors({ notEquivalent: true });
          // Return the global form errors
          return { matchingPassword: { value: true } };
        }
      } else {
        // Disbale the confirm password if it is currently enabled
        if (!confirmPassword.disabled) {
          confirmPassword.disable();
        }

        // Se the errors on the form password field.
        password.setErrors({ notEquivalent: true });

        // Set form level errors
        return { matchingPassword: { value: true } };
      }
    };
  }

}
