import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  passwordType = 'password';

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  toggleLock() {
    if (this.passwordType === 'password') {
      return (this.passwordType = 'text');
    }
    return (this.passwordType = 'password');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    this.authenticationService
.LogIn({
email : this.form.value.email,
password : this.form.value.password},
      )
      .subscribe(
        () => {
          localStorage.setItem('user', this.form.value.email);
          this.router.navigate(['']);
        },
        (error: any) => {
          this.snackBar.open('There is no such email or password!', 'OK  ', {
            duration: 5000,
          });
        }
      );
  }
}
