import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { CarouselModule } from '@coreui/angular';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { AddPostComponent } from 'src/app/components/add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { SinglePostComponent } from 'src/app/components/single-post/single-post.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditPostComponent } from 'src/app/components/edit-post/edit-post.component';


@NgModule({
  declarations: [HomeComponent, HeroComponent,PostsComponent, AddPostComponent , SinglePostComponent, EditPostComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSnackBarModule,
    FormsModule,
    CarouselModule
  ],
  exports : [HomeComponent, HeroComponent, PostsComponent, AddPostComponent , SinglePostComponent]
})
export class CoreModule { }
