import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { MyPostsComponent } from 'src/app/components/my-posts/my-posts.component';



@NgModule({
  declarations: [LoginComponent , RegisterComponent, ProfileComponent , MyPostsComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports : [LoginComponent, RegisterComponent]
})
export class UserModule { }
