import { Component } from '@angular/core';
import { filter, map } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss'],
})
export class MyPostsComponent {
  constructor(private postService: PostsService , private userService : UserService) {}

  posts: any;
  userId : any
 

  ngOnInit(): void {
    this.userId = localStorage.getItem('user')
    this.postService.getPosts().pipe(map(posts => posts.filter(post => post.uid === this.userId))).subscribe((data)=>this.posts = data
    
    )
    
  }
}
