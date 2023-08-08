import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { passwordMatchValidator } from '../../services/validations'
import { UserService } from 'src/app/services/user.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  checkpass = false;

  passwordType = 'password';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthenticationService,
    private snackBar : MatSnackBar,
    private userService : UserService
  ) {}

  toggleLock() {
    if (this.passwordType === 'password') {
      return (this.passwordType = 'text');
    }
    return (this.passwordType = 'password');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rePass: ['', [Validators.required]],
    },{
      validators : passwordMatchValidator()
    });
  }

  register() {

    const {username,email,password} = this.form.value
    this.auth.Register({username, email,password }).pipe(switchMap(({ user : { uid}}) => this.userService.addUser({uid , email , displayName : username}))).subscribe(()=>{
      this.router.navigate([''])
    },(error: any) => {
      this.snackBar.open(error.message , 'OK  ' , {
        duration : 5000
      })
    });
  }
}
