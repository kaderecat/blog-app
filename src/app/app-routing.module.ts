import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeroComponent } from './components/hero/hero.component';
import { PostsComponent } from './components/posts/posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { canActivate,redirectLoggedInTo,redirectUnauthorizedTo  } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login'])
const redirectToHome = () => redirectLoggedInTo(['/'])

const routes: Routes = [
{path : '' , component : HeroComponent},
{path : 'home' , component : HomeComponent},
{path : 'login' , component : LoginComponent,...canActivate(redirectToHome)},
{path : 'register' , component : RegisterComponent,...canActivate(redirectToHome)},
{path : 'profile' , component : ProfileComponent,...canActivate(redirectToLogin)},
{path : 'posts' , component : PostsComponent},
{path : 'add-post' , component : AddPostComponent,...canActivate(redirectToLogin)},
{path : 'posts/:id' , component : SinglePostComponent},
{path : 'edit/:id' , component : EditPostComponent,...canActivate(redirectToLogin)},
{path : 'my-posts' , component : MyPostsComponent,...canActivate(redirectToLogin)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
